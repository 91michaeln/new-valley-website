import { MailingList } from "@/components/MailingList";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen">
        <img
          src="/images/media/our-story.jpg"
          alt="New Valley String Band performing live (photo: Lucie Bascoul)"
          className="absolute inset-0 h-full w-full object-cover object-[50%_50%] md:hidden"
          decoding="async"
          loading="eager"
        />

        <img
          src="/images/media/Luciebascoul_New Valley 3.jpg"
          alt="New Valley String Band performing live (photo: Lucie Bascoul)"
          className="absolute inset-0 hidden h-full w-full object-cover object-[40%_50%] md:block"
          decoding="async"
          loading="eager"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />
      </section>

      <div className="h-px w-full bg-black/20" />

      <MailingList />
    </>
  );
}
