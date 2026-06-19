"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
    const router = useRouter();
    const searchParams = useSearchParams();

    function changeSort(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;

        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set("sort", value);
        } else {
            params.delete("sort");
        }

        router.push(`/salaries?${params.toString()}`);
    }

    return (
        <select
            defaultValue={searchParams.get("sort") || ""}
            onChange={changeSort}
            className="
            border
            border-[#EBEBEB]
            rounded-lg
            px-4
            py-3
            text-[14px]
            font-medium
            text-[#222222]
            bg-white
            outline-none
            cursor-pointer
            hover:border-[#FF5A5F]
            focus:ring-2
            focus:ring-[#FF5A5F]/30
            focus:border-[#FF5A5F]
            transition
            "
        >
            <option value="">Sort By</option>

            <option value="total">Total Compensation</option>

            <option value="base">Base Salary</option>

            <option value="experience">Experience</option>

            <option value="recent">Recently Added</option>
        </select>
    );
}