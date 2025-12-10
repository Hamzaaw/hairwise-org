"use client";

import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-cloud px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              <span className="text-sm font-medium text-graphite">AI-Powered Hair Health Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
              Track Your Hair Health{" "}
              <span className="text-teal">with Precision.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-graphite max-w-xl mx-auto lg:mx-0">
              Clinical-grade AI analysis to monitor density, detect early thinning, 
              and build science-backed care routines. Results you can measure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-ink hover:bg-ink/90 text-white gap-2 h-14 px-6 rounded-xl"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-mist hover:border-ash gap-2 h-14 px-6 rounded-xl"
              >
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-ash">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Weekly Tracking</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-[280px] md:w-[320px] bg-ink rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <Image
                    src="/screenshot-dashboard.png"
                    alt="HairWise+ Dashboard showing hair score and daily routine"
                    width={430}
                    height={932}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-slate-blue/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
