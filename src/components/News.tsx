import { Reveal } from "./Reveal";

const newsItems = [
  {
    category: "Release",
    title: "Of Tales And Lies",
    text: "Reflections on releasing our second album and the stories behind it.",
    link: "https://substack.com/home/post/p-197182006",
  },
  {
    category: "Review",
    title: "Americana UK",
    text: "New Valley String Band featured in Bluegrass Briefs alongside some of today’s leading roots acts.",
    link: "https://americana-uk.com/bluegrass-briefs-unspoken-tradition-square-peg-big-richard-new-valley-string-band",
  },
  {
    category: "Review",
    title: "Lira",
    text: "Lira Music Magazine reflects on the meeting point between Nordic folk and Appalachian tradition.",
    link: "https://www.lira.se/skivrecension/of-tales-and-lies/",
  },
  {
    category: "Interview",
    title: "Orange Flag Music",
    text: "A conversation about arranging, tradition and building a Scandinavian old-time sound.",
    link: "https://orangeflagmusic.com/",
  },
  {
    category: "Review",
    title: "RockTimes",
    text: "A German review highlighting the band's mix of old-time, bluegrass and Nordic folk.",
    link: "https://www.rocktimes.info/new-valley-string-band-of-tales-and-lies-digital-review/",
  },
];

export function News() {
  return (
    <section className="relative overflow-hidden border-b border-black/20 bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src="/images/footer/footer-new-valley.jpg?v=20260510-2"
          alt=""
          className="h-full w-full object-cover object-[18%_center] opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/80 to-black/72" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,244,224,0.12)_0%,rgba(0,0,0,0)_48%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      <Reveal>
        <div className="relative z-10 container mx-auto px-6 pt-12 pb-20 md:px-10 md:pb-28 lg:px-16 lg:pb-32">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-4xl leading-tight text-primary-foreground/95 md:text-5xl">
                News
              </h2>
              <p className="mt-5 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-primary-foreground/55">
                Selected Updates
              </p>
            </div>

            <div className="mt-14 grid gap-x-10 gap-y-14 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
              {newsItems.map((item) => (
                <a
                  key={`${item.category}-${item.title}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-primary-foreground/22 pt-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary-foreground/48"
                >
                  <p className="mb-5 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-primary-foreground/48 transition-colors duration-300 group-hover:text-primary-foreground/75">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-2xl leading-9 text-primary-foreground/96 transition-colors duration-300 group-hover:text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-8 text-primary-foreground/62">
                    {item.text}
                  </p>
                  <span className="relative mt-8 inline-flex text-sm font-medium text-primary-foreground/72 transition-colors duration-500 group-hover:text-primary-foreground">
                    <span className="relative">
                      Read more &rarr;
                      <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-primary-foreground/70 transition-transform duration-500 group-hover:scale-x-100" />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
