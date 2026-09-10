import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const ARTIST_ID = "id_15664360";
const BANDSINTOWN_APP_ID = "de1455a037e5fa714d2b6bacee6fd8c6";
const BANDSINTOWN_EVENTS_URL = `https://rest.bandsintown.com/artists/${ARTIST_ID}/events`;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

interface BandsintownOffer {
  status?: string;
  type?: string;
  url?: string;
}

interface BandsintownVenue {
  name?: string;
  city?: string;
  country?: string;
  region?: string;
  url?: string;
}

interface BandsintownEvent {
  id: string;
  datetime: string;
  title?: string;
  description?: string;
  url?: string;
  offers?: BandsintownOffer[];
  venue?: BandsintownVenue;
}

interface TourState {
  upcoming: BandsintownEvent[];
  past: BandsintownEvent[];
  isLoading: boolean;
  error: string | null;
}

function getEventsUrl(date: "upcoming" | "past") {
  const params = new URLSearchParams({
    app_id: BANDSINTOWN_APP_ID,
    date,
  });

  return `${BANDSINTOWN_EVENTS_URL}?${params.toString()}`;
}

async function fetchEvents(date: "upcoming" | "past", signal: AbortSignal) {
  const response = await fetch(getEventsUrl(date), { signal });

  if (!response.ok) {
    throw new Error(`Bandsintown returned ${response.status} for ${date} events.`);
  }

  const events = await response.json();
  return Array.isArray(events) ? (events as BandsintownEvent[]) : [];
}

function getLocalDateParts(datetime: string) {
  const [datePart, timePart = ""] = datetime.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":");

  return {
    day: Number.isFinite(day) ? day : null,
    month: Number.isFinite(month) ? month : null,
    monthLabel: Number.isFinite(month) ? MONTHS[month - 1] : "",
    time: hour && minute && `${hour}:${minute}` !== "00:00" ? `${hour}:${minute}` : "",
    year: Number.isFinite(year) ? String(year) : "",
  };
}

function formatLocalDateTime(datetime: string) {
  const { day, monthLabel, time, year } = getLocalDateParts(datetime);

  if (!day || !monthLabel || !year) {
    return "";
  }

  const formattedDate = `${monthLabel.toUpperCase()}. ${day}, ${year}`;

  if (!time) {
    return formattedDate;
  }

  const [rawHour, rawMinute] = time.split(":").map(Number);
  const period = rawHour >= 12 ? "PM" : "AM";
  const hour = rawHour % 12 || 12;
  const minute = String(rawMinute).padStart(2, "0");

  return `${formattedDate} @ ${hour}:${minute} ${period}`;
}

function getLocation(event: BandsintownEvent) {
  const city = event.venue?.city?.trim();
  const country = event.venue?.country?.trim();

  return [city, country].filter(Boolean).join(", ");
}

function getEventName(event: BandsintownEvent) {
  return event.title?.trim() || event.venue?.name?.trim() || "New Valley String Band";
}

function getVenueName(event: BandsintownEvent) {
  const eventName = getEventName(event);
  const venueName = event.venue?.name?.trim();

  return venueName && venueName !== eventName ? venueName : "";
}

function getTicketUrl(event: BandsintownEvent) {
  const ticketOffer = event.offers?.find((offer) => isValidUrl(offer.url));

  return ticketOffer?.url;
}

function getEventUrl(event: BandsintownEvent) {
  return isValidUrl(event.url) ? event.url : undefined;
}

function getVenueUrl(event: BandsintownEvent) {
  return isValidUrl(event.venue?.url) ? event.venue?.url : undefined;
}

function isValidUrl(url?: string) {
  if (!url) return false;

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function sortAscendingByDatetime(eventA: BandsintownEvent, eventB: BandsintownEvent) {
  return eventA.datetime.localeCompare(eventB.datetime);
}

function sortDescendingByDatetime(eventA: BandsintownEvent, eventB: BandsintownEvent) {
  return eventB.datetime.localeCompare(eventA.datetime);
}

function groupPastEventsByYear(events: BandsintownEvent[]) {
  return events.reduce<Record<string, BandsintownEvent[]>>((groups, event) => {
    const { year } = getLocalDateParts(event.datetime);
    const groupYear = year || "Earlier";

    groups[groupYear] = groups[groupYear] ?? [];
    groups[groupYear].push(event);

    return groups;
  }, {});
}

function SectionHeading({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h3
      id={id}
      className="text-center font-serif text-3xl font-semibold uppercase leading-tight tracking-[0.07em] text-foreground md:text-4xl"
    >
      {children}
    </h3>
  );
}

function EventRow({
  event,
  isFirst = false,
  showEventAction = false,
  showTickets = false,
}: {
  event: BandsintownEvent;
  isFirst?: boolean;
  showEventAction?: boolean;
  showTickets?: boolean;
}) {
  const formattedDateTime = formatLocalDateTime(event.datetime);
  const eventName = getEventName(event);
  const venueName = getVenueName(event);
  const location = getLocation(event);
  const eventUrl = getEventUrl(event);
  const venueUrl = getVenueUrl(event);
  const ticketUrl = showTickets ? getTicketUrl(event) : undefined;
  const shouldShowActions = showEventAction && (eventUrl || ticketUrl);

  return (
    <li
      className={`grid gap-4 py-4 text-foreground md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8 lg:py-5 ${
        isFirst ? "" : "border-t border-[hsl(40_20%_72%)]/75"
      }`}
    >
      <div className="min-w-0">
        {formattedDateTime && (
          <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-[hsl(25_30%_25%)] md:text-[0.95rem]">
            {formattedDateTime}
          </p>
        )}
        {location && (
          <p className="mt-0.5 text-sm leading-5 text-muted-foreground md:text-[0.95rem]">
            {location}
          </p>
        )}
        <p className="mt-3 text-base font-semibold leading-snug text-[hsl(25_30%_25%)] md:text-lg">
          {eventUrl ? (
            <a
              href={eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-primary/75 hover:decoration-primary/35"
            >
              {eventName}
            </a>
          ) : (
            eventName
          )}
        </p>
        {venueName && (
          <p className="mt-0.5 text-sm leading-5 text-muted-foreground/90 md:text-[0.95rem]">
            {venueUrl ? (
              <a
                href={venueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-primary/75 hover:decoration-primary/30"
              >
                {venueName}
              </a>
            ) : (
              venueName
            )}
          </p>
        )}
      </div>

      {shouldShowActions && (
        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          {eventUrl && (
            <Button asChild variant="cta" size="cta" className="h-9 px-4">
              <a
                href={eventUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Event
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Button>
          )}
          {ticketUrl && (
            <Button asChild variant="cta" size="cta" className="h-9 px-4">
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tickets
              </a>
            </Button>
          )}
        </div>
      )}
    </li>
  );
}

function EventList({
  emptyMessage,
  events,
  showEventAction = false,
  showTickets = false,
}: {
  emptyMessage: string;
  events: BandsintownEvent[];
  showEventAction?: boolean;
  showTickets?: boolean;
}) {
  if (events.length === 0) {
    return (
      <p className="py-5 text-center text-sm italic text-muted-foreground">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className="border-b border-[hsl(40_20%_72%)]/70">
      {events.map((event, index) => (
        <EventRow
          key={event.id}
          event={event}
          isFirst={index === 0}
          showEventAction={showEventAction}
          showTickets={showTickets}
        />
      ))}
    </ul>
  );
}

export default function TourPage() {
  const [{ upcoming, past, isLoading, error }, setTourState] = useState<TourState>({
    upcoming: [],
    past: [],
    isLoading: true,
    error: null,
  });
  const [areOlderShowsOpen, setAreOlderShowsOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    Promise.allSettled([fetchEvents("upcoming", controller.signal), fetchEvents("past", controller.signal)])
      .then(([upcomingResult, pastResult]) => {
        if (controller.signal.aborted) return;

        const nextUpcoming = upcomingResult.status === "fulfilled" ? upcomingResult.value : [];
        const nextPast = pastResult.status === "fulfilled" ? pastResult.value : [];
        const hasError = upcomingResult.status === "rejected" || pastResult.status === "rejected";

        setTourState({
          upcoming: [...nextUpcoming].sort(sortAscendingByDatetime),
          past: [...nextPast].sort(sortDescendingByDatetime),
          isLoading: false,
          error: hasError ? "Some tour dates could not be loaded right now." : null,
        });
      })
      .catch(() => {
        if (controller.signal.aborted) return;

        setTourState({
          upcoming: [],
          past: [],
          isLoading: false,
          error: "Tour dates could not be loaded right now.",
        });
      });

    return () => {
      controller.abort();
    };
  }, []);

  const recentPastShows = useMemo(() => past.slice(0, 3), [past]);
  const olderPastShows = useMemo(() => past.slice(3), [past]);

  const olderPastShowsByYear = useMemo(() => {
    const groupedEvents = groupPastEventsByYear(olderPastShows);

    return Object.entries(groupedEvents)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, events]) => ({
        year,
        events: [...events].sort(sortDescendingByDatetime),
      }));
  }, [olderPastShows]);

  return (
    <>
      <div className="min-h-[calc(100vh-5rem)] flex-1 bg-[#F4F0E8] md:min-h-[calc(100vh-6rem)]">
        <div className="container mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 md:px-10 md:pb-20 md:pt-24 lg:px-12">
          <Reveal>
            <div className="mx-auto">
              {error && !isLoading && (
                <p className="mb-10 py-4 text-center text-sm italic text-muted-foreground">
                  {error}
                </p>
              )}

              <section aria-labelledby="upcoming-shows-heading">
                <div className="mb-7 md:mb-9">
                  <SectionHeading id="upcoming-shows-heading">Upcoming Shows</SectionHeading>
                </div>
                {isLoading ? (
                  <p className="py-5 text-center text-sm italic text-muted-foreground">
                    Loading tour dates...
                  </p>
                ) : (
                  <EventList
                    emptyMessage="No upcoming shows at the moment."
                    events={upcoming}
                    showEventAction
                    showTickets
                  />
                )}
              </section>

              {!isLoading && (
                <section aria-labelledby="past-shows-heading" className="mt-16 md:mt-20">
                  <div className="mb-7 md:mb-9">
                    <SectionHeading id="past-shows-heading">Past Shows</SectionHeading>
                  </div>

                  <EventList
                    emptyMessage="Past shows are temporarily unavailable."
                    events={recentPastShows}
                  />

                  {olderPastShows.length > 0 && (
                    <>
                      {areOlderShowsOpen && (
                        <div id="older-past-shows-panel" className="mt-8 space-y-8 md:mt-9 md:space-y-9">
                          {olderPastShowsByYear.map((group) => (
                            <section key={group.year} aria-labelledby={`past-shows-${group.year}`}>
                              <h4
                                id={`past-shows-${group.year}`}
                                className="mb-2 border-t border-[hsl(40_20%_72%)]/80 pt-4 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/70"
                              >
                                {group.year}
                              </h4>
                              <EventList emptyMessage="No past shows." events={group.events} />
                            </section>
                          ))}
                        </div>
                      )}

                      <div className="mt-6 flex justify-center md:mt-7">
                        <Button
                          variant="cta"
                          size="cta"
                          type="button"
                          aria-expanded={areOlderShowsOpen}
                          aria-controls="older-past-shows-panel"
                          className="group"
                          onClick={() => setAreOlderShowsOpen((isOpen) => !isOpen)}
                        >
                          {areOlderShowsOpen ? "Hide older shows" : "View all past shows"}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              areOlderShowsOpen ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </Button>
                      </div>
                    </>
                  )}
                </section>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
