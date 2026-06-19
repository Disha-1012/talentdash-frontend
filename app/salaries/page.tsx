import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import SalaryPageClient from "@/components/features/SalaryPageClient";
import FilterBar from "@/components/features/FilterBar";
import { cleanedSalaries } from "@/lib/mock-data";
import SortSelect from "@/components/features/SortSelect";

export const metadata: Metadata = {
    title: "Software Engineer Salaries at Amazon India — L3 to L5 | TalentDash",
    description:
        "Explore software engineer salaries, total compensation, levels and company-wise technology pay trends.",
    alternates: { canonical: "https://talentdash.com/salaries" },
    openGraph: {
        title: "Software Engineer Salaries | TalentDash",
        description: "Compare technology salaries by company, role and level.",
        url: "https://talentdash.com/salaries",
    },
};

interface Props {
    searchParams: Promise<{
        company?: string;
        level?: string;
        currency?: string;
        role?: string;
        location?: string;
        sort?: string;
    }>;
}

export default async function SalariesPage({ searchParams }: Props) {
    const params = await searchParams;

    let data = [...cleanedSalaries];
    if (params.sort === "base") {
        data.sort((a, b) => b.base_salary - a.base_salary);
    } else if (params.sort === "experience") {
        data.sort((a, b) => b.experience_years - a.experience_years);
    } else {
        data.sort((a, b) => b.total_compensation - a.total_compensation);
    }

    if (params.company) {
        data = data.filter((item) =>
            item.company.toLowerCase().includes(params.company!.toLowerCase())
        );
    }

    if (params.role) {
        data = data.filter((item) => item.role === params.role);
    }

    if (params.level) {
        const selectedLevels = params.level.split(",");
        data = data.filter((item) => selectedLevels.includes(item.level));
    }

    if (params.location) {
        data = data.filter((item) => item.location === params.location);
    }

    if (params.currency) {
        data = data.filter((item) => item.currency === params.currency);
    }

    if (params.sort === "base") {
        data.sort((a, b) => b.base_salary - a.base_salary);
    } else if (params.sort === "experience") {
        data.sort((a, b) => b.experience_years - a.experience_years);
    } else if (params.sort === "recent") {
        data.sort((a, b) => Number(b.id) - Number(a.id));
    } else {
        data.sort((a, b) => b.total_compensation - a.total_compensation);
    }

    return (
        <>
            <JsonLd />

            <main className="min-h-screen bg-[#F7F7F7] font-[Inter,system-ui,sans-serif]">
                <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
                    <section className="mb-10">
                        <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight text-[#222222]">
                            Software Engineer Salaries
                        </h1>

                        <p className="mt-3 text-[16px] leading-[1.6] text-[#717171] max-w-2xl">
                            Compare compensation, levels and company-wise salary trends.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-3 gap-4 mb-10">
                        <div className="bg-[#525252] rounded-xl p-5 border border-[#222222] shadow-sm transition-shadow hover:shadow-md">
                            <p className="text-[13px] font-medium uppercase tracking-wide text-[#d6d6d6]">
                                Salary Records
                            </p>
                            <h2 className="!text-[#e2e2e2] mt-1 text-3xl font-bold">
                                {cleanedSalaries.length}
                            </h2>
                        </div>

                        <div className="bg-[#525252] rounded-xl p-5 border border-[#222222] shadow-sm transition-shadow hover:shadow-md">
                            <p className="text-[13px] font-medium uppercase tracking-wide text-[#d6d6d6]">
                                Companies
                            </p>
                            <h2 className="!text-[#e2e2e2] mt-1 text-3xl font-bold">12+</h2>
                        </div>

                        <div className="bg-[#525252] rounded-xl p-5 border border-[#222222] shadow-sm transition-shadow hover:shadow-md">
                            <p className="text-[13px] font-medium uppercase tracking-wide text-[#d6d6d6]">
                                Levels
                            </p>
                            <h2 className="!text-[#e2e2e2] mt-1 text-3xl font-bold">
                                L3 - Principal
                            </h2>
                        </div>
                    </div>

                    <div className="mb-6 flex flex-col gap-4 rounded-xl border border-[#EBEBEB] bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
                        <FilterBar />
                        <SortSelect />
                    </div>

                    {data.length > 0 ? (
                        <SalaryPageClient data={data} />
                    ) : (
                        <div className="bg-white p-10 rounded-xl border border-[#EBEBEB] text-center">
                            <h2 className="text-[22px] font-semibold text-[#222222]">
                                No records found
                            </h2>
                            <p className="mt-2 text-[16px] text-[#717171]">
                                Try removing filters.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}