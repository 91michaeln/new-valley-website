import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";
import { Link } from "react-router-dom";

export default function OurStoryPage() {
  return (
    <>
      <PageBanner />

      <section className="bg-[hsl(34_24%_86%)]">
        <div className="container mx-auto px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <Reveal>
            <div className="mx-auto max-w-6xl">
              <h1 className="font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.12em] text-[hsl(25_30%_25%)]/90 md:text-6xl">
                Our Story
              </h1>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-10 max-w-4xl">
              <div className="space-y-6 text-[1.05rem] leading-8 text-[hsl(25_26%_28%)] md:leading-9">
                <p>
                  New Valley String Band grew out of a shared fascination with North American folk music and traditional acoustic music. What began as jam sessions during their studies and playing tunes together gradually developed into a band shaped by years of touring, arranging, and listening closely to one another.
                </p>

                <p>
                  Their debut album New Valley (2023) captured the trio's early years, rooted in traditional material, dance tunes, and the energy of discovering a shared sound together.
                </p>

                <p>
                  With their second album, Of Tales And Lies (2026), the band moved further into original compositions and a more personal musical landscape shaped by storytelling, atmosphere, and everyday life.
                </p>

                <p>
                  Over time, the trio has developed a sound built as much around interplay and dynamics as rhythm and drive, continuing to explore how old-time music can feel living, personal, and connected to the present.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mx-auto mt-16 max-w-5xl md:mt-20">
              <Link
                to="/about"
                className="inline-flex border border-[hsl(25_30%_25%)]/32 bg-transparent px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-[hsl(25_30%_25%)]/66 transition-colors duration-300 hover:border-[hsl(25_30%_25%)]/52 hover:bg-white hover:text-[hsl(25_30%_25%)]/88"
              >
                &larr; Back
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
