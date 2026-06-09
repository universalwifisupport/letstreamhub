import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Zap, Wifi, Tv, Video, Home, Briefcase, Star, MapPin, ArrowRight, ShieldCheck, ChevronDown, Play, Info, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Layout } from "@/components/site/Layout";
import SEO from "@/components/site/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import heroImg from "@/assets/hero-streaming.jpg";
import smartHome from "@/assets/smart-home.jpg";
import gaming from "@/assets/gaming.jpg";
import homeOffice from "@/assets/home-office.jpg";
import router from "@/assets/router.jpg";
import fiber from "@/assets/fiber.jpg";
import business from "@/assets/business.jpg";
import support from "@/assets/support.jpg";
import cableTv from "@/assets/cable-tv.jpg";
import customers from "@/assets/customer-1.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const faqs = [
  { q: "Are you an official cable or internet service provider?", a: "No. We are an independent third-party service assistance platform and we do not provide internet, cable, or streaming service plans." },
  { q: "Do you sell internet, cable, or streaming plans?", a: "No. We provide guidance, assistance, and information only. Provider plans and billing are handled directly by the service companies." },
  { q: "Do you charge for your services?", a: "Yes. We charge a separate service assistance fee for the independent help we provide. Provider charges remain separate." },
  { q: "Will I still be billed by my service provider?", a: "Yes. Provider billing remains unchanged. Our role is to assist you with provider processes and answer general questions." },
  { q: "Do you need my account passwords or sensitive information?", a: "No. We never request provider passwords or sensitive credentials. We only ask for the minimum information needed to assist you." },
  { q: "Which providers do you support?", a: "We may reference multiple providers for informational purposes only. We are not affiliated with, endorsed by, or sponsored by any provider." },
  { q: "Are your services refundable?", a: "Yes. Refund requests may be submitted within 7 to 15 days of service purchase, subject to the eligibility terms outlined in our Refund Policy." },
];

const services = [
  { icon: Zap, title: "Broadband Guidance", img: fiber, tag: "Independent Advice" },
  { icon: Tv, title: "Cable TV Assistance", img: cableTv, tag: "Informational Support" },
  { icon: Wifi, title: "Home Wi-Fi Help", img: router, tag: "Practical Tips" },
  { icon: Briefcase, title: "Business Connectivity Advice", img: business, tag: "Process Support" },
  { icon: Video, title: "Streaming Help", img: heroImg, tag: "Provider Navigation" },
  { icon: Home, title: "Smart Home Navigation", img: smartHome, tag: "Setup Guidance" },
];

const showcase = [
  { icon: Video, title: "Clear provider options", text: "Understand your streaming and cable options without confusing jargon." },
  { icon: Zap, title: "Practical connection help", text: "Get guidance for broadband, Wi-Fi, and network troubleshooting steps." },
  { icon: ShieldCheck, title: "Independent support", text: "Receive neutral assistance that is not tied to any provider relationship." },
  { icon: Wifi, title: "Home network clarity", text: "Learn what matters for reliable Wi-Fi coverage and provider setup procedures." },
];

const reasons = [
  { title: "Neutral advice", text: "We offer independent guidance on service choices and provider processes, not product sales.", img: fiber },
  { title: "Practical clarity", text: "Learn the right questions to ask your provider and how to move forward with confidence.", img: support },
  { title: "Transparent fees", text: "Our service assistance fee is separate from any provider charges you may receive.", img: homeOffice },
  { title: "No affiliation", text: "We do not claim endorsement or partnership with any cable, internet, or streaming provider.", img: business },
];

const testimonials = [
  { name: "Marcus & Eliza Vance", role: "Brooklyn, NY", quote: "The advisor helped us understand our local options and the next steps for our cable and internet questions.", stars: 5 },
  { name: "Priya Ramachandran", role: "Austin, TX — Designer", quote: "Their guidance made it easier to talk to my provider and avoid confusion during service setup.", stars: 5 },
  { name: "The Okafor Family", role: "Atlanta, GA", quote: "We finally had a clear plan for improving our home network without feeling pressured by provider sales calls.", stars: 5 },
];

function HomePage() {
  return (
    <Layout>
      <SEO
        title="Independent Service Assistance — letstream Hub"
        description="Clear, neutral help for internet, cable, and streaming questions."
        canonical="https://letstreamHub.com/"
      />
      <Hero />
      <ServicesRow />
      <Showcase />
      <Coverage />
      <WhySwitch />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden -mt-20 pt-24 pb-24">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Family streaming cinematic 4K content" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            <span className="w-8 h-px bg-primary" /> Your Connection Hub
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-4xl tracking-wide">
            Internet, TV,
            <br />
            & Streaming
            <br />
            Made Easy
          </h1>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Find the best plans, compare services, and get the connectivity your home deserves.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors">
              Compare Plans
            </a>
            <a
              href="tel:+18884786124"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-white/15 backdrop-blur text-foreground font-bold uppercase tracking-wider text-sm hover:bg-white/25 transition-colors"
            >
              (888) 478-6124
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesRow() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
  };
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-10 mb-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">Top Picks <span className="text-primary">for Your Home</span></h2>
        </Reveal>
      </div>
      <div className="relative group">
        <button onClick={() => scroll(-1)} aria-label="Scroll left" className="hidden md:grid absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 place-items-center bg-black/70 hover:bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <button onClick={() => scroll(1)} aria-label="Scroll right" className="hidden md:grid absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 place-items-center bg-black/70 hover:bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-6 h-6" />
        </button>
        <div ref={scroller} className="scroll-row flex gap-3 overflow-x-auto px-6 lg:px-10 snap-x snap-mandatory pb-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="netflix-tilt snap-start relative shrink-0 w-[280px] md:w-[340px] aspect-[16/10] rounded-md overflow-hidden bg-card group/card"
            >
              <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest">
                <s.icon className="w-3 h-3" /> {s.tag}
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="font-display text-2xl md:text-3xl tracking-wide">{s.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground opacity-0 group-hover/card:opacity-100 transition-opacity">
                  Watch how it works <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Experience</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-wide">Better connectivity. <span className="text-primary">Easier choices.</span></h2>
            <p className="text-muted-foreground mt-5 leading-relaxed max-w-xl">
              We help you find the right streaming, cable, and internet services for your home with clear, actionable guidance.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {showcase.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="relative h-64 rounded-md overflow-hidden bg-card border border-border/40 p-6 flex flex-col justify-end hover-lift">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const [zip, setZip] = useState("");
  return (
    <section id="coverage" className="py-24 relative overflow-hidden border-y border-border/40">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Coverage</p>
              <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-wide">
                Independent assistance, <span className="text-primary">nationwide</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
                We support users across all 50 states with general guidance on local cable, internet, and streaming questions.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Viewing assistance options for ${zip}…`);
                }}
                className="mt-8 flex items-stretch gap-2 max-w-md"
              >
                <div className="flex-1 flex items-center bg-card border border-border rounded-sm px-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <input
                    required
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="ENTER ZIP CODE"
                    className="flex-1 bg-transparent outline-none px-3 py-3 text-sm tracking-wider placeholder:text-muted-foreground/70"
                    aria-label="ZIP code"
                  />
                </div>
                <button className="px-6 rounded-sm bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors">
                  View Guidance
                </button>
              </form>

              <div className="grid grid-cols-2 gap-4 mt-12 max-w-md">
                {[
                  { n: 50000, s: "+", l: "People Helped" },
                  { n: 50, s: "", l: "States Served" },
                  { n: 24, s: "/7", l: "Advisory Hours" },
                  { n: 1, s: "", l: "Year Launched" },
                ].map((stat) => (
                  <div key={stat.l} className="border-l-2 border-primary pl-4">
                    <div className="font-display text-4xl tracking-wide"><Counter to={stat.n} suffix={stat.s} /></div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative aspect-[5/4] bg-card border border-border/40 rounded-md p-8 overflow-hidden">
              <svg viewBox="0 0 500 320" className="w-full h-full" aria-hidden>
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.55 0.24 27)" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="oklch(0.55 0.24 27)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path
                  d="M50,140 Q70,90 120,80 L170,70 Q220,60 260,80 L310,70 Q370,75 410,100 L450,150 Q460,200 430,230 L380,260 Q320,270 270,260 L210,265 Q150,270 110,250 L70,220 Q40,180 50,140 Z"
                  fill="oklch(0.10 0 0)"
                  stroke="oklch(0.55 0.24 27 / 0.4)"
                  strokeWidth="1"
                />
                {[
                  { x: 110, y: 140 }, { x: 180, y: 110 }, { x: 230, y: 160 }, { x: 280, y: 130 },
                  { x: 330, y: 180 }, { x: 380, y: 140 }, { x: 150, y: 200 }, { x: 250, y: 220 }, { x: 350, y: 220 },
                ].map((p, i) => (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r="20" fill="url(#glow)" />
                    <circle cx={p.x} cy={p.y} r="3" fill="oklch(0.55 0.24 27)">
                      <animate attributeName="r" values="3;6;3" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                <span><span className="inline-block w-2 h-2 rounded-full bg-primary mr-2" />Active Coverage</span>
                <span className="text-primary">Live Network</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhySwitch() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-wide">Expert help for <span className="text-primary">your home services</span></h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <article className="relative rounded-md overflow-hidden group h-80 border border-border/40">
                <img src={r.img} alt={r.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                <div className="absolute top-4 left-4 font-display text-5xl text-primary opacity-80">0{i + 1}</div>
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="font-display text-2xl md:text-3xl tracking-wide">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">{r.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  return (
    <section className="py-24 relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Customer Stories</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-wide">Trusted in 50,000+ <span className="text-primary">homes</span></h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <img src={customers} alt="Happy letstream Hub customers" width={800} height={800} loading="lazy" className="w-full aspect-square object-cover rounded-md shadow-elegant" />
              <div className="absolute -bottom-5 -right-5 bg-primary px-5 py-3 rounded-sm">
                <div className="font-display text-3xl">4.9★</div>
                <div className="text-[10px] uppercase tracking-widest">Avg Rating</div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="font-sans text-2xl md:text-3xl leading-snug text-balance font-light">
                "{t.quote}"
              </blockquote>
              <div className="mt-8">
                <div className="font-bold uppercase tracking-wider">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
              <div className="flex gap-2 mt-10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Story ${i + 1}`}
                    className={`h-1 rounded-full transition-all ${i === idx ? "w-10 bg-primary" : "w-5 bg-muted"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-10 max-w-4xl">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">FAQ</p>
            <h2 className="font-display text-4xl md:text-6xl mt-3 tracking-wide">Questions, <span className="text-primary">answered</span></h2>
          </div>
        </Reveal>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <div className="bg-background border border-border/40 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-card transition-colors"
                >
                  <span className="font-display text-xl tracking-wide">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary flex-none transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={fiber} alt="" aria-hidden loading="lazy" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      </div>
      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl tracking-wide">Find your <span className="text-primary">perfect plan</span> today.</h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Speak with an advisor to compare streaming, cable, and internet options for your home.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+18884786124"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
              >
                (888) 478-6124
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-white/15 backdrop-blur text-foreground font-bold uppercase tracking-wider text-sm hover:bg-white/25 transition-colors">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
