import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import SEO from "@/components/site/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Award, Heart, Globe, Users } from "lucide-react";
import business from "@/assets/business.jpg";
import support from "@/assets/support.jpg";
import homeOffice from "@/assets/home-office.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "User-First Clarity",
    text: "We focus on the questions users need answered, not provider sales pitches.",
  },
  {
    icon: Award,
    title: "Trustworthy Guidance",
    text: "Our advice is independent and designed to help you make informed choices.",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    text: "We serve individuals across the US with general broadband and cable assistance.",
  },
  {
    icon: Users,
    title: "Human Support",
    text: "Real advisors are available to explain common provider processes and next steps.",
  },
];

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About letstream Hub — Independent Service Assistance"
        description="Learn about letstream Hub, an independent third-party service assistance platform for internet, cable, and streaming guidance."
        canonical="https://letstreamHub.com/about/"
      />
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">About letstream Hub</p>
            <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl text-balance">
              An independent assistance platform for internet and cable guidance.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              letstream Hub is an independent third-party service assistance provider launched this
              year. We help people understand broadband, Wi-Fi, cable TV, and streaming support
              without claiming affiliation with any provider.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-onyx">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src={business}
              alt="letstream Hub advisory team"
              loading="lazy"
              className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover"
            />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance">
                Independent clarity in a <span className="italic text-gold">complex world</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Founded this year as a third-party assistance platform, we prioritize clarity and
                transparency. We are not an ISP, and we are not authorized by any cable, internet,
                or streaming provider.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Our team helps users ask the right questions, understand provider options, and take
                the next steps with confidence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Mission & Values</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance">
                What we stand for
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="glass rounded-2xl p-7 hover-lift h-full">
                  <v.icon className="w-7 h-7 text-gold mb-4" />
                  <h3 className="font-display text-xl">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-onyx">
        <div className="container mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-6">
          {[
            { n: 50000, s: "+", l: "People Helped" },
            { n: 50, s: "", l: "States Served" },
            { n: 24, s: "/7", l: "Advisory Hours" },
            { n: 1, s: "", l: "Year Launched" },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="text-center">
                <div className="font-display text-5xl text-gold">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground mt-2">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Team & Support</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance">
                Trusted help in every <span className="italic text-gold">conversation</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our advisors are trained to explain provider procedures and the steps you should
                consider when dealing with internet, cable, and streaming questions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <img
              src={support}
              alt="letstream Hub customer support"
              loading="lazy"
              className="rounded-3xl shadow-glow-red w-full aspect-[4/3] object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-onyx">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src={homeOffice}
              alt="Customer commitment"
              loading="lazy"
              className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover order-2 lg:order-1"
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Customer Commitment</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance">
                Our transparency pledge
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We clearly state our role, our fee structure, and the limits of our assistance. We
                do not claim provider authorization, endorsement, or partnership.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
