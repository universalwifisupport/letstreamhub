import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/site/SEO";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Layout>
      <SEO title="Contact — letstream Hub" description="Contact letstream Hub for independent, third-party service assistance with internet, cable, and streaming questions." canonical="https://letstreamHub.com/contact/" />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
            <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl text-balance">Need independent service assistance?</h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
              We support you with guidance on internet, cable, and streaming provider processes. Email or message us to request help from an independent advisor.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Thank you for reaching out to letstream Hub, an independent service assistance platform. We are not affiliated with, authorized by, or endorsed by any provider.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-8">
          <Reveal>
            <div className="lg:col-span-2 glass rounded-3xl p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gradient-red mx-auto grid place-items-center shadow-glow-red">
                    <Phone className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-3xl mt-6">Thank you</h2>
                  <p className="text-muted-foreground mt-3">A letstream Hub advisor will reach out within one business day.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <h2 className="font-display text-3xl">Send us a message</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" id="name" required />
                    <Field label="Email" id="email" type="email" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Phone" id="phone" type="tel" />
                    <Field label="ZIP code" id="zip" />
                  </div>
                  <div>
                    <label htmlFor="msg" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                    <textarea id="msg" required rows={5} className="w-full bg-input/40 border border-border rounded-2xl px-5 py-4 outline-none focus:border-gold transition" />
                  </div>
                  <button className="px-7 py-4 rounded-full bg-gradient-red text-primary-foreground font-medium shadow-glow-red hover:scale-[1.02] transition-transform">
                    Request Help
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-4">
              <InfoCard icon={Phone} label="Phone" value="(888) 478-6124" href="tel:+18884786124" />
              <InfoCard icon={Mail} label="Email" value="hello@letstreamHub.com" href="mailto:hello@letstreamHub.com" />
              <InfoCard icon={MapPin} label="Official Address" value="2120 Carrell Rd Apt 219, Fort Myers, FL 33901-8051, USA" />
              <InfoCard icon={Clock} label="Support hours" value="24/7 advisory" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="glass rounded-3xl overflow-hidden h-[420px] relative">
              <iframe
                title="letstream Hub service map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-125,24,-66,49&layer=mapnik"
                className="w-full h-full grayscale contrast-125 opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-3 max-w-[calc(100%-3rem)]">
                <div className="text-xs uppercase tracking-widest text-gold">Official Address</div>
                <div className="font-display text-sm md:text-base">2120 Carrell Rd Apt 219, Fort Myers, FL 33901-8051, USA</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input id={id} type={type} required={required} className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition" />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass rounded-2xl p-6 hover-lift">
      <Icon className="w-6 h-6 text-gold mb-3" />
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="font-display text-xl mt-1">{value}</div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
