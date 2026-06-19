import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { companies } from "@/lib/company-data";

import { cleanedSalaries } from "@/lib/mock-data";

import SalaryTable from "@/components/features/SalaryTable";

import { Level, LEVELS } from "@/types/salary";

import { formatCurrency } from "@/lib/format";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static company pages

export function generateStaticParams() {
    return companies.map((company) => ({
        slug: company.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const company = companies.find((c) => c.slug === slug);

    return {
        title: `${company?.name} Salary Data | TalentDash`,

        description: `Explore ${company?.name} software engineer salaries, compensation trends and salary records.`,

        alternates: {
            canonical: `https://talentdash.com/companies/${slug}`,
        },

        openGraph: {
            title: `${company?.name} Salaries | TalentDash`,

            description: `View ${company?.name} salary insights and compensation data.`,

            url: `https://talentdash.com/companies/${slug}`,
        },
    };
}

// Calculate median compensation

function median(values: number[]) {
    const sorted = [...values].sort((a, b) => a - b);

    return sorted[Math.floor(sorted.length / 2)];
}

function getRange(values: number[]) {
    if (values.length === 0) {
        return {
            min: 0,
            max: 0,
        };
    }

    return {
        min: Math.min(...values),

        max: Math.max(...values),
    };
}

// Calculate level distribution

function getDistribution(records: { level: Level }[]) {
    const result: Record<Level, number> = {} as Record<Level, number>;

    records.forEach((item) => {
        if (!result[item.level]) {
            result[item.level] = 0;
        }

        result[item.level]++;
    });

    return result;
}

export default async function CompanyPage({ params }: Props) {
    const { slug } = await params;

    const company = companies.find((c) => c.slug === slug);

    if (!company) {
        notFound();
    }

    const records = cleanedSalaries.filter(
        (item) => item.company.toLowerCase() === company.name.toLowerCase()
    );

    const compensationValues = records.map((r) => r.total_compensation);

    const medianComp = records.length > 0 ? median(compensationValues) : 0;

    const range = getRange(compensationValues);

    const distribution = getDistribution(records);

    const firstRecordId = records.length > 0 ? records[0].id : "";

    return (
        <main className="min-h-screen bg-[#F7F7F7] py-10 md:py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Company Header */}

                <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight text-[#222222] mb-3">
                    {company.name}
                </h1>

                <p className="text-[16px] leading-[1.6] text-[#717171]">
                    Explore compensation trends and engineering salaries.
                </p>

                <div className="mt-2">
                    <Link
                        href={`/compare?s1=${firstRecordId}`}
                        className="
    inline-block
    mt-4
    bg-[#FF5A5F]
    text-white
    px-5
    py-3
    rounded-lg
    text-[14px]
    font-semibold
    shadow-sm
    hover:opacity-90
    transition-opacity
    "
                    >
                        Compare {company.name}
                    </Link>
                </div>

                <div
                    className="
bg-white
rounded-xl
border
border-[#EBEBEB]
shadow-sm
p-6
mt-8
grid
md:grid-cols-6
gap-6
"
                >
                    <div>
                        <p className="text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                            Industry
                        </p>

                        <b className="block mt-1 text-[16px] font-semibold text-[#222222]">
                            {company.industry}
                        </b>
                    </div>

                    <div>
                        <p className="text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                            Founded
                        </p>

                        <b className="block mt-1 text-[16px] font-semibold text-[#222222]">
                            {company.founded}
                        </b>
                    </div>

                    <div>
                        <p className="text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                            Employees
                        </p>

                        <b className="block mt-1 text-[16px] font-semibold text-[#222222]">
                            {company.headcount}
                        </b>
                    </div>

                    <div>
                        <p className="text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                            HQ
                        </p>

                        <b className="block mt-1 text-[16px] font-semibold text-[#222222]">
                            {company.hq}
                        </b>
                    </div>

                    <div>
                        <p className="text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                            Median Compensation
                        </p>

                        <b className="block mt-1 text-xl font-bold text-[#0369A1]">

                            {formatCurrency(medianComp, "INR")}
                        </b>
                    </div>

                    <div>
                        <p className="text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                            TC Range
                        </p>

                        <b className="block mt-1 text-[16px] font-semibold text-[#222222]">
                            {formatCurrency(range.min, "INR")}
                            {" - "}
                            {formatCurrency(range.max, "INR")}
                        </b>
                    </div>

                    <div>
                        <p className="text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                            Records
                        </p>

                        <b className="block mt-1 text-[16px] font-semibold text-[#222222]">
                            {records.length}
                        </b>
                    </div>
                </div>

                {/* Level Distribution */}

                <section
                    className="
            bg-white
            border
            border-[#EBEBEB]
            shadow-sm
            mt-6
            p-6
            rounded-xl
            "
                >
                    <h2
                        className="
                text-[22px]
                font-semibold
                text-[#222222]
                mb-5
                "
                    >
                        Level Distribution
                    </h2>

                    {LEVELS.map((level) => (
                        <div key={level} className="mb-4 last:mb-0">
                            <div className="flex justify-between text-[14px] mb-1.5">
                                <span className="font-medium text-[#484848]">{level}</span>

                                <span className="text-[#717171]">{distribution[level] || 0}</span>
                            </div>

                            <div
                                className="
bg-[#EBEBEB]
h-2.5
rounded-full
overflow-hidden
"
                            >
                                <div
                                    className="
bg-[#0369A1]
h-2.5
rounded-full
transition-all
duration-500
"
                                    style={{
                                        width:
                                            records.length > 0
                                                ? `${((distribution[level] || 0) / records.length) * 100}%`
                                                : "0%",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </section>

                <section className="mt-6">
                    <h2 className="text-[28px] font-bold text-[#222222] mb-4">
                        Salary Records
                    </h2>

                    {records.length > 0 ? (
                        <SalaryTable data={records} />
                    ) : (
                        <div
                            className="
bg-white
border
border-[#EBEBEB]
p-8
rounded-xl
text-center
text-[#717171]
"
                        >
                            No salary records found.
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}