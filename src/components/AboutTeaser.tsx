import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
  return (
    <section className="section-offset container mx-auto px-6 py-24 bg-background">
      <Reveal>
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/about-main.jpg"
              alt="Portrait of New Valley String Band — three-piece string ensemble (photo: Lucie Bascoul)"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-start border-l-2 border-accent pl-8">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              About the Band
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              New Valley String Band brings together three musicians with a deep passion for traditional Nordic and American old-time music.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              With guitar, fiddle, and banjo, they create a powerful, energetic sound that honors the past while breathing new life into timeless melodies.
            </p>
            <Button asChild variant="default" size="lg" className="w-fit">
              <Link to="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
