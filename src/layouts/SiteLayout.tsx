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

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <ScrollToTop />
      <Navigation />
      <main
        id="main"
        className="flex flex-1 flex-col"
      >
        {children}
      </main>
      {!isHomePage && !isContactPage && <Footer />}
    </div>
  );
}
