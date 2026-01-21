import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy - HairWise",
  description: "HairWise Privacy Policy",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          
          <p className="text-lg font-semibold text-ink mt-8">HAIRWISE PRIVACY POLICY</p>
          <p className="text-graphite"><strong>Last Updated:</strong> January 2026</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">1. DATA WE COLLECT</h2>
            <ul className="space-y-3 text-graphite list-none pl-0">
              <li>
                <strong className="text-ink">Images:</strong> We collect photos of your hair/scalp that you upload. These images are securely transmitted to our encrypted servers solely for the purpose of generating your analysis.
              </li>
              <li>
                <strong className="text-ink">Usage Data:</strong> We collect anonymous usage statistics (e.g., button clicks, screen time) to improve app stability and performance.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">2. HOW WE USE YOUR DATA</h2>
            <ul className="space-y-3 text-graphite list-none pl-0">
              <li>
                <strong className="text-ink">To Analyze:</strong> Your photos are processed by our AI algorithms to provide visual density scoring and routine suggestions.
              </li>
              <li>
                <strong className="text-ink">To Improve:</strong> We may use de-identified and aggregated data to refine our AI models. This data is stripped of all personal identifiers (such as name or IP address) before being used for training.
              </li>
              <li>
                <strong className="text-ink">Affiliate Links:</strong> We use affiliate links for product recommendations. Clicking these links may share a non-personal &quot;referral ID&quot; with the merchant to track the source of the click. We do not share your health data or photos with these merchants.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">3. DATA STORAGE & SECURITY</h2>
            <p className="text-graphite">
              We implement industry-standard security measures to protect your data. Your images are stored on secure cloud servers and are encrypted in transit and at rest.
            </p>
          </section>

          <section className="mt-8 p-6 bg-teal/5 border border-teal/20 rounded-xl">
            <h2 className="text-xl font-semibold text-ink mb-4">4. DATA DELETION & YOUR RIGHTS</h2>
            <p className="text-graphite mb-4">
              You retain full ownership of your data.
            </p>
            <ul className="space-y-3 text-graphite list-none pl-0">
              <li>
                <strong className="text-ink">In-App Deletion:</strong> You can delete your account and all associated data instantly by going to <strong>Settings &gt; Delete Account</strong> within the app.
              </li>
              <li>
                <strong className="text-ink">Manual Request:</strong> Alternatively, you may contact us at{" "}
                <a href="mailto:muhammad@hairwise.net" className="text-teal hover:underline">
                  muhammad@hairwise.net
                </a>{" "}
                to request data removal.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">5. CHILDREN&apos;S PRIVACY</h2>
            <p className="text-graphite">
              Our services are not intended for users under the age of 18. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will delete it.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">6. CONTACT US</h2>
            <p className="text-graphite">
              If you have questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:muhammad@hairwise.net" className="text-teal hover:underline">
                muhammad@hairwise.net
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
