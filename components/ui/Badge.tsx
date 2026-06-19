import { Level } from "@/types/salary";

interface BadgeProps {
    level: Level;
}

const levelColors: Record<Level, string> = {
    L3: "bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1]",

    "SDE-I": "bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1]",

    L4: "bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]",

    "SDE-II": "bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]",

    L5: "bg-[#E0E7FF] text-[#4338CA] border border-[#C7D2FE]",

    "SDE-III": "bg-[#E0E7FF] text-[#4338CA] border border-[#C7D2FE]",

    L6: "bg-[#F3E8FF] text-[#7E22CE] border border-[#E9D5FF]",

    Staff: "bg-[#F3E8FF] text-[#7E22CE] border border-[#E9D5FF]",

    Principal: "bg-[#172554] text-white border border-[#172554]",
};

export default function Badge({ level }: BadgeProps) {
    return (
        <span
            className={`
px-3
py-1
rounded-full
text-[12px]
font-semibold
tracking-wide
inline-flex
items-center
whitespace-nowrap
${levelColors[level]}
`}
        >
            {level}
        </span>
    );
}