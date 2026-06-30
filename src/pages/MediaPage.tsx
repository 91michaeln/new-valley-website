import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";
import { Download } from "lucide-react";

interface FeaturedVideo {
  title: string;
  embedUrl: string;
  description: string;
}

const featuredVideos: FeaturedVideo[] = [
  {
    title: "Festival Reel",
    embedUrl: "https://www.youtube.com/embed/a59MuyVXomw",
    description: "Live at Grenna Bluegrass Festival.",
  },
  {
    title: "Drunken Hiccups",
    embedUrl: "https://www.youtube.com/embed/vOtPENiY5YM",
    description: "Original Nordic old-time music.",
  },
  {
    title: "Flight of the Pelican",
    embedUrl: "https://www.youtube.com/embed/svbC1Gs7iDQ",
    description: "Interplay, groove, and acoustic musicianship.",
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

const firstRow = galleryItems.slice(0, 4);
const secondRow = galleryItems.slice(4);

export default function MediaPage() {
  return (
    <>
      <PageBanner />

      <div className="container mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-12">
        <section>
          <Reveal>
            <div className="mb-7 text-center md:mb-8">
              <h1 className="font-serif text-4xl font-normal uppercase leading-tight tracking-[0.16em] text-foreground md:text-5xl">
                Press Photos
              </h1>
              <p className="mt-3 text-sm tracking-[0.08em] text-muted-foreground/72">
                Photos &copy; Lucie Bascoul
              </p>
            </div>
          </Reveal>

          <div className="mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {firstRow.map((image, index) => (
              <Reveal key={image.src} delay={index * 60}>
                <figure className="group relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`h-full w-full object-cover ${image.objectPosition ?? "object-center"}`}
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
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {secondRow.map((image, index) => (
              <Reveal key={image.src} delay={(index + firstRow.length) * 60}>
                <figure className="group relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`h-full w-full object-cover ${image.objectPosition ?? "object-center"}`}
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
              </Reveal>
            ))}
          </div>
        </section>

        <section className="pt-16 md:pt-20">
          <div className="mb-7 text-center">
            <h2 className="font-serif text-4xl font-normal uppercase leading-tight tracking-[0.16em] text-foreground md:text-5xl">
              Videos
            </h2>
          </div>

          <div className="mx-auto grid gap-9 md:grid-cols-3 md:gap-6">
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
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground/86">
                    {video.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
