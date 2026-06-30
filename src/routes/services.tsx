import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import SEO from "@/components/site/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Check, Phone } from "lucide-react";
import fiber from "@/assets/fiber.jpg";
import cableTv from "@/assets/cable-tv.jpg";
import business from "@/assets/business.jpg";
import router from "@/assets/router.jpg";
import hero from "@/assets/hero-streaming.jpg";
import smartHome from "@/assets/smart-home.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const blocks = [
  {
    title: "Broadband Guidance",
    img: fiber,
    text: "Information to help you understand broadband offerings, provider terms, and common connectivity trade-offs.",
    points: [
      "Independent advice",
      "Provider process explanation",
      "No plan sales",
      "Fee-based assistance",
    ],
  },
  {
    title: "Cable TV Assistance",
    img: cableTv,
    text: "General support for cable TV questions, channel lineup navigation, and how to compare provider options.",
    points: [
      "Informational support",
      "Provider reference only",
      "Setup guidance",
      "No affiliation claims",
    ],
  },
  {
    title: "Business Connectivity Advice",
    img: business,
    text: "Guidance for small businesses and home offices on choosing the right provider path and understanding service terms.",
    points: [
      "Provider navigation",
      "Billing explanations",
      "Network readiness",
      "Independent perspective",
    ],
  },
  {
    title: "Home Wi-Fi Help",
    img: router,
    text: "Practical assistance for home Wi-Fi challenges, coverage questions, and communicating with providers clearly.",
    points: [
      "Coverage tips",
      "Equipment awareness",
      "Troubleshooting guidance",
      "Non-technical explanations",
    ],
  },
  {
    title: "Streaming Support Guidance",
    img: hero,
    text: "Helpful context for streaming services, device setup questions, and understanding service provider references.",
    points: [
      "Provider neutral advice",
      "Troubleshooting paths",
      "Subscription clarity",
      "Informational only",
    ],
  },
  {
    title: "Smart Home Navigation",
    img: smartHome,
    text: "Assistance with smart home connectivity questions and how to align device setup with provider network requirements.",
    points: [
      "Router and device context",
      "Wi-Fi network advice",
      "No provider endorsement",
      "Independent support",
    ],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <SEO
        title="Services — letstream Hub"
        description="Independent service assistance for cable, internet, and streaming. Learn how we help with provider processes and troubleshooting."
        canonical="https://letstreamHub.com/services/"
      />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Assistance</p>
            <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl text-balance">
              Independent service assistance for cable, internet, and streaming.
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
              We do not sell plans. We provide clarity, explain provider procedures, and help you
              understand the next steps for your service questions.
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed">
              letstream Hub is an independent third-party service assistance provider. We are not
              affiliated with, authorized by, or endorsed by any provider.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-10 space-y-24">
          {blocks.map((b, i) => (
            <Reveal key={b.title}>
              <article
                className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className="lg:col-span-6 [direction:ltr]">
                  <img
                    src={b.img}
                    alt={b.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover rounded-3xl shadow-elegant"
                  />
                </div>
                <div className="lg:col-span-6 [direction:ltr]">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">0{i + 1}</p>
                  <h2 className="font-display text-3xl md:text-5xl mt-3 text-balance">{b.title}</h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{b.text}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {b.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-gold flex-none" /> {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+18884259735"
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-red text-primary-foreground shadow-glow-red hover:scale-105 transition-transform"
                  >
                    <Phone className="w-4 h-4" /> (888) 425-9735
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
