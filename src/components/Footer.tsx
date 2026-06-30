import { Youtube, Instagram, Facebook } from "lucide-react";

interface FooterProps {
  variant?: "default" | "cinematic";
}

export function Footer({ variant = "default" }: FooterProps) {
  if (variant === "cinematic") {
    return (
      <footer className="bg-background text-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-center border-t border-primary/14 px-6 py-16 text-center md:py-20">
          <img
            src="/images/logo-black.png"
            alt="New Valley String Band"
            className="h-auto w-36 opacity-90 md:w-44"
            loading="lazy"
          />

          <div className="mt-7 flex items-center justify-center gap-6">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/58 transition-colors duration-300 hover:text-primary/90"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/58 transition-colors duration-300 hover:text-primary/90"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/58 transition-colors duration-300 hover:text-primary/90"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src="/images/footer/footer-new-valley.jpg?v=20260510-2"
          alt="Dark leafy background"
          className="h-full w-full object-cover object-[1%_center] opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-primary/60 to-black/50" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-12 text-center md:py-14">
        <img
          src="/images/logo-white.png"
          alt="New Valley String Band"
          className="h-auto w-36 opacity-90 md:w-44"
          loading="lazy"
        />

        <div className="mt-7 flex items-center justify-center gap-6">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/62 transition-colors duration-300 hover:text-primary-foreground/90"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/62 transition-colors duration-300 hover:text-primary-foreground/90"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/62 transition-colors duration-300 hover:text-primary-foreground/90"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
