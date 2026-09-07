import { Reveal } from "@/components/Reveal";
import { Contact } from "@/components/Contact";
import { PageBanner } from "@/components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <PageBanner compact />

      <section className="bg-background text-primary">
        <div className="container mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-18 xl:gap-24">
            <Reveal>
              <div className="max-w-xl">
                <h1 className="font-serif text-3xl font-normal uppercase leading-tight tracking-[0.18em] text-primary md:text-4xl">
                  Booking &amp; Contact
                </h1>
                <p className="mt-5 max-w-md text-[1.02rem] font-light leading-8 text-primary/72">
                  For booking, press, and general enquiries, please contact us below.
                </p>

                <div className="mt-9 space-y-8 text-primary/82">
                  <section>
                    <h2 className="text-[0.76rem] font-medium uppercase tracking-[0.22em] text-primary/54">
                      General Enquiries
                    </h2>
                    <div className="mt-4 space-y-2 text-[1rem] leading-7">
                      <p className="font-serif text-xl text-primary/92">
                        Adam Bülow
                      </p>
                      <p>
                        <a className="transition-colors hover:text-primary" href="mailto:newvalleysb@gmail.com">
                          newvalleysb@gmail.com
                        </a>
                      </p>
                      <p>
                        <a className="transition-colors hover:text-primary" href="tel:+46760409523">
                          +46 76 040 95 23
                        </a>
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-[0.76rem] font-medium uppercase tracking-[0.22em] text-primary/54">
                      Booking — Benelux &amp; Germany
                    </h2>
                    <div className="mt-4 space-y-2 text-[1rem] leading-7">
                      <p className="font-serif text-xl text-primary/92">
                        Kurt De Bont | Rootstownbookings
                      </p>
                      <p>
                        <a className="transition-colors hover:text-primary" href="mailto:kurt@rootstown.be">
                          kurt@rootstown.be
                        </a>
                      </p>
                      <p>
                        <a className="transition-colors hover:text-primary" href="tel:+32495535308">
                          +32 495 53 53 08
                        </a>
                      </p>
                      <p>
                        <a
                          className="transition-colors hover:text-primary"
                          href="https://www.rootstownbookings.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          rootstownbookings.com
                        </a>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <h2 className="font-serif text-3xl font-normal uppercase leading-tight tracking-[0.18em] text-primary md:text-4xl">
                  Send Us a Message
                </h2>
                <div className="mt-7">
                  <Contact />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
