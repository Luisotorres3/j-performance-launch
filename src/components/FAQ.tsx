import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo funcionan los entrenamientos online?",
      answer:
        "Trabajo con una planificación completamente personalizada. Recibes tu programa en una plataforma profesional (Hevy), con vídeos, indicaciones técnicas y cargas adaptadas a tu nivel. Yo superviso tu evolución para ajustar volúmenes, intensidades y progresiones en función de tu rendimiento real. Es un sistema estructurado, claro y orientado a resultados.",
    },
    {
      question: "¿Qué diferencia hay entre el entrenamiento presencial y online?",
      answer:
        "En el presencial tienes al entrenador delante y requiere de una adaptación a nivel de horarios completa. En el online tienes un sistema completo, medido y revisado cada semana, que te permite avanzar sin depender de horarios. Mi labor es darte una programación seria y un seguimiento sólido para que entrenes con criterio, no al azar. El valor está en el método, no en la distancia.",
    },
    {
      question: "¿Necesito experiencia previa para empezar?",
      answer:
        "No. Trabajo con iniciación, intermedios y perfiles avanzados. La programación se ajusta a tu punto de partida y tu objetivo. Lo único imprescindible es que quieras mejorar y sigas el plan con constancia.",
    },
    {
      question: "¿Cuánto tiempo tarda en verse resultados?",
      answer:
        "Depende del objetivo y del punto de partida, las primeras mejoras llegan en 4–6 semanas.",
    },
    {
      question: "¿Qué incluye el servicio de nutrición?",
      answer:
        "Incluye una planificación nutricional personalizada, adaptada a tus entrenamientos y objetivos. Revisamos tu evolución y ajustamos ingestas, raciones y estrategias según tus resultados. Es un sistema pensado para mejorar rendimiento, no para hacer dietas milagro.",
    },
    {
      question: "¿Cómo es el proceso de seguimiento y comunicación?",
      answer:
        "Trabajo con comunicación directa a través de WhatsApp o plataforma interna (Hevy). Revisando métricas, vídeos de técnica y comparando resultados a través de las cargas y de las sensaciones que vayas teniendo. A partir de ahí, ajusto la carga, progresiones y tareas específicas.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16 px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Resuelve tus dudas sobre mis servicios de entrenamiento personal
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full bg-card/50 backdrop-blur-sm rounded-xl border border-border shadow-sm"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border last:border-b-0 px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-5 text-base sm:text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
