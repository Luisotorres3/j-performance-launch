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
    <div className={`flex items-start gap-4 ${className}`}>
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
};

export default ContactInfoItem;
