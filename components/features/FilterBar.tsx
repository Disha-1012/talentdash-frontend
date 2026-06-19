"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useState, useEffect, useCallback } from "react";

import { LEVELS } from "@/types/salary";

export default function FilterBar() {
    const router = useRouter();

    const searchParams = useSearchParams();

    const [company, setCompany] = useState(searchParams.get("company") || "");

    const [role, setRole] = useState(searchParams.get("role") || "");

    const [location, setLocation] = useState(searchParams.get("location") || "");

    const [currency, setCurrency] = useState(searchParams.get("currency") || "INR");

    const [level, setLevel] = useState<string[]>(
        searchParams.get("level") ? searchParams.get("level")!.split(",") : []
    );

    const updateFilters = useCallback(
        (newValues: Record<string, string>) => {
            const params = new URLSearchParams(searchParams.toString());

            Object.entries(newValues).forEach(([key, value]) => {
                if (value) {
                    params.set(key, value);
                } else {
                    params.delete(key);
                }
            });

            router.push(`/salaries?${params.toString()}`);
        },
        [router, searchParams]
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            updateFilters({ company });
        }, 300);

        return () => clearTimeout(timer);
    }, [company, updateFilters]);

    function changeLevel(item: string) {
        let updated: string[];

        if (level.includes(item)) {
            updated = level.filter((x) => x !== item);
        } else {
            updated = [...level, item];
        }

        setLevel(updated);

        updateFilters({ level: updated.join(",") });
    }

    return (
        <div
            className="
w-full
space-y-5
"
        >
            <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Search company..."
                className="
w-full
rounded-lg
border
border-[#EBEBEB]
bg-white
px-4
py-3
text-[16px]
text-[#222222]
placeholder:text-[#717171]
outline-none
transition-shadow
focus:ring-2
focus:ring-[#FF5A5F]/30
focus:border-[#FF5A5F]
"
            />

            <div
                className="
flex
gap-3
flex-wrap
items-center
"
            >
                <select
                    value={role}
                    onChange={(e) => {
                        setRole(e.target.value);

                        updateFilters({ role: e.target.value });
                    }}
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
hover:border-[#FF5A5F]
focus:outline-none
focus:ring-2
focus:ring-[#FF5A5F]/30
transition"
                >
                    <option value="">Role</option>

                    <option value="Software Engineer">Software Engineer</option>

                    <option value="Backend Engineer">Backend Engineer</option>

                    <option value="Frontend Engineer">Frontend Engineer</option>

                    <option value="Product Manager">Product Manager</option>
                </select>

                <select
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);

                        updateFilters({ location: e.target.value });
                    }}
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
hover:border-[#FF5A5F]
focus:outline-none
focus:ring-2
focus:ring-[#FF5A5F]/30
transition
"
                >
                    <option value="">Location</option>

                    <option value="Bengaluru">Bengaluru</option>

                    <option value="Mumbai">Mumbai</option>

                    <option value="Hyderabad">Hyderabad</option>

                    <option value="Pune">Pune</option>

                    <option value="Noida">Noida</option>
                </select>

                <div className="flex gap-2 rounded-lg border border-[#EBEBEB] p-1 bg-[#F7F7F7]">
                    <button
                        onClick={() => {
                            setCurrency("INR");

                            updateFilters({ currency: "INR" });
                        }}
                        className={`
rounded-md
px-4
py-2
text-[14px]
font-semibold
transition-colors
${currency === "INR"
                                ? "bg-[#FF5A5F] text-white shadow-sm"
                                : "bg-[#EBEBEB] text-[#484848]"
                            }
`}
                    >
                        ₹ INR
                    </button>

                    <button
                        onClick={() => {
                            setCurrency("USD");

                            updateFilters({ currency: "USD" });
                        }}
                        className={`
rounded-md
px-4
py-2
text-[14px]
font-semibold
transition-colors
${currency === "USD"
                                ? "bg-[#FF5A5F] text-white shadow-sm"
                                : "bg-[#EBEBEB] text-[#484848]"
                            }
`}
                    >
                        $ USD
                    </button>
                </div>
            </div>

            <div>
                <p
                    className="
text-[13px]
font-medium
uppercase
tracking-wide
text-[#717171]
mb-2
"
                >
                    Levels
                </p>

                <div
                    className="
flex
flex-wrap
gap-2
"
                >
                    {LEVELS.map((levelItem) => (
                        <label
                            key={levelItem}
                            className="
flex
items-center
gap-1.5
rounded-full
border
border-[#EBEBEB]
bg-white
px-3
py-1.5
text-[13px]
font-medium
text-[#484848]
cursor-pointer
hover:border-[#FF5A5F]
has-[:checked]:bg-[#FF5A5F]/10
has-[:checked]:border-[#FF5A5F]
has-[:checked]:text-[#FF5A5F]
transition-colors
"
                        >
                            <input
                                type="checkbox"
                                checked={level.includes(levelItem)}
                                onChange={() => changeLevel(levelItem)}
                                className="accent-[#FF5A5F]"
                            />{" "}
                            {levelItem}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}