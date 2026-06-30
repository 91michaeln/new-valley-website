import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";
import { Link } from "react-router-dom";

const aboutSections = [
  {
    title: "Our Story",
    image: "/images/media/our-story.jpg",
    alt: "New Valley String Band in an editorial portrait",
    imagePosition: "object-[center_30%]",
    text: "From study-room jam sessions to years of touring and arranging together, New Valley String Band has grown through shared listening, travel, and the slow discovery of a common musical language.",
    link: "/our-story",
  },
  {
    title: "Our Sound",
    image: "/images/media/our-sound.jpg?v=20260512-2",
    alt: "New Valley String Band instruments and atmosphere",
    imagePosition: "object-[center_42%]",
    text: "Nordic old-time shaped by fiddle, banjo, guitar, close harmony, and arrangements that leave room for pulse, tension, atmosphere, and the quiet electricity between three musicians.",
    link: "/our-sound",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner />

      <section className="min-h-[calc(100vh-var(--nav-h))] bg-background text-primary">
        <div className="container mx-auto px-6 pb-28 pt-12 md:px-10 md:pb-40 md:pt-16 lg:px-16 lg:pb-48 lg:pt-20">
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-14 lg:gap-20">
            {aboutSections.map((section, index) => (
              <Reveal key={section.title} delay={index * 120}>
                <article className="group">
                  <div className="relative overflow-hidden bg-[#734636]">
                    <img
                      src={section.image}
                      alt={section.alt}
                      className={`aspect-[16/9] w-full object-cover ${section.imagePosition} contrast-[0.92] saturate-[0.82] sepia-[0.16]`}
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(27,18,14,0.22)_100%)]" />
                  </div>

                  <div className="mt-9 max-w-[32rem] border-t border-primary/18 pt-8 text-left md:mt-11 md:pt-9">
                    <h2 className="font-serif text-3xl font-normal uppercase leading-tight tracking-[0.16em] text-primary md:text-[2.65rem]">
                      {section.title}
                    </h2>
                    <p className="mt-6 text-[1.02rem] font-light leading-8 text-primary/74">
                      {section.text}
                    </p>
                    <Link
                      to={section.link}
                      className="relative mt-9 inline-flex text-[0.78rem] font-medium uppercase tracking-[0.18em] text-primary/68 transition-colors duration-300 hover:text-primary"
                    >
                      <span className="relative">
                        Read more &rarr;
                        <span className="absolute inset-x-0 -bottom-2 h-px origin-left scale-x-0 bg-primary/62 transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
