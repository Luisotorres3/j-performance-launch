import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

const ContactInfoItem = ({ icon: Icon, title, children, className = "" }: ContactInfoItemProps) => {
  return (
    <div className={`flex items-start gap-3 sm:gap-4 ${className}`}>
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold mb-1 text-sm sm:text-base">{title}</h3>
        <div className="text-sm sm:text-base text-muted-foreground">{children}</div>
      </div>
    </div>
  );
};

export default ContactInfoItem;
