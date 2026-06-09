import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import SEO from "@/components/site/SEO";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <Layout>
      <SEO title="Terms — letstream Hub" description="Terms and conditions for using letstream Hub's independent service assistance platform." canonical="https://letstreamHub.com/terms/" />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Legal</p>
          <h1 className="font-display text-5xl mt-3">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mt-3">Last updated: June 2026</p>

          <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <Section title="1. Scope of Service">
              letstream Hub is an independent third-party service assistance provider. We offer guidance and information related to internet, broadband, Wi-Fi, cable, and streaming support. We do not sell or provision service plans.
            </Section>
            <Section title="2. User Responsibilities">
              You agree to provide accurate information and to use our guidance in a lawful manner. You are responsible for any decisions made with respect to provider services.
            </Section>
            <Section title="3. Independent Assistance">
              Our service is informational only. We are not affiliated with, authorized by, or endorsed by any internet, cable, or streaming service provider.
            </Section>
            <Section title="4. Fees and Payment">
              Our assistance fees are separate from any provider charges. Payment is due according to the terms presented at the time of purchase.
            </Section>
            <Section title="5. Refund Policy">
              Refund requests may be submitted within 7 to 15 days of service purchase. Eligibility depends on the type of assistance provided and whether the service has been delivered.
            </Section>
            <Section title="6. Limitation of Liability">
              letstream Hub is not responsible for provider decisions, service availability, or charges assessed by other companies. Our liability is limited to our assistance fee.
            </Section>
            <Section title="7. Changes to These Terms">
              We may update these terms with notice. Continued use of our site or services constitutes acceptance of the updated terms.
            </Section>
            <Section title="8. Contact">
              For questions about these terms, email <a href="mailto:hello@letstreamHub.com" className="text-primary underline">hello@letstreamHub.com</a>. <a href="tel:(888) 478-6124" className="text-primary underline">(888) 478-6124</a>
            </Section>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-foreground mb-3">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
