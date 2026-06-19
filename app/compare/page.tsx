import type { Metadata } from "next";

import { Suspense } from "react";

import CompareSalary from "@/components/features/CompareSalary";

export const metadata: Metadata = {
  title: "Compare Tech Salaries | TalentDash",

  description:
    "Compare software engineer compensation between technology companies.",

  alternates: {
    canonical: "https://talentdash.com/compare",
  },

  openGraph: {
    title: "Compare Tech Salaries | TalentDash",
    description:
      "Compare software engineer compensation between technology companies.",
    url: "https://talentdash.com/compare",
  },
};

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <main className="min-h-screen bg-[#F7F7F7] py-10 md:py-12">
        <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight text-[#222222] mb-3">
          Compare Salary Compensation
        </h1>

        <p className="text-[16px] leading-[1.6] text-[#717171] mb-8 max-w-2xl">
          Compare total compensation between technology companies
        </p>

        <Suspense
          fallback={
            <div className="bg-white rounded-xl border border-[#EBEBEB] shadow-sm p-8 text-[16px] text-[#717171] animate-pulse">
              Loading comparison...
            </div>
          }
        >
          <CompareSalary />
        </Suspense>
      </main>
    </div>
  );
}