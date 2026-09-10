import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Youtube, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isOverlayNav = pathname === "/";
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
    <header
      className={cn(
        "relative z-50 w-full overflow-visible",
        !isOverlayNav && "bg-background"
      )}
    >
      <nav className="relative w-full">
        <div
          className={cn(
            "relative flex overflow-visible px-4 md:px-6",
            isOverlayNav
              ? "absolute left-0 right-0 top-0 z-50 mx-auto h-[var(--nav-h)] w-full max-w-[1720px] items-center bg-transparent md:px-10 lg:px-16 xl:px-20 2xl:px-24"
              : "mx-auto h-20 w-full max-w-[1720px] items-start bg-background md:h-24 md:px-10 lg:px-16 xl:px-20 2xl:px-24"
          )}
        >
        {/* Content wrapper above the lines */}
        <div className="relative z-20 flex h-[var(--nav-h)] w-full items-center">
        {/* Brand Logo */}
        <Link to="/" aria-label="New Valley String Band" className="relative shrink-0">
          <div className={cn(
            "absolute inset-0",
            "-bottom-4",
            isOverlayNav ? "bg-transparent" : "bg-background"
          )} />
          <span
            aria-hidden="true"
            className={cn(
              "relative block aspect-[824/303] h-12 translate-y-[22.5px] md:h-[4.5rem] md:translate-y-[27.5px] lg:h-[5.5rem] lg:translate-y-[31.5px]",
              isOverlayNav ? "bg-white" : "bg-primary"
            )}
            style={{
              WebkitMask: "url('/images/logo-white.png') center / contain no-repeat",
              mask: "url('/images/logo-white.png') center / contain no-repeat",
            }}
          />
          <span className="sr-only">New Valley String Band</span>
        </Link>

        {/* Desktop Navigation + Social Icons – aligned right */}
        <div
          className={cn(
            "relative ml-auto hidden w-[75%] max-w-[1280px] flex-col items-stretch justify-center pb-3 md:flex"
          )}
          style={{ transform: `translateY(${desktopNavYOffset})` }}
        >
          {/* Desktop Navigation Links */}
          <div className="flex items-center justify-end gap-6">
            <div className="flex items-center gap-5 md:gap-7">
              {navLinks.map((link) => {
                const active = isLinkActive(link.to);

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      "inline-flex pb-1 text-xs uppercase tracking-wide transition-colors duration-300 md:text-[0.95rem]",
                      active ? "font-semibold" : "font-medium",
                      isOverlayNav
                        ? active
                          ? "text-white"
                          : "text-white/95 hover:text-white"
                        : active
                          ? "text-primary"
                          : "text-primary/76 hover:text-primary"
                    )}
                    style={isOverlayNav ? { textShadow: "0 1px 2px rgba(0,0,0,0.6)" } : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="ml-4 flex items-center gap-4">
            <a
              href="https://www.youtube.com/@newvalleystringband9941"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={cn(
                "hidden transition-colors md:inline-block",
                isOverlayNav ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80"
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
                "hidden transition-colors md:inline-block",
                isOverlayNav ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80"
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
                "hidden transition-colors md:inline-block",
                isOverlayNav ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80"
              )}
            >
              <Facebook className="h-5 w-5" />
            </a>
            </div>
          </div>

          <div
            aria-hidden="true"
            className={cn("mt-4 h-px w-full", isOverlayNav ? "bg-white/[0.58]" : "bg-primary/[0.35]")}
          />

        </div>

        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "ml-auto h-8 w-8 p-0 md:hidden",
            isOverlayNav
              ? "text-white/90 hover:text-white"
              : "text-primary hover:text-primary"
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
            "bg-background"
          )}
        >
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-accent",
                  isLinkActive(link.to)
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
