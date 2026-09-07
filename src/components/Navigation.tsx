import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Youtube, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isOverlayNav =
    isHome ||
    pathname === "/about" ||
    pathname === "/tour" ||
    pathname === "/media" ||
    pathname === "/contact" ||
    pathname === "/our-story" ||
    pathname === "/our-sound";
  // Adjust this value to fine-tune desktop nav vertical alignment with the logo.
  // Example: "1.4rem" higher, "1.7rem" lower.
  const desktopNavYOffset = "1.40rem";

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/tour", label: "Tour" },
    { to: "/media", label: "Media" },
    { to: "/contact", label: "Contact" },
  ];

  const isLinkActive = (to: string) => {
    if (to === "/") return pathname === "/";
    if (to === "/about") {
      return pathname === "/about" || pathname === "/our-story" || pathname === "/our-sound";
    }
    return pathname === to;
  };

  return (
    <header className="w-full overflow-visible">
      <nav className="w-full relative">
        <div
          className={cn(
            "relative flex items-center h-[var(--nav-h)] px-4 md:px-6 overflow-visible",
            "mx-auto max-w-6xl",
            isOverlayNav && "absolute top-0 left-0 right-0 z-50 bg-transparent"
          )}
        >
        {/* Content wrapper above the lines */}
        <div className="relative z-20 flex items-center w-full">
        {/* Brand Logo */}
        <Link to="/" aria-label="New Valley String Band" className="relative shrink-0">
          <div className={cn(
            "absolute inset-0",
            "-bottom-4",
            isOverlayNav ? "bg-transparent" : "bg-background"
          )} />
          <img
            src={isOverlayNav ? "/images/logo-white.png" : "/images/logo-black.png"}
            alt="New Valley String Band"
            className={cn(
              "h-12 md:h-[4.5rem] lg:h-[5.5rem] w-auto block relative",
              "translate-y-[22.5px] md:translate-y-[27.5px] lg:translate-y-[31.5px]"
            )}
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation + Social Icons – aligned right */}
        <div
          className="relative ml-auto hidden items-center gap-6 pb-3 md:flex"
          style={{ transform: `translateY(${desktopNavYOffset})` }}
        >
          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-5 md:flex md:gap-7">
            {navLinks.map((link) => {
              const active = isLinkActive(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "group relative inline-flex pb-1 text-xs font-medium uppercase tracking-wide transition-colors duration-300 md:text-[0.95rem]",
                    isOverlayNav
                      ? "text-white/95 hover:text-white"
                      : active
                        ? "text-accent"
                        : "text-foreground hover:text-foreground/80"
                  )}
                  style={isOverlayNav ? { textShadow: "0 1px 2px rgba(0,0,0,0.6)" } : undefined}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-75 opacity-0 transition-all duration-300",
                      active && "scale-x-100 opacity-100",
                      isOverlayNav ? "bg-white/70" : "bg-primary/45"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-4">
          <a
            href="https://www.youtube.com/@newvalleystringband9941"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={cn(
              "transition-colors hidden md:inline-block",
              isOverlayNav ? "text-white hover:text-white/80" : "text-foreground hover:text-foreground/80"
            )}
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/new_valley_string_band/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={cn(
              "transition-colors hidden md:inline-block",
              isOverlayNav ? "text-white hover:text-white/80" : "text-foreground hover:text-foreground/80"
            )}
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/newvalleystringband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={cn(
              "transition-colors hidden md:inline-block",
              isOverlayNav ? "text-white hover:text-white/80" : "text-foreground hover:text-foreground/80"
            )}
          >
            <Facebook className="h-5 w-5" />
          </a>
          </div>

        </div>

        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "ml-auto h-8 w-8 p-0 md:hidden",
            isOverlayNav && "text-white/90 hover:text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className={cn(
            "absolute left-0 right-0 top-full border-t lg:hidden",
            "bg-background shadow-lg"
          )}
        >
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-accent",
                  pathname === link.to
                    ? "text-accent"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-3 border-t pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.youtube.com/@newvalleystringband9941"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.instagram.com/new_valley_string_band/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.facebook.com/newvalleystringband"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
