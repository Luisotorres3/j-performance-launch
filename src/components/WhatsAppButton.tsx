import { SiWhatsapp } from "react-icons/si";
import { CONTACT_INFO } from "@/constants/contact";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function WhatsAppButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          className="whatsapp-float"
          href={CONTACT_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp (abre una nueva pestaña)"
        >
          <SiWhatsapp size={28} aria-hidden="true" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">Hablamos por WhatsApp</TooltipContent>
    </Tooltip>
  );
}
