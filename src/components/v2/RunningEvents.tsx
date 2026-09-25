import { ArrowUpRight, CalendarDays, CalendarPlus, MapPin } from "lucide-react";
import { getGoogleCalendarUrl, getUpcomingRunningEvents } from "@/data/runningEvents";
import runningPhoto from "@/assets/plans/running-personal.webp";
import LoadingImage from "@/components/LoadingImage";

const dateFormat = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export default function RunningEvents() {
  const events = getUpcomingRunningEvents();
  return (
    <section
      id="eventos-deportivos"
      className="challenge-category running-events"
      aria-labelledby="running-events-title"
    >
      <header className="challenge-type-heading">
        <div>
          <span className="challenge-type-label">
            <CalendarDays size={16} aria-hidden="true" />
            AGENDA
          </span>
          <h2 id="running-events-title">Eventos deportivos</h2>
          <p>Tu próximo dorsal. Una nueva meta por delante.</p>
        </div>
        <LoadingImage
          src={runningPhoto}
          alt="Juan en la pista de atletismo"
          width="180"
          height="100"
        />
      </header>
      {events.length ? (
        <ul className="running-events-list">
          {events.map((event) => (
            <li key={event.id}>
              {event.date ? (
                <time dateTime={event.date}>
                  {dateFormat.format(new Date(`${event.date}T12:00:00Z`))}
                </time>
              ) : (
                <span className="event-pending-date">Fecha por confirmar</span>
              )}
              <div className="running-event-info">
                <h3>{event.name}</h3>
                <p>
                  <MapPin size={14} aria-hidden="true" />
                  {event.city}
                  <span>{event.distance}</span>
                </p>
              </div>
              <div className="running-event-actions">
                {event.date && (
                  <a
                    className="event-calendar-link"
                    href={getGoogleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Añadir ${event.name} a Google Calendar`}
                  >
                    <CalendarPlus size={18} aria-hidden="true" />
                    Google Calendar
                  </a>
                )}
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-button"
                  aria-label={`Web oficial de ${event.name} (nueva pestaña)`}
                >
                  Web oficial <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="challenge-note">Próximamente, nuevos eventos deportivos.</p>
      )}
      <p className="challenge-note">
        Consulta disponibilidad de dorsales y posibles cambios en la web de cada organización. La
        preparación con JPS no incluye la inscripción.
      </p>
    </section>
  );
}
