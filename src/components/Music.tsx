import { Reveal } from "./Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music2 } from "lucide-react";

export function Music() {
  const releases = [
    {
      title: "Old Time Favorites",
      year: "2024",
      description: "A collection of traditional tunes reimagined with Nordic sensibility.",
    },
    {
      title: "Live at Folkmusikens Hus",
      year: "2023",
      description: "Capturing the energy and spontaneity of our live performances.",
    },
  ];

  return (
    <section className="section-offset">
      <Reveal>
        <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl">Music</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {releases.map((release, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <Music2 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">{release.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{release.year}</p>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {release.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Placeholder for embeds */}
        <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
          <p className="text-muted-foreground">
            Streaming embeds (Spotify, Bandcamp) coming soon
          </p>
        </div>
      </Reveal>
    </section>
  );
}
