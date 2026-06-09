import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import SEO from "@/components/site/SEO";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <Layout>
      <SEO
        title="Disclaimer — letstream Hub"
        description="Disclaimer describing the independent nature of letstream Hub's advisory services."
        canonical="https://letstreamHub.com/disclaimer/"
      />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Legal</p>
          <h1 className="font-display text-5xl mt-3">Disclaimer</h1>
          <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              letstream Hub is an independent third-party service assistance provider. We are not
              affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV
              service provider. Brand names, if mentioned, are used strictly for informational
              purposes only.
            </p>
            <p>
              We provide general guidance and information related to provider processes, billing
              questions, and connectivity support. We do not sell or activate internet, cable, or
              streaming services.
            </p>
            <p>
              Use of our advisory services does not create a partnership, endorsement, or
              sponsorship relationship with any provider. Any provider references are intended to
              help explain common industry terms and processes.
            </p>
            <p>
              If you have questions about our role or the scope of our assistance, please contact{" "}
              <a href="mailto:hello@letstreamHub.com" className="text-primary underline">
                hello@letstreamHub.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
