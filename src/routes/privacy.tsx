import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import SEO from "@/components/site/SEO";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <SEO title="Privacy Policy — letstream Hub" description="letstream Hub privacy policy describing data collection, usage, and your rights." canonical="https://letstreamHub.com/privacy/" />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Legal</p>
          <h1 className="font-display text-5xl mt-3">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mt-3">Last updated: June 2026</p>

          <div className="prose prose-invert mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <Section title="1. Our Role">
              letstream Hub is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or streaming service provider.
            </Section>
            <Section title="2. Information We Collect">
              We collect information you provide directly when you request assistance, such as your name, email, phone, ZIP code, and support details. We may also collect usage data to help improve the website and advisory experience.
            </Section>
            <Section title="3. How We Use Your Information">
              We use data to respond to assistance requests, share relevant guidance, improve our content, and operate the website securely. We do not sell your personal information.
            </Section>
            <Section title="4. Information Sharing">
              We may share information with trusted service providers that help us operate the business, such as email and payment processors. We do not share provider passwords or other sensitive login credentials.
            </Section>
            <Section title="5. Data Security">
              We use reasonable administrative, technical, and physical safeguards to protect your information. Access is limited to authorized personnel who need the data to support our operations.
            </Section>
            <Section title="6. Your Rights">
              You may request access, correction, or deletion of your data by contacting <a href="mailto:hello@letstreamHub.com" className="text-primary underline">hello@letstreamHub.com</a>. We will respond in a timely manner.
            </Section>
            <Section title="7. Cookies & Tracking">
              The site uses essential cookies to function and optional analytics cookies to improve the experience. You may manage cookie preferences through your browser.
            </Section>
            <Section title="8. Children’s Privacy">
              This site is not intended for children under 13. We do not knowingly collect information from anyone under the age of 13.
            </Section>
            <Section title="9. Contact">
              Questions? Email <a href="mailto:hello@letstreamHub.com" className="text-primary underline">hello@letstreamHub.com</a>. <a href="tel:+18884786124" className="text-primary underline">(888) 478-6124</a>
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
