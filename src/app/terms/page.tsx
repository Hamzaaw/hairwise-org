import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service - HairWise",
  description: "HairWise Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-teal">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-2">
            Terms of Service
          </h1>
          
          <p className="text-lg font-semibold text-ink mt-8">HAIRWISE TERMS OF SERVICE</p>
          <p className="text-graphite"><strong>Last Updated:</strong> December 2025</p>

          <section className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h2 className="text-xl font-semibold text-ink mb-4">
              1. NOT A MEDICAL DEVICE (CRITICAL)
            </h2>
            <p className="text-graphite mb-4">
              HairWise is for cosmetic and informational purposes only.
            </p>
            <ul className="space-y-3 text-graphite list-none pl-0">
              <li>
                <strong className="text-ink">No Diagnosis:</strong> This app CANNOT diagnose medical conditions such as Alopecia, Psoriasis, or Dermatitis.
              </li>
              <li>
                <strong className="text-ink">No Medical Advice:</strong> The &quot;Hair Score&quot; and &quot;Routine&quot; are cosmetic suggestions based on visual analysis. They are not medical prescriptions.
              </li>
              <li>
                <strong className="text-ink">Consult a Doctor:</strong> Always consult a qualified healthcare provider for any medical concerns regarding hair loss or scalp health.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">2. AI LIMITATIONS</h2>
            <p className="text-graphite">
              You acknowledge that HairWise uses Artificial Intelligence (AI) to analyze photos. AI is probabilistic and may produce errors (&quot;hallucinations&quot;). You agree not to rely on the AI analysis as the sole basis for any health or financial decision.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">3. AFFILIATE DISCLOSURE</h2>
            <p className="text-graphite">
              HairWise participates in affiliate marketing programs. We may earn a commission on products purchased through links in our app. This does not affect the price you pay.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">4. USER CONTENT</h2>
            <p className="text-graphite">
              You retain ownership of your photos. By uploading them, you grant HairWise a license to process them for the purpose of providing the analysis. We do not sell your identifiable photos to third parties.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
