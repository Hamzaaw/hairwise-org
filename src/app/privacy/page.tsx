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
          <p className="text-graphite"><strong>Last Updated:</strong> December 2025</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">1. DATA WE COLLECT</h2>
            <ul className="space-y-3 text-graphite list-none pl-0">
              <li>
                <strong className="text-ink">Images:</strong> We collect photos of your hair/scalp solely for analysis.
              </li>
              <li>
                <strong className="text-ink">Usage Data:</strong> We track how you use the app to improve features.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-ink mb-4">2. HOW WE USE YOUR DATA</h2>
            <ul className="space-y-3 text-graphite list-none pl-0">
              <li>
                <strong className="text-ink">To Analyze:</strong> Your photos are processed to generate your Hair Profile.
              </li>
              <li>
                <strong className="text-ink">To Improve:</strong> We may use anonymized (de-identified) data to train our AI models.
              </li>
              <li>
                <strong className="text-ink">To Monetize:</strong> We do NOT sell your personal data. We use affiliate links which may track clicks.
              </li>
            </ul>
          </section>

          <section className="mt-8 p-6 bg-teal/5 border border-teal/20 rounded-xl">
            <h2 className="text-xl font-semibold text-ink mb-4">3. DATA DELETION</h2>
            <p className="text-graphite">
              You have the right to delete your data. To request deletion, please contact us via our{" "}
              <Link href="/support" className="text-teal hover:underline">
                Support page
              </Link>.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
