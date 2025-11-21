import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "¿Cómo funcionan los entrenamientos online?",
      answer:
        "Los entrenamientos online se adaptan completamente a tu horario y ubicación. Recibirás un plan personalizado basado en tus objetivos, nivel físico y disponibilidad de equipamiento. Incluye videos demostrativos, seguimiento semanal y ajustes continuos según tu progreso. Todo a través de una plataforma fácil de usar donde podrás consultarme cuando lo necesites.",
    },
    {
      question: "¿Qué diferencia hay entre el entrenamiento presencial y online?",
      answer:
        "El entrenamiento presencial ofrece supervisión directa e inmediata, ideal si buscas corrección técnica en tiempo real. El online te brinda mayor flexibilidad horaria y es perfecto si viajas frecuentemente o prefieres entrenar en tu propio espacio. Ambos incluyen planes personalizados y seguimiento constante, pero con dinámicas diferentes.",
    },
    {
      question: "¿Necesito experiencia previa para empezar?",
      answer:
        "No, para nada. Trabajo con personas de todos los niveles, desde principiantes absolutos hasta deportistas avanzados. Cada plan se diseña desde cero según tu punto de partida, objetivos y condiciones físicas actuales. Lo importante es tu compromiso y ganas de mejorar.",
    },
    {
      question: "¿Cuánto tiempo tarda en verse resultados?",
      answer:
        "Depende de varios factores: tu punto de partida, objetivos, constancia y adherencia al plan. En general, los primeros cambios en fuerza y resistencia se notan en 3-4 semanas. Los cambios estéticos suelen ser visibles entre 8-12 semanas. Lo más importante es ser consistente y seguir el proceso.",
    },
    {
      question: "¿Qué incluye el servicio de nutrición?",
      answer:
        "Los planes básicos incluyen guías nutricionales generales y recomendaciones adaptadas a tus objetivos. Los planes superiores ofrecen consultas nutricionales más específicas, ajustes según tus progresos y pautas detalladas. No elaboro dietas estrictas, sino que te enseño a crear hábitos alimenticios sostenibles.",
    },
    {
      question: "¿Puedo pausar mi plan si tengo algún imprevisto?",
      answer:
        "Sí, entiendo que la vida a veces trae imprevistos. Si necesitas hacer una pausa por viaje, lesión o motivos personales, podemos ajustar el plan. Lo importante es mantener una comunicación abierta para que podamos adaptar tu entrenamiento a tus circunstancias.",
    },
    {
      question: "¿Cómo es el proceso de seguimiento y comunicación?",
      answer:
        "El seguimiento varía según el plan elegido. Incluye revisiones semanales o quincenales donde analizamos tu progreso, ajustamos ejercicios y resolvemos dudas. La comunicación es por WhatsApp o email, con tiempos de respuesta según el tipo de plan. Mi objetivo es que siempre te sientas acompañado en tu proceso.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16 px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Resuelve tus dudas sobre nuestros servicios de entrenamiento personal
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
