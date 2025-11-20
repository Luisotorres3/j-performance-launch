import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
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

    // Here you would typically send the data to a backend
    toast({
      title: "Mensaje enviado",
      description: "Gracias por tu mensaje. Te responderé dentro de 24 horas.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
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
        <div className="container mx-auto px-4">
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
              ¿Listo para comenzar tu transformación? Envíame un mensaje y hablemos de cómo alcanzar tus objetivos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Información de contacto</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Correo</h3>
                    <a href="mailto:info@jperformance.com" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all">
                      info@jperformance.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Teléfono</h3>
                    <a href="tel:+34600000000" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                      +34 600 000 000
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
                      Andalucía, España<br />
                      Online
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Redes sociales</h3>
                    <a href="#" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                      @jperformancesystems
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-muted rounded-lg border border-border">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Tiempo de respuesta</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Normalmente respondo todas las consultas en un plazo de 24 horas. Para asuntos urgentes, por favor llama directamente.
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
              <form onSubmit={handleSubmit} className="bg-card p-4 sm:p-6 md:p-8 rounded-lg border border-border">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Enviar un mensaje</h2>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm sm:text-base">Nombre *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="mt-1.5 text-sm sm:text-base h-10 sm:h-11"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm sm:text-base">Correo *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="mt-1.5 text-sm sm:text-base h-10 sm:h-11"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm sm:text-base">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="mt-1.5 text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm sm:text-base">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame tus objetivos y cómo puedo ayudar..."
                      rows={5}
                      className="mt-1.5 text-sm sm:text-base resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-2 text-sm sm:text-base h-11 sm:h-12">
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
