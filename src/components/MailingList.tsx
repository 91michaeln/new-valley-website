import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const SUBSTACK_SUBSCRIBE_URL = "https://newvalleystringband.substack.com/subscribe";

export function MailingList() {
  return (
    <section className="relative border-b border-border/20 bg-background">
      <Reveal>
        {/* Adjust newsletter section height here */}
        <div
          className="container mx-auto flex items-center px-6"
          style={{ paddingTop: 84, paddingBottom: 84 }}
        >
          <div className="w-full max-w-5xl border-t border-foreground/8 pt-8 md:pt-10">
            <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-12">
              <div>
                <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-foreground/78 md:text-2xl">
                  Stay Connected
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-foreground/58">
                  News, releases and tour updates.
                </p>
              </div>

              <form
                action={SUBSTACK_SUBSCRIBE_URL}
                target="_blank"
                className="flex flex-col gap-3 border-t border-foreground/8 pt-5 sm:flex-row md:border-t-0 md:pt-0"
              >
                <label className="sr-only" htmlFor="mailing-list-email">
                  Email address
                </label>
                <input
                  id="mailing-list-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="h-11 min-w-0 flex-1 border border-foreground/12 bg-card/35 px-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/45 focus:border-foreground/28 focus:bg-card/60"
                />
                <Button
                  type="submit"
                  variant="cta"
                  size="cta"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
