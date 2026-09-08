import { PageBanner } from "@/components/PageBanner";

const pressQuotes = [
  {
    quote:
      "Stretching the boundaries of Old Time and Bluegrass by blending it with Nordic folk.",
    publication: "Americana UK",
    href: "https://americana-uk.com/bluegrass-briefs-unspoken-tradition-square-peg-big-richard-new-valley-string-band",
  },
  {
    quote: "An album that unites Scandinavian roots with Appalachian spirit.",
    publication: "Musik An Sich",
    href: "https://www.musikansich.de/review.php?id=26046",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner compact mobileSolidBrown />

      <section className="bg-background text-primary">
        <div className="container mx-auto px-6 pb-20 pt-12 md:px-10 md:pb-24 md:pt-16 lg:px-10 lg:pb-28 lg:pt-12 xl:px-16">
          <div className="mx-auto max-w-[1500px]">
            <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-center md:gap-12 lg:gap-10 xl:gap-12">
              <div className="min-w-0 text-left md:flex-1 lg:flex-[1_1_680px]">
                <div className="space-y-5 text-left text-[1.05rem] leading-8 text-primary/82 md:leading-8 lg:max-w-[680px]">
                  <p>
                    <strong>New Valley String Band</strong> is a Swedish trio
                    bringing together the traditions of American old time music
                    and Nordic folk. With fiddle, clawhammer banjo, guitar and
                    vocals, the band moves between Appalachian and Scandinavian
                    sounds, creating their own take on the tradition &mdash;{" "}
                    <strong>Nordic Old-Time</strong>.
                  </p>

                  <p>
                    Since releasing their self-titled debut album,{" "}
                    <strong>New Valley</strong>, in 2023, New Valley String Band
                    have brought their music to audiences across the Nordics and
                    Europe. Their second album,{" "}
                    <strong>Of Tales And Lies</strong>, released on February 14
                    2026, marks a new chapter for the trio, with a growing focus
                    on original songs and tunes alongside traditional material.
                  </p>

                  <p>
                    At the heart of the band is a shared love for storytelling,
                    melody and the raw acoustic sound of string band music.
                    Rather than simply recreating old time music, New Valley
                    String Band lets the tradition meet their Scandinavian roots
                    and become something of their own.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:w-[300px] md:flex-none md:justify-end lg:w-[525px] xl:w-[600px]">
                <img
                  src="/images/media/our-story.jpg"
                  alt="New Valley String Band"
                  className="aspect-[4/3] w-full max-w-[600px] object-cover object-[center_30%] contrast-[0.92] saturate-[0.82] sepia-[0.16]"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-8 border-t border-primary/18 pt-8 text-left md:mt-14 md:grid-cols-2 md:gap-12 md:pt-9 lg:gap-16">
              {pressQuotes.map((item) => (
                <a
                  key={item.publication}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block cursor-pointer text-primary outline-none transition duration-200 hover:-translate-y-0.5 hover:opacity-80 focus-visible:-translate-y-0.5 focus-visible:ring-1 focus-visible:ring-primary/35 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <blockquote className="text-[1.05rem] leading-8 text-primary/82 md:leading-9">
                    <span className="inline italic">
                      &ldquo;{item.quote}&rdquo;
                    </span>{" "}
                    <span className="inline whitespace-nowrap not-italic text-[0.74rem] font-medium uppercase tracking-[0.16em] text-primary/58 transition-colors duration-200 group-hover:text-primary/78 group-focus-visible:text-primary/78">
                      &mdash; {item.publication} &#8599;
                    </span>
                  </blockquote>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
