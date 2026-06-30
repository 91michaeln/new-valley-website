import { News } from "@/components/News";
import { MailingList } from "@/components/MailingList";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen">
        <img
          src="/images/media/Luciebascoul_New Valley 3.jpg"
          alt="New Valley String Band performing live (photo: Lucie Bascoul)"
          className="absolute inset-0 h-full w-full object-cover object-[50%_50%] md:object-[40%_50%]"
          decoding="async"
          loading="eager"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />
      </section>

      <div className="pointer-events-none relative z-20 h-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/35" />
      </div>

      <News />

      <MailingList />
    </>
  );
}
