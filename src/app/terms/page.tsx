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
          <p className="text-graphite"><strong>Last Updated:</strong> January 2026</p>

          <section className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h2 className="text-xl font-semibold text-ink mb-4">
              1. NOT A MEDICAL DEVICE (CRITICAL)
            </h2>
            <p className="text-graphite mb-4">
              HairWise is for <strong>cosmetic, aesthetic, and informational purposes only</strong>.
            </p>
            <ul className="space-y-3 text-graphite list-none pl-0">
              <li>
                <strong className="text-ink">No Diagnosis:</strong> This app CANNOT diagnose medical conditions such as Alopecia, Psoriasis, or Dermatitis. Any references to these conditions are for educational comparison only.
              </li>
              <li>
                <strong className="text-ink">No Medical Advice:</strong> The &quot;Hair Score&quot; and &quot;Routine&quot; are cosmetic estimates based on visual analysis of user-uploaded images. They are not medical prescriptions or clinical diagnoses.
              </li>
              <li>
                <strong className="text-ink">Consult a Doctor:</strong> Always consult a qualified healthcare provider for any medical concerns regarding hair loss, scalp health, or sudden changes in appearance.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">2. AI LIMITATIONS</h2>
            <p className="text-graphite">
              You acknowledge that HairWise uses Artificial Intelligence (AI) to analyze photos. AI is probabilistic and may produce errors, inaccuracies, or &quot;hallucinations.&quot; You agree not to rely on the AI analysis as the sole or primary basis for any health, medical, or financial decision.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">3. AFFILIATE DISCLOSURE</h2>
            <p className="text-graphite">
              HairWise participates in affiliate marketing programs. We may earn a commission on products purchased through links in our app. This funding supports the app&apos;s maintenance and does not influence our cosmetic analysis results. This does not affect the price you pay.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">4. USER CONTENT</h2>
            <p className="text-graphite">
              You retain ownership of your photos. By uploading them, you grant HairWise a license to process them solely for the purpose of providing the analysis and improving the service. We do not sell or trade your identifiable photos to third parties.
            </p>
          </section>

          <section className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl">
            <h2 className="text-xl font-semibold text-ink mb-4">5. APPLE APP STORE PROVISIONS</h2>
            <p className="text-graphite mb-4">
              If you downloaded HairWise from the Apple App Store, you agree to the following:
            </p>
            <ul className="space-y-3 text-graphite list-none pl-0">
              <li>
                <strong className="text-ink">Acknowledgment:</strong> This agreement is between you and HairWise only, not Apple. Apple is not responsible for the App or its content.
              </li>
              <li>
                <strong className="text-ink">Scope of License:</strong> The license granted to you is limited to a non-transferable license to use the App on any Apple-branded products you own or control.
              </li>
              <li>
                <strong className="text-ink">Maintenance:</strong> Apple has no obligation to provide any maintenance or support services for the App.
              </li>
              <li>
                <strong className="text-ink">Warranty:</strong> Apple is not responsible for any product warranties. If the App fails to conform to any warranty, you may notify Apple, and Apple will refund the purchase price (if any). To the maximum extent permitted by law, Apple has no other warranty obligation.
              </li>
              <li>
                <strong className="text-ink">Legal Compliance:</strong> You represent that (i) you are not located in a country subject to a U.S. government embargo, and (ii) you are not listed on any U.S. government list of prohibited or restricted parties.
              </li>
              <li>
                <strong className="text-ink">Third-Party Beneficiary:</strong> You acknowledge that Apple and its subsidiaries are third-party beneficiaries of this agreement and have the right to enforce it against you.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">6. GOVERNING LAW</h2>
            <p className="text-graphite">
              These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of law principles.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
