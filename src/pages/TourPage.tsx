import { Reveal } from "@/components/Reveal";
import { Concerts } from "@/components/Concerts";
import { PageBanner } from "@/components/PageBanner";

interface PastShow {
  name: string;
  country: string;
}

const pastShowsByYear: { year: string; shows: PastShow[] }[] = [
  {
    year: "2025",
    shows: [
      { name: "Placeholder Festival", country: "Country" },
      { name: "Placeholder Venue", country: "Country" },
      { name: "Placeholder Event", country: "Country" },
    ],
  },
  {
    year: "2024",
    shows: [
      { name: "Placeholder Festival", country: "Country" },
      { name: "Placeholder Venue", country: "Country" },
    ],
  },
];

export default function TourPage() {
  return (
    <>
      <PageBanner />

      <div className="container mx-auto px-6 py-16 md:py-20">
        <Reveal>
          <div className="mb-14 text-center">
            <h1 className="mb-6 text-4xl font-light uppercase tracking-[0.22em] text-foreground md:text-5xl">
              Tour
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Join us for an evening of traditional string music. Check out our upcoming performances across the Nordics.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <Concerts />
        </Reveal>

        {/* Divider */}
        <div className="my-24 flex justify-center">
          <div className="h-px w-24 bg-border" />
        </div>

        {/* Past Shows */}
        <Reveal delay={100}>
          <section aria-labelledby="past-shows-heading">
            <div className="mb-12 text-center">
              <h2
                id="past-shows-heading"
                className="mb-3 text-3xl font-bold tracking-tight md:text-4xl"
              >
                Past Shows
              </h2>
              <p className="text-base text-muted-foreground">
                Selected performances and festival appearances.
              </p>
            </div>

            <div className="mx-auto max-w-2xl">
              {pastShowsByYear.map((group, idx) => (
                <div
                  key={group.year}
                  className={idx > 0 ? "mt-14" : ""}
                >
                  <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {group.year}
                  </h3>
                  <ul className="divide-y divide-border/60">
                    {group.shows.map((show, i) => (
                      <li
                        key={i}
                        className="flex items-baseline justify-between gap-4 py-3 text-foreground/90"
                      >
                        <span className="text-base md:text-lg">{show.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {show.country}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
