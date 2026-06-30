import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import SEO from "@/components/site/SEO";

export const Route = createFileRoute("/refund")({
  component: RefundPage,
});

function RefundPage() {
  return (
    <Layout>
      <SEO
        title="Refund Policy — letstream Hub"
        description="letstream Hub refund policy describing eligibility and the request process."
        canonical="https://letstreamHub.com/refund/"
      />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Legal</p>
          <h1 className="font-display text-5xl mt-3">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mt-3">Last updated: June 2026</p>

          <div className="prose prose-invert mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <Section title="1. Independent Service Assistance">
              letstream Hub provides independent third-party assistance. We are not a service
              provider, and our fees are separate from any provider charges.
            </Section>
            <Section title="2. Refund Eligibility">
              Refund requests may be submitted within 7 to 15 days of your service purchase. To be
              eligible, you must demonstrate that the assistance provided did not meet the scope of
              work outlined at the time of purchase.
            </Section>
            <Section title="3. Non-Refundable Services">
              Services that have been fully delivered or where the advisory process has been
              completed are generally non-refundable. We do not offer refunds for provider-side
              issues, such as service outages or billing decisions made by your internet or cable
              company.
            </Section>
            <Section title="4. How to Request a Refund">
              To request a refund, please email{" "}
              <a href="mailto:hello@letstreamHub.com" className="text-primary underline">
                hello@letstreamHub.com
              </a>{" "}
              with your order details and the reason for your request. We will review your claim and
              respond within 3 to 5 business days.
            </Section>
            <Section title="5. Contact Us">
              If you have questions about our Refund Policy, please reach out to us at{" "}
              <a href="mailto:hello@letstreamHub.com" className="text-primary underline">
                hello@letstreamHub.com
              </a>{" "}
              or call{" "}
              <a href="tel:+18884259735" className="text-primary underline">
                (888) 425-9735
              </a>
              .
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
