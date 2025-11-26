import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Instagram, MapPin, Send } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "@/constants/contact";

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
      // Using EmailJS to send emails
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_jperformance",
          template_id: "template_zate27v",
          user_id: "-nXRl3c5g-N1Nylkg",
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || "No proporcionado",
            message: formData.message,
            to_email: CONTACT_INFO.email,
          },
        }),
      });

      if (response.ok) {
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
      } else {
        throw new Error("Error al enviar");
      }
    } catch (error) {
      // Fallback to mailto if EmailJS fails
      const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=Mensaje de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || "No proporcionado"}\n\nMensaje:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      toast({
        title: "Abriendo cliente de correo",
        description: "Se abrirá tu cliente de correo para enviar el mensaje.",
      });
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

                <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">Próximamente</h3>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-md mb-6">
                    Estamos mejorando nuestro formulario de contacto para ofrecerte una mejor experiencia.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-8">
                    Mientras tanto, puedes contactarnos directamente:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <Button
                      asChild
                      size="lg"
                      className="text-sm sm:text-base"
                    >
                      <a href={`mailto:${CONTACT_INFO.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Enviar Email
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="text-sm sm:text-base"
                    >
                      <a href={CONTACT_INFO.whatsapp.url} target="_blank" rel="noopener noreferrer">
                        <SiWhatsapp className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
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
