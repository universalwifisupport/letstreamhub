import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/site/SEO";

const faqs = [
  {
    q: "Are you an official cable or internet service provider?",
    a: "No. We are an independent third-party service assistance platform and not a provider.",
  },
  {
    q: "Do you sell internet, cable, or streaming plans?",
    a: "No. We provide guidance and assistance only. Provider plans are sold directly through the providers themselves.",
  },
  {
    q: "Do you charge for your services?",
    a: "Yes. Our service fees are separate from any provider fees or bills.",
  },
  {
    q: "Will I still be billed by my service provider?",
    a: "Yes. Provider billing remains unchanged. We do not handle your provider invoices.",
  },
  {
    q: "Do you need my account passwords or sensitive information?",
    a: "No. We never request provider passwords or sensitive account credentials.",
  },
  {
    q: "Which providers do you support?",
    a: "We may reference multiple providers for informational purposes only. We have no affiliation, endorsement, or sponsorship from any provider.",
  },
  {
    q: "Are your services refundable?",
    a: "Refund requests may be submitted within 7 to 15 days of service purchase, subject to the eligibility criteria in our Refund Policy.",
  },
];

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <SEO
        title="FAQ — letstream Hub"
        description="Frequently asked questions about letstream Hub's independent service assistance for internet, cable, and streaming."
        canonical="https://letstreamHub.com/faq/"
      />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-4xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">FAQ</p>
            <h1 className="font-display text-5xl md:text-7xl mt-3 tracking-wide">
              Frequently asked questions
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Answers to the most common questions about our independent service assistance
              platform.
            </p>
          </Reveal>

          <div className="mt-16 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <div className="bg-card border border-border/40 overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-background transition-colors"
                  >
                    <span className="font-display text-xl tracking-wide">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-none transition-transform ${open === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-sm text-muted-foreground">
            <p>
              letstream Hub is an independent third-party service assistance provider. We are not
              affiliated with, authorized by, or endorsed by any internet, cable, or streaming
              service provider.
            </p>
            <p className="mt-3">
              Need more help?{" "}
              <Link to="/contact" className="text-primary underline">
                Contact us
              </Link>{" "}
              for general guidance and support.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
