import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function LatestRelease() {
  return (
    <section className="border-b border-border/55 bg-background">
      <Reveal>
        <div className="container mx-auto px-6 py-24 md:py-32 lg:py-36">
          <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[0.82fr_1fr] md:gap-12">
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-[0_24px_60px_rgba(48,38,28,0.16)]">
              <img
                src="/images/coverart/of-tales-and-lies.png"
                alt="New Valley String Band - Of Tales And Lies album cover"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-5 md:max-w-xl">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  LATEST RELEASE
                </p>
                <h2 className="font-serif text-4xl font-normal tracking-normal md:text-5xl">
                  Of Tales And Lies
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  Released February 14, 2026
                </p>
              </div>

              <p className="max-w-prose text-base leading-7 text-foreground/75">
                A collection of original songs and traditional tunes blending Nordic folk traditions with American old-time music.
              </p>

              <blockquote className="border-l border-accent/60 pl-5 font-serif text-xl leading-8 text-foreground/80">
                “Rooted in tradition, shaped by stories, and driven by the energy of Nordic Old Time.”
              </blockquote>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild variant="cta" size="cta">
                  <a 
                    href="https://open.spotify.com/album/1iFw1XVDNdjjtON1qFZGuv?si=Vcn6LUoCRL-nlQInG5EHpg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Listen on Spotify
                  </a>
                </Button>
                <Button asChild variant="cta" size="cta">
                  <a 
                    href="https://youtube.com/playlist?list=OLAK5uy_k3aK8cedYwq2Wrfz1LJr79r6KYsBWuAsg&si=PFJAIqSt3lDUXxmw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
