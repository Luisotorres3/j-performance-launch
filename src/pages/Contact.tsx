import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Instagram, MapPin, Send } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { runningChallenges, strengthChallenges } from "@/data/challenges";
import { CONTACT_INFO } from "@/constants/contact";
import emailjs from "@emailjs/browser";
import { contactSchema } from "@/lib/form-validation";
import ContactCaptcha from "@/components/ContactCaptcha";
import { captchaSiteKey } from "@/constants/security";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const challenge = runningChallenges.find(
    (item) => item.id === searchParams.get("reto") || item.legacyId === searchParams.get("reto")
  );
  const strengthChallenge = strengthChallenges.find((item) => item.id === searchParams.get("reto"));
  const isCollaboration = searchParams.get("colaboracion") === "marca";
  const isPlanAdvice = searchParams.get("consulta") === "planes";
  const goal = challenge?.distanceName ?? strengthChallenge?.title;
  const context = goal
    ? `Preparar ${goal}`
    : isCollaboration
      ? "Colaboración de marca"
      : isPlanAdvice
        ? "Elegir mi plan"
        : "";
  const initialMessage = goal
    ? `Hola Juan, quiero preparar ${goal}. Mi nivel actual es: \nMi objetivo y disponibilidad: `
    : isCollaboration
      ? "Hola Juan, me gustaría proponerte una colaboración. Mi marca o proyecto es: \nLa idea que tengo es: "
      : isPlanAdvice
        ? "Hola Juan, necesito ayuda para elegir mi plan. Mi objetivo es: \nActualmente entreno: \nPuedo entrenar estos días: "
        : "";
  const previousMessage = useRef("");
  const reduced = useReducedMotion();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [website, setWebsite] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaVersion, setCaptchaVersion] = useState(0);
  const [formError, setFormError] = useState("");
  const sending = useRef(false);
  const lastSent = useRef(0);
  useEffect(() => {
    const previous = previousMessage.current;
    setFormData((current) => ({
      ...current,
      message: !current.message || current.message === previous ? initialMessage : current.message,
    }));
    previousMessage.current = initialMessage;
  }, [initialMessage]);

  const requestMessage = [context && `Solicitud: ${context}`, formData.message]
    .filter(Boolean)
    .join("\n\n");
  const whatsappUrl = new URL(CONTACT_INFO.whatsapp.url);
  whatsappUrl.searchParams.set(
    "text",
    [
      formData.name && `Soy ${formData.name}.`,
      requestMessage || "Hola Juan, me gustaría hablar sobre mis objetivos.",
    ]
      .filter(Boolean)
      .join("\n\n")
  );

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "-nXRl3c5g-N1Nylkg",
      limitRate: { id: "contact", throttle: 30000 },
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    if (sending.current) return;
    if (website || Date.now() - lastSent.current < 30000) {
      setFormError("Espera unos segundos antes de volver a enviar la solicitud.");
      return;
    }
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      setFormError(validation.error.issues[0].message);
      document.getElementById(String(validation.error.issues[0].path[0]))?.focus();
      return;
    }

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Información faltante",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Privacy and cookies validation
    if (!privacyAccepted) {
      toast({
        title: "Aceptación requerida",
        description: "Confirma que has leído la política de privacidad para continuar.",
        variant: "destructive",
      });
      return;
    }

    if (captchaSiteKey && !captchaToken) {
      setFormError("Completa la verificación antispam antes de enviar.");
      return;
    }
    sending.current = true;
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_jperformance",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_zate27v",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "No proporcionado",
          message: requestMessage,
          to_email: CONTACT_INFO.email,
          ...(captchaSiteKey ? { "g-recaptcha-response": captchaToken } : {}),
        }
      );

      toast({
        title: "✅ Mensaje enviado",
        description: "Gracias por tu mensaje. Te responderé dentro de 24 horas.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setPrivacyAccepted(false);
      lastSent.current = Date.now();
    } catch (error: unknown) {
      // Si es error 412 (Gmail desconectado), usar mailto como alternativa
      if (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        error.status === 412
      ) {
        const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`Contacto de ${formData.name}`)}&body=${encodeURIComponent(
          `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || "No proporcionado"}\n\nMensaje:\n${requestMessage}`
        )}`;

        window.location.href = mailtoLink;

        toast({
          title: "📧 Abriendo tu cliente de correo",
          description:
            "El formulario automático no está disponible. Por favor envía el email que se ha preparado.",
        });
      } else {
        toast({
          title: "❌ Error al enviar",
          description: "Por favor, contacta directamente por WhatsApp o email.",
          variant: "destructive",
        });
      }
    } finally {
      setCaptchaToken("");
      setCaptchaVersion((value) => value + 1);
      sending.current = false;
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background contact-v2">
      <Navigation />

      <section
        id="main-content"
        role="main"
        className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-background"
      >
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div
            className="contact-page-title"
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1>
              {goal
                ? "Prepara tu reto"
                : isPlanAdvice
                  ? "Encuentra tu plan"
                  : isCollaboration
                    ? "Colabora con JPS"
                    : "Contacto"}
            </h1>
            <p>{context || "Cuéntame tu objetivo y hablemos de cómo ayudarte."}</p>
            {context && (
              <Link
                className="contact-change-goal"
                to={
                  goal
                    ? `/retos?tipo=${challenge ? "correr" : "fuerza"}`
                    : isPlanAdvice
                      ? "/planes"
                      : "/contacto"
                }
              >
                {goal ? "Cambiar reto" : isPlanAdvice ? "Ver planes" : "Consulta general"}
              </Link>
            )}
          </motion.div>

          <div className="contact-layout">
            {/* Contact Information */}
            <motion.div
              className="contact-information"
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Información de contacto
              </h2>

              <div className="contact-details">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Correo</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Teléfono</h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {CONTACT_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <SiWhatsapp aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">WhatsApp</h3>
                    <a
                      href={whatsappUrl.toString()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Ubicación</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {CONTACT_INFO.location}
                      <br />
                      Online
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-sm sm:text-base">Redes sociales</h3>
                    <div className="contact-social-links">
                      <a
                        href={whatsappUrl.toString()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <SiWhatsapp aria-hidden="true" className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a
                        href={CONTACT_INFO.social.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                      <a
                        href={CONTACT_INFO.social.tiktok.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <SiTiktok aria-hidden="true" className="w-4 h-4" />
                        TikTok
                      </a>
                      <a
                        href={CONTACT_INFO.social.telegram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Telegram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-response">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Tiempo de respuesta
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Habitualmente, en 24 horas. Si es urgente, llámame directamente.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-column"
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="contact-form-panel">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  {goal ? "Cuéntame tu punto de partida" : "Enviar un mensaje"}
                </h2>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-honeypot" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">
                      Nombre completo <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      autoComplete="email"
                      maxLength={254}
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base">
                      Teléfono (opcional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      maxLength={30}
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">
                      Mensaje <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      maxLength={4000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tus objetivos y cómo puedo ayudarte..."
                      rows={3}
                      required
                      className="text-sm sm:text-base resize-none"
                    />
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Checkbox
                        id="privacy"
                        checked={privacyAccepted}
                        onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                      />
                      <label
                        htmlFor="privacy"
                        className="text-xs sm:text-sm text-muted-foreground leading-tight cursor-pointer"
                      >
                        He leído y acepto la{" "}
                        <Link
                          to="/privacidad"
                          className="text-primary hover:underline"
                          target="_blank"
                        >
                          Política de Privacidad
                        </Link>{" "}
                        <span className="text-destructive">*</span>
                      </label>
                    </div>
                  </div>

                  <ContactCaptcha key={captchaVersion} onVerify={setCaptchaToken} />
                  {formError && (
                    <p role="alert" className="form-error">
                      {formError}
                    </p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {context ? "Enviar solicitud" : "Enviar mensaje"}
                      </>
                    )}
                  </Button>
                  <a
                    className="contact-whatsapp-request"
                    href={whatsappUrl.toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp aria-hidden="true" /> Consultar por WhatsApp
                  </a>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
