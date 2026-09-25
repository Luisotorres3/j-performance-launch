import { ArrowUpRight } from "lucide-react";
import type { Client } from "@/data/clients";
import LoadingImage from "@/components/LoadingImage";

export default function AthleteMedia({ client, index }: { client: Client; index: number }) {
  return (
    <div className={`athlete-photo ${client.photo ? "" : "athlete-profile-art"}`}>
      {client.photo ? (
        <LoadingImage
          src={client.photo}
          alt={client.name}
          loading="lazy"
          decoding="async"
          width="600"
          height="750"
        />
      ) : (
        <div className="athlete-monogram" aria-hidden="true">
          <div className="court-markings" />
          <span className="athlete-monogram-label">J PERFORMANCE / FUTSAL</span>
          <strong>
            AP<span>.</span>
          </strong>
          <div className="athlete-monogram-footer">
            <span>
              ANTONIO
              <br />
              PÉREZ
            </span>
            <ArrowUpRight />
          </div>
        </div>
      )}
      <span className="athlete-number">/ {String(index + 1).padStart(2, "0")}</span>
      {client.discipline && <span className="athlete-discipline">{client.discipline}</span>}
    </div>
  );
}
