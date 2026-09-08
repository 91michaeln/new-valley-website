import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";

interface Show {
  date: string;
  venue: string;
  city: string;
  country: string;
}

interface ShowYear {
  year: string;
  shows: Show[];
}

const upcomingShows: Show[] = [
  { date: "17 Jul 2026", venue: "Burgruine", city: "Runding", country: "Germany" },
  { date: "19 Jul 2026", venue: "Vintage Pub", city: "Munich", country: "Germany" },
  { date: "20 Jul 2026", venue: "Illertal Cowboys", city: "Vöhringen", country: "Germany" },
  { date: "21 Jul 2026", venue: "Alter", city: "Mannheim", country: "Germany" },
  { date: "22 Jul 2026", venue: "Heinrich – Das Wirtshaus", city: "Braunschweig", country: "Germany" },
  { date: "23 Jul 2026", venue: "Kulturhaus Insel", city: "Berlin", country: "Germany" },
  { date: "25 Jul 2026", venue: "Vinterviken Country & Bluegrass", city: "Stockholm", country: "Sweden" },
  { date: "8 Aug 2026", venue: "Private Party", city: "—", country: "Sweden" },
  { date: "29 Aug 2026", venue: "Dunmore East Bluegrass Festival", city: "Dunmore East", country: "Ireland" },
];

const pastShowsByYear: ShowYear[] = [
  {
    year: "2025",
    shows: [
      { date: "13 Feb", venue: "Roots at Ebenezer's", city: "Crewe", country: "United Kingdom" },
      { date: "15 Feb", venue: "Gainsborough Festival", city: "Gainsborough", country: "United Kingdom" },
      { date: "16 Feb", venue: "Gathering South", city: "Glasgow", country: "Scotland" },
      { date: "17 Feb", venue: "Royal Bar", city: "Lockerbie", country: "Scotland" },
      { date: "20 Feb", venue: "House Concert", city: "London", country: "United Kingdom" },
      { date: "21 Feb", venue: "Green Note", city: "London", country: "United Kingdom" },
      { date: "23 Feb", venue: "The Bell Inn", city: "Bath", country: "United Kingdom" },
      { date: "3 Apr", venue: "Private Concert (Tuborg Slottet)", city: "Malmö", country: "Sweden" },
      { date: "25 Apr", venue: "Nygatan 6", city: "Växjö", country: "Sweden" },
      { date: "25 Apr", venue: "Private Concert", city: "Jönköping", country: "Sweden" },
      { date: "31 May", venue: "Haga Bluegrass Festival", city: "Gothenburg", country: "Sweden" },
      { date: "7 Jun", venue: "Arisaig Bluegrass Festival", city: "Arisaig", country: "Scotland" },
      { date: "20 Jul", venue: "Lokaal 42", city: "Helmond", country: "Netherlands" },
      { date: "21 Jul", venue: "Roots in het Park", city: "Aarschot", country: "Belgium" },
      { date: "23 Jul", venue: "'t Stamineeke Webbekom", city: "Diest", country: "Belgium" },
      { date: "24 Jul", venue: "Muziekcafé Clouso", city: "Meppel", country: "Netherlands" },
      { date: "25 Jul", venue: "Zilleghem Folk", city: "Zillebeke", country: "Belgium" },
      { date: "26 Jul", venue: "Mandy's Lounge", city: "Homburg", country: "Germany" },
      { date: "27 Jul", venue: "The Shakespeare Pub", city: "Herdecke", country: "Germany" },
      { date: "28 Jul", venue: "Kulturhaus Insel", city: "Berlin", country: "Germany" },
      { date: "30 Jul", venue: "Tonelli's", city: "Leipzig", country: "Germany" },
      { date: "1 Aug", venue: "DRK-Kaufbar", city: "Braunschweig", country: "Germany" },
      { date: "2 Aug", venue: "Q Café", city: "Marburg", country: "Germany" },
      { date: "8 Aug", venue: "Festival Herbe Bleue", city: "La Croix-du-Liège", country: "France" },
      { date: "9 Aug", venue: "Private Wedding", city: "—", country: "France" },
      { date: "16 Aug", venue: "Private Concert", city: "Hillerød", country: "Denmark" },
      { date: "18 Aug", venue: "Ramløse Church", city: "Ramløse", country: "Denmark" },
      { date: "6 Sep", venue: "NGBG Festival", city: "Malmö", country: "Sweden" },
    ],
  },
  {
    year: "2024",
    shows: [
      { date: "8 Apr", venue: "Bjärred Församling", city: "Bjärred", country: "Sweden" },
      { date: "19 Jun", venue: "Wintercoat", city: "Sabro", country: "Denmark" },
      { date: "22 Jun", venue: "Amate Galli", city: "Roeselare", country: "Belgium" },
      { date: "24 Jun", venue: "Trefpunt", city: "Ghent", country: "Belgium" },
      { date: "26 Jun", venue: "Boomcafé", city: "Brussels", country: "Belgium" },
      { date: "28 Jun", venue: "Zottegem", city: "Zottegem", country: "Belgium" },
      { date: "30 Jun", venue: "Rotterdam Bluegrass Festival", city: "Rotterdam", country: "Netherlands" },
      { date: "8 Jul", venue: "Fosie Church", city: "Malmö", country: "Sweden" },
      { date: "13 Jul", venue: "Nääsville Bluegrass Festival", city: "Ätran", country: "Sweden" },
      { date: "17 Aug", venue: "Grenna Bluegrass Festival", city: "Gränna", country: "Sweden" },
    ],
  },
  {
    year: "2023",
    shows: [
      { date: "29 Apr", venue: "Växjö Country Roots", city: "Växjö", country: "Sweden" },
      { date: "20 May", venue: "Medley", city: "Malmö", country: "Sweden" },
      { date: "27 May", venue: "Konsert i Ask", city: "—", country: "Sweden" },
      { date: "2 Aug", venue: "Ethno Flanders", city: "—", country: "Belgium" },
      { date: "5 Aug", venue: "La Roche Bluegrass Festival", city: "La Roche-sur-Foron", country: "France" },
      { date: "8 Aug", venue: "Hafebar", city: "Solothurn", country: "Switzerland" },
      { date: "9 Aug", venue: "Interlaken Restaurant", city: "Interlaken", country: "Switzerland" },
      { date: "10 Aug", venue: "Rebleuten", city: "Thun", country: "Switzerland" },
      { date: "11 Aug", venue: "Wolfratshausen", city: "Munich", country: "Germany" },
      { date: "13 Aug", venue: "Bluegrass Theatre", city: "Ostrava", country: "Czech Republic" },
      { date: "31 Aug", venue: "KoM Musik & Bar", city: "Gothenburg", country: "Sweden" },
      { date: "2 Sep", venue: "Folk på Vänna", city: "Mossviken Vänna", country: "Sweden" },
      { date: "30 Sep", venue: "Aarhus Folk Festival", city: "Aarhus", country: "Denmark" },
    ],
  },
  {
    year: "2022",
    shows: [
      { date: "22 Apr", venue: "Nordic Folk Alliance", city: "Gothenburg", country: "Sweden" },
      { date: "27 May", venue: "Musikens Hus", city: "Katrineholm", country: "Sweden" },
      { date: "28 May", venue: "Private Wedding", city: "Örebro", country: "Sweden" },
      { date: "8 Jul", venue: "Strenger i Gress", city: "Vikersund", country: "Norway" },
      { date: "13 Aug", venue: "Krusenstiernska Gården", city: "Kalmar", country: "Sweden" },
      { date: "20 Aug", venue: "Grenna Bluegrass Festival", city: "Gränna", country: "Sweden" },
      { date: "31 Aug", venue: "Nordic Nights Rehab (with Buster Sledge)", city: "Malmö", country: "Sweden" },
      { date: "7 Oct", venue: "Norrköpings Folkmusikfestival", city: "Norrköping", country: "Sweden" },
    ],
  },
];

function getLocation(show: Show) {
  return show.city === "—" ? show.country : `${show.city}, ${show.country}`;
}

const pastShowColumns = pastShowsByYear.reduce<ShowYear[][]>(
  (columns, group, index) => {
    const position = index % 4;
    const columnIndex = position === 0 || position === 3 ? 0 : 1;

    columns[columnIndex].push(group);
    return columns;
  },
  [[], []],
);

function UpcomingShowRow({ show }: { show: Show }) {
  const location = getLocation(show);

  return (
    <li className="grid gap-1.5 border-t border-border/60 py-2.5 text-foreground/90 md:min-h-11 md:grid-cols-[8rem_minmax(0,1.7fr)_minmax(13rem,0.9fr)] md:items-center md:gap-6 md:py-2">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground md:text-[0.8rem]">
        {show.date}
      </span>
      <span className="font-serif text-base leading-snug text-[hsl(25_30%_25%)]/90 md:text-lg">
        {show.venue}
      </span>
      <span className="text-sm leading-5 text-muted-foreground/86">
        {location}
      </span>
    </li>
  );
}

function PastShowRow({ show, year }: { show: Show; year: string }) {
  const location = show.city === "—" ? show.country : `${show.city}, ${show.country}`;

  return (
    <li className="grid gap-1 border-t border-border/55 py-2 text-foreground/90 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-4">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground md:text-[0.8rem]">
        {show.date} {year}
      </span>
      <span className="min-w-0">
        <span className="block truncate font-serif text-[0.98rem] leading-snug text-[hsl(25_30%_25%)]/90 md:text-base">
          {show.venue}
        </span>
        <span className="block truncate text-xs leading-5 text-muted-foreground/82 md:text-[0.82rem]">
          {location}
        </span>
      </span>
    </li>
  );
}

function PastShowYearSection({ group, isFirst = false }: { group: ShowYear; isFirst?: boolean }) {
  return (
    <section
      aria-labelledby={`past-shows-${group.year}`}
      className={isFirst ? "" : "mt-10 md:mt-14"}
    >
      <div className="mb-3 border-t border-border/75 pt-4 md:mb-4 md:pt-5">
        <h3
          id={`past-shows-${group.year}`}
          className="text-[0.95rem] font-semibold uppercase tracking-[0.25em] text-foreground/70"
        >
          {group.year}
        </h3>
      </div>
      <ul>
        {group.shows.map((show) => (
          <PastShowRow
            key={`${group.year}-${show.date}-${show.venue}`}
            show={show}
            year={group.year}
          />
        ))}
      </ul>
    </section>
  );
}

export default function TourPage() {
  return (
    <>
      <PageBanner compact />

      <div className="container mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-12">
        <Reveal>
          <section
            aria-labelledby="upcoming-shows-heading"
            className="mx-auto"
          >
            <div className="mb-5 text-center">
              <h2
                id="upcoming-shows-heading"
                className="font-serif text-2xl font-normal uppercase leading-tight tracking-[0.16em] text-foreground md:text-3xl"
              >
                Upcoming Shows
              </h2>
            </div>

            <ul className="border-b border-border/60">
              {upcomingShows.map((show) => (
                <UpcomingShowRow key={`${show.date}-${show.venue}`} show={show} />
              ))}
            </ul>
          </section>
        </Reveal>

        <div className="my-10 flex justify-center md:my-12">
          <div className="h-px w-24 bg-border" />
        </div>

        <Reveal delay={100}>
          <section aria-labelledby="past-shows-heading">
            <div className="mb-8 text-center">
              <h2
                id="past-shows-heading"
                className="font-serif text-2xl font-normal uppercase leading-tight tracking-[0.16em] text-foreground md:text-3xl"
              >
                Past Shows
              </h2>
            </div>

            <div className="md:hidden">
              {pastShowsByYear.map((group, index) => (
                <PastShowYearSection key={group.year} group={group} isFirst={index === 0} />
              ))}
            </div>

            <div className="hidden md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-14">
              {pastShowColumns.map((column, columnIndex) => (
                <div key={columnIndex}>
                  {column.map((group, index) => (
                    <PastShowYearSection key={group.year} group={group} isFirst={index === 0} />
                  ))}
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
