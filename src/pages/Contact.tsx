import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Falta información",
        description: "Por favor, rellena todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por tu mensaje. Te responderé en 24 horas.",
    });

    setFormData({
      name: "",
      email: "",
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Ponte en <span className="text-blue-600">Contacto</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Listo para comenzar tu transformación? Envíame un mensaje y hablemos sobre cómo podemos alcanzar tus objetivos juntos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">
                      Andalucía (servicio online)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@jperformance.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      info@jperformance.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Enviar un Mensaje</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Nombre *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="bg-gray-50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="bg-gray-50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tus objetivos y cómo puedo ayudarte..."
                      rows={6}
                      required
                      className="bg-gray-50"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
