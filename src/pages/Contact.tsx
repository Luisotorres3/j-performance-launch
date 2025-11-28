import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Instagram, MapPin, Send, Linkedin } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "@/constants/contact";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("-nXRl3c5g-N1Nylkg");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Información faltante",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Privacy and cookies validation
    if (!privacyAccepted || !cookiesAccepted) {
      toast({
        title: "Aceptación requerida",
        description: "Debes aceptar la política de privacidad y el uso de cookies para continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_jperformance",
        "template_zate27v",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "No proporcionado",
          message: formData.message,
          to_email: CONTACT_INFO.email,
        }
      );

      console.log("EmailJS Success:", result);
      
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
      setCookiesAccepted(false);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      
      // Si es error 412 (Gmail desconectado), usar mailto como alternativa
      if (error?.status === 412) {
        const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`Contacto de ${formData.name}`)}&body=${encodeURIComponent(
          `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || "No proporcionado"}\n\nMensaje:\n${formData.message}`
        )}`;
        
        window.location.href = mailtoLink;
        
        toast({
          title: "📧 Abriendo tu cliente de correo",
          description: "El formulario automático no está disponible. Por favor envía el email que se ha preparado.",
        });
      } else {
        toast({
          title: "❌ Error al enviar",
          description: "Por favor, contacta directamente por WhatsApp o email.",
          variant: "destructive",
        });
      }
    } finally {
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Ponte en <span className="text-primary">contacto</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              ¿Listo para comenzar tu transformación? Envíame un mensaje y hablemos de cómo alcanzar
              tus objetivos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Información de contacto
              </h2>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
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
                    <SiWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">WhatsApp</h3>
                    <a
                      href={CONTACT_INFO.whatsapp.url}
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
                    <div className="space-y-1.5">
                      <a
                        href={CONTACT_INFO.whatsapp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <SiWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a
                        href={CONTACT_INFO.social.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <Instagram className="w-4 h-4" />
                        {CONTACT_INFO.social.instagram.handle}
                      </a>
                      <a
                        href={CONTACT_INFO.social.tiktok.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <SiTiktok className="w-4 h-4" />
                        {CONTACT_INFO.social.tiktok.handle}
                      </a>
                      <a
                        href={CONTACT_INFO.social.telegram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        {CONTACT_INFO.social.telegram.handle}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-muted rounded-lg border border-border">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Tiempo de respuesta
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Normalmente respondo todas las consultas en un plazo de 24 horas. Para asuntos
                  urgentes, por favor llama directamente.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg border border-border">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Enviar un mensaje</h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">
                      Nombre completo <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
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
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tus objetivos y cómo puedo ayudarte..."
                      rows={5}
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

                    <div className="flex items-start gap-2 sm:gap-3">
                      <Checkbox
                        id="cookies"
                        checked={cookiesAccepted}
                        onCheckedChange={(checked) => setCookiesAccepted(checked === true)}
                      />
                      <label
                        htmlFor="cookies"
                        className="text-xs sm:text-sm text-muted-foreground leading-tight cursor-pointer"
                      >
                        Acepto el uso de{" "}
                        <Link to="/cookies" className="text-primary hover:underline" target="_blank">
                          Cookies
                        </Link>{" "}
                        <span className="text-destructive">*</span>
                      </label>
                    </div>
                  </div>

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
                        Enviar mensaje
                      </>
                    )}
                  </Button>
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
