import { Plus } from "lucide-react";
import { JOINT_PACKS } from "@/data/nutrition";
import BrandLogo from "@/components/BrandLogo";
import jfLogo from "@/assets/jf-reference.webp";
import PlanCatalog from "./PlanCatalog";

export default function JointPacks() {
  return (
    <PlanCatalog
      plans={JOINT_PACKS}
      joint
      optionsFooter={
        <div className="joint-brand-lockup plan-partner-logos">
          <BrandLogo variant="dark" className="joint-jps-logo" />
          <Plus size={18} aria-hidden="true" />
          <div className="joint-jf-logo">
            <div className="jf-logo-crop">
              <img src={jfLogo} alt="JF Nutrición" />
            </div>
          </div>
        </div>
      }
    />
  );
}
