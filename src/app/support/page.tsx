import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Support - HairWise",
  description: "Contact HairWise Support",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-snow">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-teal">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            Contact Support
          </h1>
          
          <p className="text-lg text-graphite mb-8">
            Need help? Found a bug? Want to request data deletion?
          </p>

          <div className="bg-white p-8 rounded-2xl border border-mist shadow-sm max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-teal" />
            </div>
            
            <p className="text-graphite mb-2">Email us at:</p>
            <a
              href="mailto:support@hairwise.org"
              className="text-2xl font-semibold text-teal hover:underline"
            >
              support@hairwise.org
            </a>
            
            <p className="text-ash mt-6 text-sm">
              We typically reply within 24 hours.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/terms">
              <Button variant="ghost" className="text-graphite hover:text-teal">
                Terms of Service
              </Button>
            </Link>
            <Link href="/privacy">
              <Button variant="ghost" className="text-graphite hover:text-teal">
                Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
