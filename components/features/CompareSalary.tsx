"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

import { cleanedSalaries } from "@/lib/mock-data";

import { formatCurrency } from "@/lib/format";

export default function CompareSalary() {
    const router = useRouter();
    const params = useSearchParams();

    const [a, setA] = useState(params.get("s1") || cleanedSalaries[0].id);

    const [b, setB] = useState(params.get("s2") || cleanedSalaries[1].id);

    useEffect(() => {
        const currentS1 = params.get("s1");

        const currentS2 = params.get("s2");

        if (currentS1 !== a || currentS2 !== b) {
            router.replace(`/compare?s1=${a}&s2=${b}`);
        }
    }, [a, b, router, params]);

    const first = cleanedSalaries.find((x) => x.id === a)!;

    const second = cleanedSalaries.find((x) => x.id === b)!;

    function delta(x: number, y: number) {
        return x - y;
    }

    function renderDelta(value: number) {
        return (
            <span
                className={`
                font-semibold
                ${value >= 0 ? "text-[#008A05]" : "text-[#D93025]"}
                `}
            >
                {value >= 0 ? "+" : ""}

                {formatCurrency(value, "INR")}
            </span>
        );
    }

    type ComparisonRow = {
        label: string;
        first: string | number;
        second: string | number;
        numeric: boolean;
    };

    const rows: ComparisonRow[] = [
        {
            label: "Company",
            first: first.company,
            second: second.company,
            numeric: false,
        },

        {
            label: "Role",
            first: first.role,
            second: second.role,
            numeric: false,
        },

        {
            label: "Level",
            first: first.level,
            second: second.level,
            numeric: false,
        },

        {
            label: "Location",
            first: first.location,
            second: second.location,
            numeric: false,
        },

        {
            label: "Experience",
            first: `${first.experience_years} yrs`,
            second: `${second.experience_years} yrs`,
            numeric: false,
        },

        {
            label: "Base Salary",
            first: first.base_salary,
            second: second.base_salary,
            numeric: true,
        },

        {
            label: "Bonus",
            first: first.bonus ?? 0,
            second: second.bonus ?? 0,
            numeric: true,
        },

        {
            label: "Stock",
            first: first.stock ?? 0,
            second: second.stock ?? 0,
            numeric: true,
        },

        {
            label: "Total Compensation",
            first: first.total_compensation,
            second: second.total_compensation,
            numeric: true,
        },
    ];

    return (
        <div
            className="
            bg-white
            rounded-2xl
            shadow-sm
            border
            border-[#EBEBEB]
            p-6
            md:p-8
            "
        >
            {/* Selectors */}

            <div
                className="
                grid
                md:grid-cols-2
                gap-6
                mb-10
                "
            >
                {[
                    { title: "Company A", value: a, set: setA },

                    { title: "Company B", value: b, set: setB },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="
                        bg-[#525252]
                        rounded-xl
                        p-5
                        border
                        border-[#222222]
                        "
                    >
                        <label
                            className="
                            block
                            text-[13px]
                            font-medium
                            uppercase
                            tracking-wide
                            mb-3
                            text-[#d6d6d6]
                            "
                        >
                            {item.title}
                        </label>

                        <select
                            value={item.value}
                            onChange={(e) => item.set(e.target.value)}
                            className="
                            w-full
                            rounded-lg
                            border
                            border-[#EBEBEB]
                            px-4
                            py-3
                            text-[16px]
                            text-[#222222]
                            bg-white
                            outline-none
                            transition-shadow
                            focus:ring-2
                            focus:ring-[#FF5A5F]/30
                            focus:border-[#FF5A5F]
                            "
                        >
                            {cleanedSalaries.map((r) => (
                                <option key={r.id} value={r.id}>
                                    {r.company}
                                    {" - "}
                                    {r.level}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            {/* Comparison Table */}

            <div
                className="
                overflow-x-auto
                rounded-xl
                border
                border-[#EBEBEB]
                "
            >
                <table
                    className="
                    w-full
                    text-left
                    border-collapse
                    "
                >
                    <thead
                        className="
                        bg-[#F7F7F7]
                        border-b
                        border-[#EBEBEB]
                        "
                    >
                        <tr>
                            <th className="p-5 text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                                Metric
                            </th>

                            <th className="p-5 text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                                Company A
                            </th>

                            <th className="p-5 text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                                Company B
                            </th>

                            <th className="p-5 text-[13px] font-medium uppercase tracking-wide text-[#717171]">
                                Difference
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row) => (
                            <tr
                                key={row.label}
                                className="
                            border-t
                            border-[#EBEBEB]
                            hover:bg-[#F2F2F2]
                            transition-colors
                            "
                            >
                                <td
                                    className="
                            p-5
                            text-[16px]
                            font-semibold
                            text-[#222222]
                            "
                                >
                                    {row.label}
                                </td>

                                <td className="p-5 text-[16px] text-[#484848]">
                                    {row.numeric
                                        ? formatCurrency(Number(row.first), "INR")
                                        : row.first}
                                </td>

                                <td className="p-5 text-[16px] text-[#484848]">
                                    {row.numeric
                                        ? formatCurrency(Number(row.second), "INR")
                                        : row.second}
                                </td>

                                <td className="p-5 text-[16px]">
                                    {row.numeric
                                        ? renderDelta(
                                            delta(Number(row.first), Number(row.second))
                                        )
                                        : <span className="text-[#717171]">—</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Winner */}

            <div
                className="
                mt-10
                flex
                justify-center
                "
            >
                <div
                    className="
                    bg-[#0369A1]
                    text-white
                    px-6
                    py-3
                    rounded-full
                    text-[14px]
                    font-semibold
                    shadow-sm
                    "
                >
                    {first.total_compensation >= second.total_compensation
                        ? `${first.company} has higher TC`
                        : `${second.company} has higher TC`}
                </div>
            </div>
        </div>
    );
}