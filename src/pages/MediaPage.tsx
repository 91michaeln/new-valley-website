import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";

interface FeaturedVideo {
  title: string;
  embedUrl: string;
}

const featuredVideos: FeaturedVideo[] = [
  {
    title: "Live @ Grenna Bluegrass Festival",
    embedUrl: "https://www.youtube.com/embed/a59MuyVXomw",
  },
  {
    title: "Drunken Hiccups",
    embedUrl: "https://www.youtube.com/embed/vOtPENiY5YM",
  },
  {
    title: "Flight of the Pelican",
    embedUrl: "https://www.youtube.com/embed/svbC1Gs7iDQ",
  },
];

interface GalleryItem {
  src: string;
  alt: string;
  objectPosition?: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/media/Luciebascoul_ New Valley 2.jpg",
    alt: "New Valley String Band performing outdoors with guitar, fiddle, and banjo (photo: Lucie Bascoul)",
    objectPosition: "object-[center_44%]",
  },
  {
    src: "/images/media/Luciebascoul_New Valley 1.jpg",
    alt: "New Valley String Band portrait with guitar, fiddle, and banjo (photo: Lucie Bascoul)",
    objectPosition: "object-[center_35%]",
  },
  {
    src: "/images/media/Luciebascoul_New Valley 3.jpg",
    alt: "New Valley String Band standing with instruments in warm evening light (photo: Lucie Bascoul)",
    objectPosition: "object-[center_42%]",
  },
  {
    src: "/images/media/Luciebascoul_New Valley 6.jpg",
    alt: "New Valley String Band playing under trees in golden light (photo: Lucie Bascoul)",
    objectPosition: "object-[center_44%]",
  },
  {
    src: "/images/media/Luciebascoul_herbebleue_-10.jpg",
    alt: "New Valley String Band press photo by Lucie Bascoul",
    objectPosition: "object-[center_42%]",
  },
  {
    src: "/images/media/Luciebascoul_herbebleue_-14.jpg",
    alt: "New Valley String Band press photo by Lucie Bascoul",
    objectPosition: "object-[center_42%]",
  },
  {
    src: "/images/media/Luciebascoul_herbebleue_-13.jpg",
    alt: "New Valley String Band press photo by Lucie Bascoul",
    objectPosition: "object-[center_42%]",
  },
];

const featuredGalleryItem = galleryItems[0];
const stackedGalleryItems = galleryItems.slice(1, 3);
const additionalGalleryItems = galleryItems.slice(3);
const EPK_URL =
  "https://drive.google.com/drive/folders/1bja-sdkyBMaA5YFapY9OTnWrH4p4FrKr?usp=sharing";

function PressPhoto({
  image,
  className = "",
}: {
  image: GalleryItem;
  className?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden bg-muted ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] ${image.objectPosition ?? "object-center"}`}
        loading="lazy"
      />
      <a
        href={image.src}
        download
        aria-label={`Download ${image.alt}`}
        className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center border border-white/40 bg-black/35 text-white/90 backdrop-blur-sm transition-colors hover:border-white/80 hover:bg-white/90 hover:text-foreground"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
      </a>
    </figure>
  );
}

export default function MediaPage() {
  const [showMorePhotos, setShowMorePhotos] = useState(false);

  return (
    <>
      <div className="container mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-12">
        <section>
          <Reveal>
            <div className="mb-7 text-center md:mb-8">
              <h1 className="font-serif text-4xl font-normal uppercase leading-tight tracking-[0.16em] text-foreground md:text-5xl">
                Press Photos
              </h1>
              <p className="mt-3 text-sm tracking-[0.08em] text-muted-foreground/72">
                Downloadable press photos &amp; EPK &middot; Photos &copy; Lucie Bascoul
              </p>
              <Button asChild variant="cta" size="cta" className="mt-5">
                <a
                  href={EPK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View EPK &rarr;
                </a>
              </Button>
            </div>
          </Reveal>

          <div className="mx-auto grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-7 lg:row-span-2" delay={0}>
              <PressPhoto
                image={featuredGalleryItem}
                className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[620px]"
              />
            </Reveal>

            <div className="grid grid-cols-1 gap-5 lg:col-span-5 lg:grid-rows-2 lg:gap-6">
              {stackedGalleryItems.map((image, index) => (
                <Reveal key={image.src} className="lg:h-full" delay={(index + 1) * 60}>
                  <PressPhoto image={image} className="aspect-[4/3] lg:aspect-auto lg:h-full" />
                </Reveal>
              ))}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-700 ease-out ${
              showMorePhotos ? "max-h-[2400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mx-auto mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {additionalGalleryItems.map((image, index) => (
                <Reveal key={image.src} delay={index * 60}>
                  <PressPhoto image={image} className="aspect-[4/3]" />
                </Reveal>
              ))}
            </div>
          </div>

          {additionalGalleryItems.length > 0 && (
            <div className="mt-9 text-center md:mt-10">
              <Button
                variant="cta"
                size="cta"
                type="button"
                onClick={() => setShowMorePhotos((current) => !current)}
                aria-expanded={showMorePhotos}
              >
                {showMorePhotos ? "VIEW LESS PHOTOS ↑" : "VIEW MORE PHOTOS ↓"}
              </Button>
            </div>
          )}
        </section>

        <div className="my-10 h-px bg-border md:my-12" aria-hidden="true" />

        <section className="lg:-mx-6 xl:-mx-10">
          <div className="mb-7 text-center">
            <h2 className="font-serif text-4xl font-normal uppercase leading-tight tracking-[0.16em] text-foreground md:text-5xl">
              Videos
            </h2>
          </div>

          <div className="mx-auto grid gap-9 md:grid-cols-3 md:gap-7 lg:gap-8">
            {featuredVideos.map((video, index) => (
              <Reveal key={video.embedUrl} delay={index * 70}>
                <article>
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={video.embedUrl}
                      title={`New Valley String Band - ${video.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-lg leading-tight text-[hsl(25_30%_25%)]/90 md:text-xl">
                    {video.title}
                  </h3>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
