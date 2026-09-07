interface PageBannerProps {
  compact?: boolean;
}

export function PageBanner({ compact = false }: PageBannerProps) {
  return (
    <section
      className={`relative h-[24vh] min-h-[260px] overflow-hidden bg-black ${
        compact ? "md:h-[16vh] md:min-h-[176px]" : ""
      }`}
    >
      <div className="absolute inset-0">
        <img
          src={
            compact
              ? "/images/media/Luciebascoul_New Valley 3.jpg"
              : "/images/banner-new-valley.jpg"
          }
          alt="New Valley String Band portrait by Lucie Bascoul"
          className={
            compact
              ? "absolute left-0 top-0 h-screen min-h-screen w-full object-cover object-[50%_50%] md:object-[40%_50%]"
              : "h-full w-full object-cover object-[60%_18%]"
          }
          loading="eager"
          decoding="async"
        />
      </div>
      <div
        className={
          compact
            ? "pointer-events-none absolute left-0 top-0 h-screen min-h-screen w-full bg-gradient-to-t from-black/45 via-black/10 to-black/20"
            : "pointer-events-none absolute inset-0 bg-black/25"
        }
      />
    </section>
  );
}
