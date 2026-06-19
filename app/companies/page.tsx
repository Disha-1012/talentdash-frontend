import Link from "next/link";
import { companies } from "@/lib/company-data";

export const metadata = {
    title: "Companies | TalentDash",
    description: "Browse company salary insights",
};

export default function CompaniesPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F7] py-10 md:py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight text-[#222222] mb-3">
                    Companies
                </h1>

                <p className="text-[16px] leading-[1.6] text-[#717171] mb-10 max-w-2xl">
                    Explore compensation trends and engineering salaries.
                </p>

                <div
                    className="
                grid
                md:grid-cols-3
                gap-5
                "
                >
                    {companies.map((company) => (
                        <Link
                            key={company.slug}
                            href={`/companies/${company.slug}`}
                            className="
                            group
                            bg-white
                            rounded-xl
                            p-6
                            border
                            border-[#EBEBEB]
                            shadow-sm
hover:shadow-md
hover:border-[#FF5A5F]
transition-all
duration-200
                            "
                        >
                            <h2
                                className="
                                text-[22px]
                                font-semibold
                                text-[#222222]
                                mb-2
                                "
                            >
                                {company.name}
                            </h2>

                            <p className="text-[14px] text-[#484848]">{company.industry}</p>

                            <p className="text-[14px] text-[#717171] mt-1">
                                HQ: {" "}
                                {company.hq}
                            </p>

                            <span
                                className="
                                inline-block
                                mt-4
                                px-4
                                py-2
                                rounded-lg
                                bg-[#FF5A5F]
                                text-white
                                text-[14px]
                                font-semibold
                                shadow-sm
                                group-hover:opacity-90
                                transition-opacity
                                "
                            >
                                View Salaries →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}