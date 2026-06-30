import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/contact";
  const isOverlayNav =
    isHomePage ||
    location.pathname === "/about" ||
    location.pathname === "/tour" ||
    location.pathname === "/media" ||
    location.pathname === "/contact" ||
    location.pathname === "/our-story" ||
    location.pathname === "/our-sound";

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <ScrollToTop />
      <Navigation />
      <main
        id="main"
        className={!isOverlayNav ? "pt-12" : ""}
      >
        {children}
      </main>
      {!isHomePage && !isContactPage && <Footer />}
    </div>
  );
}
