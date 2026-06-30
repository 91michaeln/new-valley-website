import { getUpcomingConcerts, formatDate } from "@/lib/concerts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConcertsProps {
  limit?: number;
  compact?: boolean;
}

export function Concerts({ limit, compact = false }: ConcertsProps) {
  const concerts = getUpcomingConcerts();
  const displayConcerts = limit ? concerts.slice(0, limit) : concerts;

  if (displayConcerts.length === 0) {
    return (
      <div className="text-center">
        <p className="text-lg text-muted-foreground">
          No upcoming shows
        </p>
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", compact && "gap-3")}>
      {displayConcerts.map((concert, index) => (
        <Card
          key={index}
          className={cn(
            "overflow-hidden transition-shadow hover:shadow-lg",
            compact && "rounded-sm border-border/70 bg-background/55 shadow-none hover:shadow-sm"
          )}
        >
          <CardContent className={cn("p-6", compact && "p-4")}>
            <div className={cn("mb-4 flex items-start gap-3", compact && "mb-3")}>
              <Calendar className={cn("mt-1 h-5 w-5 text-accent", compact && "h-4 w-4")} />
              <div>
                <p className={cn("text-sm font-medium text-muted-foreground", compact && "text-xs uppercase tracking-[0.16em]")}>
                  {formatDate(concert.date)}
                </p>
              </div>
            </div>

            <h3 className={cn("mb-2 text-xl font-bold", compact && "font-serif text-lg font-normal")}>{concert.venue}</h3>

            <div className={cn("mb-4 flex items-center gap-2 text-muted-foreground", compact && "mb-3")}>
              <MapPin className="h-4 w-4" />
              <p className="text-sm">
                {concert.city}
                {concert.country && `, ${concert.country}`}
              </p>
            </div>

            {concert.ticketUrl && (
              <Button asChild variant={compact ? "outline" : "default"} size="sm" className={cn("w-full", compact && "h-8 rounded-sm text-xs")}>
                <a
                  href={concert.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Tickets
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
