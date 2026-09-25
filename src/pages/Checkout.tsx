import { useLocation, useNavigate, useSearchParams, Link } from "react-router-dom";
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
import { motion, useReducedMotion } from "framer-motion";
import {
  ALL_PLANS,
  getPlanTotal,
  getAvailablePeriods,
  formatPrice,
  PERIOD_LABELS,
  PERIOD_OPTIONS,
  resolvePlan,
} from "@/constants/plans";

import CalendlyBooking from "@/components/v2/CalendlyBooking";
import WelcomeGift from "@/components/v2/WelcomeGift";
import { phoneSchema } from "@/lib/form-validation";

const Checkout = () => {
  const reduced = useReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPlan = resolvePlan(searchParams.get("plan"));
  const statePlan = resolvePlan(location.state?.title);
  const initialPlan = queryPlan ?? statePlan;
  const plan = initialPlan ?? ALL_PLANS[0];
  const selectedPlanType = plan.title;
  const availablePeriods = getAvailablePeriods(plan);
  const rawPeriod = searchParams.get("periodo") ?? location.state?.period;
  const requestedPeriod =
    rawPeriod === "trimestral" || rawPeriod === "semestral" ? rawPeriod : "mensual";
  const selectedPeriod = availablePeriods.includes(requestedPeriod)
    ? requestedPeriod
    : availablePeriods[0];
  const canSplit = Boolean(plan.semestralSplit && selectedPeriod === "semestral");
  const effectivePayment =
    canSplit && searchParams.get("pago") === "fraccionado" ? "fraccionado" : "completo";
  const planData = { ...plan, price: getPlanTotal(plan, selectedPeriod), period: selectedPeriod };
  const setSelectedPlanType = (title: string) => {
    const nextPlan = resolvePlan(title);
    if (!nextPlan) return;
    const periods = getAvailablePeriods(nextPlan);
    setSearchParams(
      {
        plan: nextPlan.title,
        periodo: periods.includes(selectedPeriod) ? selectedPeriod : periods[0],
      },
      { replace: true }
    );
  };
  const setSelectedPeriod = (period: typeof selectedPeriod) =>
    setSearchParams({ plan: plan.title, periodo: period }, { replace: true });
  const setPaymentMode = (mode: string) =>
    setSearchParams(
      { plan: plan.title, periodo: selectedPeriod, ...(canSplit ? { pago: mode } : {}) },
      { replace: true }
    );
  useEffect(() => {
    if (!initialPlan) {
      navigate("/planes", { replace: true });
      return;
    }
    const canonical = new URLSearchParams({
      plan: selectedPlanType,
      periodo: selectedPeriod,
      ...(canSplit ? { pago: effectivePayment } : {}),
    });
    if (canonical.toString() !== searchParams.toString())
      setSearchParams(canonical, { replace: true });
  }, [
    initialPlan,
    navigate,
    searchParams,
    selectedPeriod,
    selectedPlanType,
    setSearchParams,
    canSplit,
    effectivePayment,
  ]);

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

  useEffect(() => {
    const onConsentChange = (event: Event) => {
      if ((event as CustomEvent<string>).detail === "rejected") setCookiesAccepted(false);
    };
    window.addEventListener("cookie-consent-changed", onConsentChange);
    return () => window.removeEventListener("cookie-consent-changed", onConsentChange);
  }, []);

  if (!initialPlan) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) setShowCalendly(true);
  };

  const isFormValid =
    formData.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
    formData.phone.trim() &&
    phoneSchema.safeParse(formData.phone).success &&
    privacyAccepted &&
    cookiesAccepted;

  return (
    <div className="min-h-screen bg-background checkout-v2">
      <Navigation />

      <section
        id="main-content"
        role="main"
        className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16"
      >
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
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

            <div className="checkout-title">
              <h1>Reserva tu entrevista</h1>
              <p>Revisamos tu objetivo y resolvemos tus dudas antes del pago.</p>
            </div>
            <div className="checkout-layout grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Left Column - Plan Summary */}
              <div className="lg:col-span-1">
                <Card className="lg:sticky lg:top-24">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-lg sm:text-2xl">Tu plan y tu pack</CardTitle>
                    <CardDescription className="text-sm">Personaliza tu selección</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    {/* Plan Type Selector */}
                    <div className="space-y-2">
                      <Label htmlFor="checkout-plan" className="text-xs sm:text-sm font-semibold">
                        Tipo de plan
                      </Label>
                      <select
                        id="checkout-plan"
                        value={selectedPlanType}
                        onChange={(e) => setSelectedPlanType(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border-2 border-input bg-background focus:border-primary focus:outline-none transition-colors"
                      >
                        {ALL_PLANS.map((plan) => (
                          <option key={plan.title} value={plan.title}>
                            {plan.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Period Selector */}
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm font-semibold">Periodo</Label>
                      <div className="checkout-periods" role="group" aria-label="Duración del plan">
                        {availablePeriods.map((period) => (
                          <button
                            key={period}
                            type="button"
                            aria-pressed={selectedPeriod === period}
                            onClick={() => setSelectedPeriod(period)}
                          >
                            {period}
                            {PERIOD_OPTIONS[period].discount > 0 &&
                              ` (-${PERIOD_OPTIONS[period].discount}%)`}
                          </button>
                        ))}
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

                    {planData.detailsPending && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Revisaremos el alcance del plan contigo en la entrevista, antes de
                        contratar.
                      </p>
                    )}
                    <div className="border-t pt-5">
                      <p
                        className="text-4xl font-semibold tracking-tight"
                        data-testid="checkout-total"
                      >
                        {formatPrice(planData.price)} €
                      </p>
                      <p className="mt-2 text-base text-muted-foreground">
                        Importe total · {PERIOD_LABELS[selectedPeriod]}
                      </p>
                    </div>
                    <WelcomeGift period={selectedPeriod} />
                    {canSplit && (
                      <fieldset className="checkout-payments border-t pt-4">
                        <legend>Cómo prefieres pagar después de la entrevista</legend>
                        <label>
                          <input
                            type="radio"
                            name="payment"
                            value="completo"
                            checked={effectivePayment === "completo"}
                            onChange={() => setPaymentMode("completo")}
                          />{" "}
                          Un solo pago de {planData.price} €
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="payment"
                            value="fraccionado"
                            checked={effectivePayment === "fraccionado"}
                            onChange={() => setPaymentMode("fraccionado")}
                          />{" "}
                          Fraccionado en 2 pagos
                        </label>
                        <p>Concretamos los importes y las fechas en la entrevista.</p>
                      </fieldset>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                      Reservar la entrevista no realiza ningún cobro.
                    </p>
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
                        Completa tus datos para la entrevista con Juan
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
                              autoComplete="name"
                              maxLength={100}
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
                              autoComplete="email"
                              maxLength={254}
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
                              autoComplete="tel"
                              maxLength={30}
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
                            placeholder="Disponibilidad horaria u otras preferencias. No incluyas datos médicos."
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
                          <span className="hidden sm:inline">Reservar entrevista previa</span>
                          <span className="sm:hidden">Reservar entrevista</span>
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader className="pb-3 sm:pb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg sm:text-2xl">
                            Reserva tu entrevista
                          </CardTitle>
                          <CardDescription className="text-xs sm:text-sm">
                            Selecciona el día y hora que mejor te convenga
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setShowCalendly(false)}>
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Editar
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CalendlyBooking name={formData.name} email={formData.email} />

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
                            <span>
                              Hablarás con el coach sobre tus objetivos y tu punto de partida
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>
                              Primero realizamos la entrevista. Después, si decides continuar,
                              acordamos el pago
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
