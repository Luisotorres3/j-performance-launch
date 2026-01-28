import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { TRAINING_PLANS, getPeriodPrice, getTotalPrice } from "@/constants/plans";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialPlanData = location.state;

  const [planData, setPlanData] = useState(initialPlanData);
  const [selectedPeriod, setSelectedPeriod] = useState<"mensual" | "trimestral" | "semestral">(
    initialPlanData?.period || "mensual"
  );
  const [selectedPlanType, setSelectedPlanType] = useState(initialPlanData?.title || "Avanzado");

  const updatePlanData = (planTitle: string, period: "mensual" | "trimestral" | "semestral") => {
    const plan = TRAINING_PLANS.find((p) => p.title === planTitle);
    if (!plan) return;

    const updatedPlanData = {
      title: plan.title,
      originalPrice: period !== "mensual" ? plan.price : undefined,
      price: getPeriodPrice(plan.price, period),
      savings: getPeriodPrice(plan.savings, period),
      gift:
        period === "trimestral"
          ? plan.giftTrimestral
          : period === "semestral"
            ? plan.giftSemestral
            : undefined,
      features: plan.features,
      period: period,
      totalPrice: getTotalPrice(plan.price, period),
      totalOriginalPrice:
        period !== "mensual" ? plan.price * (period === "trimestral" ? 3 : 6) : undefined,
    };
    setPlanData(updatedPlanData);
  };

  useEffect(() => {
    updatePlanData(selectedPlanType, selectedPeriod);
  }, [selectedPlanType, selectedPeriod]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    goals: "",
    comments: "",
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    if (!initialPlanData) {
      window.scrollTo(0, 0);
      navigate("/planes");
    }
  }, [initialPlanData, navigate]);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      setCalendlyLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Reinitialize Calendly when shown and script is loaded
    if (showCalendly && calendlyLoaded && (window as any).Calendly) {
      const element = document.querySelector('.calendly-inline-widget');
      if (element) {
        // Clear any existing content
        element.innerHTML = '';
        
        // Initialize Calendly with maximum hiding options for minimal view
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/jperformancesystem/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0ea5e9',
          parentElement: element,
          prefill: {
            name: formData.name,
            email: formData.email,
          },
          utm: {}
        });
      }
    }
  }, [showCalendly, calendlyLoaded, formData.name, formData.email]);

  if (!initialPlanData || !planData) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCalendly(true);
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData, "Plan:", planData);
  };

  const isFormValid =
    formData.name && formData.email && formData.phone && privacyAccepted && cookiesAccepted;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16">
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/planes"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center text-primary hover:underline mb-4 sm:mb-6 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a planes
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Left Column - Plan Summary */}
              <div className="lg:col-span-1">
                <Card className="lg:sticky lg:top-24">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-lg sm:text-2xl">Resumen del Plan</CardTitle>
                    <CardDescription className="text-sm">Personaliza tu selección</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    {/* Plan Type Selector */}
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm font-semibold">Tipo de plan</Label>
                      <select
                        value={selectedPlanType}
                        onChange={(e) => setSelectedPlanType(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border-2 border-input bg-background focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="Básico">Básico</option>
                        <option value="Avanzado">Avanzado</option>
                        <option value="Opositores">Opositores</option>
                      </select>
                    </div>

                    {/* Period Selector */}
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm font-semibold">Periodo</Label>
                      <div className="grid grid-cols-3 gap-1.5 p-1 bg-muted/50 rounded-lg border border-border">
                        <button
                          type="button"
                          onClick={() => setSelectedPeriod("mensual")}
                          className={`px-2 py-2 text-xs font-semibold rounded-md transition-all ${
                            selectedPeriod === "mensual"
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                          }`}
                        >
                          Mensual
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedPeriod("trimestral")}
                          className={`px-2 py-2 text-xs font-semibold rounded-md transition-all ${
                            selectedPeriod === "trimestral"
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                          }`}
                        >
                          <div className="flex flex-col items-center">
                            <span>Trimestral</span>
                            <span className="text-[10px] text-green-500">-10%</span>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedPeriod("semestral")}
                          className={`px-2 py-2 text-xs font-semibold rounded-md transition-all ${
                            selectedPeriod === "semestral"
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                          }`}
                        >
                          <div className="flex flex-col items-center">
                            <span>Semestral</span>
                            <span className="text-[10px] text-green-500">-17%</span>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{planData.title}</h3>
                      {planData.period && (
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                          Periodo:{" "}
                          <span className="font-semibold capitalize">{planData.period}</span>
                        </p>
                      )}
                    </div>

                    {planData.features && planData.features.length > 0 && (
                      <div className="border-t pt-3">
                        <p className="text-xs sm:text-sm font-semibold mb-2">Incluye:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 sm:gap-y-2">
                          {planData.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs sm:text-sm">
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {planData.gift && (
                      <div className="border-t pt-3">
                        <p className="text-xs sm:text-sm font-semibold mb-1.5">
                          🎁 Regalo incluido:
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{planData.gift}</p>
                      </div>
                    )}

                    <div className="border-t pt-3 sm:pt-4">
                      <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
                        <span className="text-2xl sm:text-3xl font-bold">{planData.price}€</span>
                        {planData.originalPrice &&
                          (planData.period === "trimestral" || planData.period === "semestral") && (
                            <span className="text-base sm:text-lg text-muted-foreground line-through">
                              {planData.originalPrice}€
                            </span>
                          )}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">por mes</p>

                      {planData.totalPrice &&
                        (planData.period === "trimestral" || planData.period === "semestral") && (
                          <div className="mt-2 sm:mt-3">
                            <div className="flex items-baseline gap-2">
                              <p className="text-sm sm:text-base text-primary font-semibold">
                                Total: {planData.totalPrice}€
                              </p>
                              {planData.totalOriginalPrice && (
                                <span className="text-xs sm:text-sm text-muted-foreground line-through">
                                  {planData.totalOriginalPrice}€
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Form and Calendly */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
                {!showCalendly ? (
                  <Card>
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-lg sm:text-2xl">Información Personal</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        Completa tus datos para reservar una sesión con nuestro coach
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                          <div className="space-y-1.5 sm:space-y-2">
                            <Label htmlFor="name" className="text-xs sm:text-sm">
                              Nombre *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Tu nombre"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="text-sm"
                            />
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <Label htmlFor="email" className="text-xs sm:text-sm">
                              Email *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="tu@email.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                          <div className="space-y-1.5 sm:space-y-2">
                            <Label htmlFor="phone" className="text-xs sm:text-sm">
                              Teléfono *
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+34 600 000 000"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="text-sm"
                            />
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <Label htmlFor="experience" className="text-xs sm:text-sm">
                              Experiencia
                            </Label>
                            <Input
                              id="experience"
                              name="experience"
                              placeholder="Ej: 2 años gym"
                              value={formData.experience}
                              onChange={handleInputChange}
                              className="text-sm"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="goals" className="text-xs sm:text-sm">
                            Objetivos principales
                          </Label>
                          <Textarea
                            id="goals"
                            name="goals"
                            placeholder="Cuéntanos qué quieres conseguir..."
                            value={formData.goals}
                            onChange={handleInputChange}
                            rows={2}
                            className="text-sm resize-none"
                          />
                        </div>

                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="comments" className="text-xs sm:text-sm">
                            Comentarios adicionales
                          </Label>
                          <Textarea
                            id="comments"
                            name="comments"
                            placeholder="Lesiones, disponibilidad horaria, etc."
                            value={formData.comments}
                            onChange={handleInputChange}
                            rows={2}
                            className="text-sm resize-none"
                          />
                        </div>

                        <div className="space-y-3 pt-2">
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="checkout-privacy"
                              checked={privacyAccepted}
                              onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                              className="mt-0.5"
                            />
                            <label
                              htmlFor="checkout-privacy"
                              className="text-xs sm:text-sm leading-tight cursor-pointer"
                            >
                              He leído y acepto la{" "}
                              <Link
                                to="/privacidad"
                                className="text-primary hover:underline"
                                target="_blank"
                              >
                                Política de Privacidad
                              </Link>{" "}
                              *
                            </label>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="checkout-cookies"
                              checked={cookiesAccepted}
                              onCheckedChange={(checked) => setCookiesAccepted(checked as boolean)}
                              className="mt-0.5"
                            />
                            <label
                              htmlFor="checkout-cookies"
                              className="text-xs sm:text-sm leading-tight cursor-pointer"
                            >
                              Acepto el uso de cookies según la{" "}
                              <Link
                                to="/cookies"
                                className="text-primary hover:underline"
                                target="_blank"
                              >
                                Política de Cookies
                              </Link>{" "}
                              *
                            </label>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full text-sm sm:text-base min-h-[48px]"
                          disabled={!isFormValid}
                        >
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          <span className="hidden sm:inline">Reservar Consulta con el Coach</span>
                          <span className="sm:hidden">Reservar Consulta</span>
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                      <CardHeader className="pb-3 sm:pb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg sm:text-2xl">Reserva tu Consulta</CardTitle>
                            <CardDescription className="text-xs sm:text-sm">
                              Selecciona el día y hora que mejor te convenga
                            </CardDescription>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowCalendly(false)}
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Editar
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {/* Calendly Widget */}
                        {!calendlyLoaded && (
                          <div className="flex items-center justify-center" style={{ height: "700px" }}>
                            <div className="text-center">
                              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                              <p className="text-muted-foreground">Cargando calendario...</p>
                            </div>
                          </div>
                        )}
                        <div
                          className="calendly-inline-widget w-full"
                          style={{ minWidth: "280px", maxWidth: "100%", height: "700px", display: calendlyLoaded ? 'block' : 'none', textAlign: 'left' }}
                        />

                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted rounded-lg">
                          <h4 className="font-semibold mb-2 text-sm sm:text-base">
                            ¿Qué ocurre después de reservar?
                          </h4>
                          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>
                                Recibirás un email de confirmación con los detalles de la reunión
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>Nuestro coach revisará tu información antes de la llamada</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>
                                Durante la consulta, resolveremos dudas y finalizaremos el proceso de
                                pago
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                )}

                <div className="text-center text-xs sm:text-sm text-muted-foreground">
                  <p>
                    ¿Tienes dudas?{" "}
                    <Link
                      to="/contacto"
                      className="text-primary hover:underline"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Contáctanos
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
