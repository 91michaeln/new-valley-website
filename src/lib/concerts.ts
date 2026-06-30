export interface Concert {
  date: string;
  city: string;
  venue: string;
  country?: string;
  ticketUrl?: string;
}

export const concerts: Concert[] = [];

export function getUpcomingConcerts(): Concert[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return concerts
    .filter((concert) => new Date(concert.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
