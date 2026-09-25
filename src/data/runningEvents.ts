type RunningEvent = {
  id: string;
  name: string;
  date: string | null;
  city: string;
  distance: string;
  url: string;
};

// Only verified upcoming dates are calendar-ready; null means awaiting confirmation.
export const runningEvents: RunningEvent[] = [
  {
    id: "jaen-media",
    name: "Media maratón Jaén",
    date: "2026-11-15",
    city: "Jaén",
    distance: "21,1 km",
    url: "https://jaenciudaddelatletismo.es/",
  },
  {
    id: "san-anton-jaen",
    name: "San Antón de Jaén",
    date: null,
    city: "Jaén",
    distance: "10 km",
    url: "https://jaenciudaddelatletismo.es/",
  },
  {
    id: "granada-media",
    name: "Media maratón de Granada",
    date: null,
    city: "Granada",
    distance: "21,1 km",
    url: "https://mediamaraton.granada.org/",
  },
  {
    id: "madrid-media",
    name: "Media Maratón Madrid",
    date: "2027-04-04",
    city: "Madrid",
    distance: "21,1 km",
    url: "https://www.mediomaratonmadrid.es/mm4-reglamento",
  },
  {
    id: "madrid-maraton",
    name: "Maratón de Madrid",
    date: "2027-04-25",
    city: "Madrid",
    distance: "42,2 km",
    url: "https://rocknrollmadridrun.com/reglamento/",
  },
  {
    id: "sevilla-media",
    name: "Media Maratón de Sevilla",
    date: "2026-11-29",
    city: "Sevilla",
    distance: "21,1 km",
    url: "https://www.mediomaratondesevilla.es/",
  },
  {
    id: "cordoba-media",
    name: "Media de Córdoba",
    date: "2026-11-29",
    city: "Córdoba",
    distance: "21,1 km",
    url: "https://mediamaratoncordoba.es/",
  },
  {
    id: "san-silvestre-2026",
    name: "San Silvestre Vallecana",
    date: "2026-12-31",
    city: "Madrid",
    distance: "10 km",
    url: "https://sansilvestrevallecana.com/reglamento_popular.php",
  },
  {
    id: "sevilla-maraton-2027",
    name: "Maratón de Sevilla",
    date: "2027-02-21",
    city: "Sevilla",
    distance: "42,2 km",
    url: "https://www.zurichmaratonsevilla.es/zms-preguntas-frecuentes",
  },
  {
    id: "san-silvestre-torreperogil",
    name: "San Silvestre Torreperogil",
    date: null,
    city: "Torreperogil",
    distance: "Carrera popular",
    url: "https://torreperogil.es/",
  },
  {
    id: "huelva-media",
    name: "Media maratón Huelva",
    date: "2026-11-01",
    city: "Huelva",
    distance: "21,1 km",
    url: "https://runnersporthuelva.com/21k/reglamento",
  },
];

export function getUpcomingRunningEvents(now = new Date()) {
  const today = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  return runningEvents
    .map((event) => ({ ...event, date: event.date && event.date >= today ? event.date : null }))
    .sort((a, b) => (a.date ?? "9999").localeCompare(b.date ?? "9999"));
}

export function getGoogleCalendarUrl(event: (typeof runningEvents)[number]) {
  if (!event.date) return undefined;
  const end = new Date(`${event.date}T00:00:00Z`);
  // Google Calendar uses an exclusive end date for all-day events.
  end.setUTCDate(end.getUTCDate() + 1);
  const startDate = event.date.replace(/-/g, "");
  const endDate = end.toISOString().slice(0, 10).replace(/-/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.name,
    dates: `${startDate}/${endDate}`,
    location: `${event.city}, España`,
    details: `${event.distance}. Consulta horarios, recorrido e inscripciones en la web oficial: ${event.url}`,
    ctz: "Europe/Madrid",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
