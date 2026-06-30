export function PageBanner() {
  return (
    <section className="relative h-[24vh] min-h-[260px] overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src="/images/banner-new-valley.jpg"
          alt="New Valley String Band portrait by Lucie Bascoul"
          className="h-full w-full object-cover object-[60%_18%] opacity-60"
          loading="eager"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/72" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-primary/60 to-black/50" />
      </div>
    </section>
  );
}
