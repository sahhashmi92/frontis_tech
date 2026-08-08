import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us what you need: customer acquisition, back-office support, talent, marketing, or software. We respond to all inquiries within one US business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Tell us what you need"
        lede="We will get back to you within one business day."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20" aria-label="Contact">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={100}>
            <aside className="rounded-2xl border border-line bg-surface p-7 sm:p-8">
              <dl className="space-y-7">
                <div>
                  <dt className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                    Email us directly
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-lg font-semibold break-all text-navy underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line pt-7">
                  <dt className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                    Response commitment
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    Every inquiry gets a reply within one US business day, usually
                    sooner.
                  </dd>
                </div>
                <div className="border-t border-line pt-7">
                  <dt className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                    Not sure what you need?
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    Pick “Not sure / General inquiry” in the form. Describing the
                    problem is enough. We’ll help you map it to the right service.
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
