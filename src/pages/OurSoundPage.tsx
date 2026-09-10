import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const albums = [
  {
    title: "Of Tales And Lies",
    year: "2026",
    image: "/images/coverart/of-tales-and-lies.png",
    description:
      "The band's second album, Of Tales And Lies, moves further into original compositions while continuing to explore the meeting point between American old-time music and Nordic folk traditions.",
    link: "https://open.spotify.com/album/1iFw1XVDNdjjtON1qFZGuv?si=HOf7IQCsS9-58BhuCOdmFA",
  },
  {
    title: "New Valley",
    year: "2023",
    image: "/images/coverart/new-valley.jpeg",
    description:
      "The debut album New Valley is rooted in American old-time music, with fiddle tunes, songs, and arrangements shaped by a Nordic folk music touch.",
    link: "https://open.spotify.com/album/7FPVClq36sCukyc8nw62Or?si=UMPpeFtDQ3i9I4gG-FBScQ",
  },
];

export default function OurSoundPage() {
  return (
    <>
      <PageBanner />

      <section className="bg-[hsl(34_24%_86%)]">
        <div className="container mx-auto px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <Reveal>
            <div className="mx-auto max-w-6xl text-left">
              <h1 className="font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.12em] text-[hsl(25_30%_25%)]/90 md:text-6xl">
                Our Sound
              </h1>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-10 max-w-6xl space-y-7 text-[1.05rem] leading-8 text-[hsl(25_26%_28%)] md:columns-2 md:gap-10 md:space-y-0 md:leading-9 [&_p]:break-inside-avoid [&_p]:mb-6">
              <p>
                New Valley String Band plays what they often think of as Nordic Old Time: acoustic music where the pulse of American old-time meets the openness, restraint, and atmosphere of Nordic folk traditions. It is not a clean fusion of two styles so much as a lived meeting point, shaped by years of playing tunes, singing together, touring, arranging, and listening for the spaces where the traditions begin to speak to each other.
              </p>

              <p>
                The sound is carried by fiddle, banjo, guitar, and close vocal harmonies. The fiddle often holds the melodic thread, the banjo gives lift and motion, and the guitar places the rhythm in a wider landscape. Around that, the voices bring a more human grain: sometimes direct and songlike, sometimes hovering inside the arrangement as another instrument.
              </p>

              <p>
                Groove and pulse are central. A tune might begin with the raw lift of a bow stroke or a banjo figure, then widen through guitar rhythm, harmony singing, and small shifts in dynamics. The music can be driving and physical, but it rarely depends on force. Much of the intensity comes from restraint: holding something back, leaving air in the phrase, letting a rhythm gather weight over time.
              </p>

              <p>
                Rather than focusing on solos, the trio treats the ensemble as the lead voice. Melodies, rhythms, and harmonies move through shared listening, with each instrument leaning into the others. The arrangements are built from collective movement: small responses, changes in pressure, voices entering and disappearing, and the feeling that the story belongs to the whole band.
              </p>

              <p>
                That storytelling is part of what gives the music its atmosphere. Traditional material, original tunes, and songs from everyday life are handled with the same attention to shape and mood. The band is drawn to arrangements that feel cinematic without becoming polished smooth: music with grain, silence, tension, and a sense of place.
              </p>

              <p>
                Their recordings follow the same instinct as their live playing. Instead of separating energy from intimacy, they try to keep both present in the room. The albums are documents of interplay as much as composition: fiddle, banjo, guitar, and voices moving as one shared body, carrying old-time music into a Nordic present tense.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <section className="mx-auto mt-20 max-w-5xl md:mt-24">
              <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
                {albums.map((album) => (
                  <article key={album.title} className="flex flex-col">
                    <img
                      src={album.image}
                      alt={`${album.title} album cover`}
                      className="aspect-square w-full rounded-sm object-cover"
                      loading="lazy"
                    />

                    <div className="mt-7">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[hsl(25_30%_25%)]/56">
                        {album.year}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl leading-tight text-[hsl(25_30%_25%)]/92">
                        {album.title}
                      </h3>
                      <p className="mt-5 text-[1rem] leading-8 text-[hsl(25_26%_28%)]">
                        {album.description}
                      </p>
                      <a
                        href={album.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative mt-7 inline-flex text-[0.78rem] font-medium uppercase tracking-[0.12em] text-[hsl(25_30%_25%)]/58 transition-colors duration-300 hover:text-[hsl(25_30%_25%)]/88"
                      >
                        Listen on Spotify &rarr;
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={220}>
            <div className="mx-auto mt-16 max-w-5xl md:mt-20">
              <Button asChild variant="cta" size="cta">
                <Link to="/about">&larr; Back</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
