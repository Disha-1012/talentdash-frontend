import { Level } from "@/types/salary";


interface BadgeProps {
    level: Level;
}


const levelColors: Record<Level, string> = {


    "L3":
        "bg-slate-100 text-slate-700 border border-slate-300",


    "SDE-I":
        "bg-slate-100 text-slate-700 border border-slate-300",



    "L4":
        "bg-blue-100 text-blue-700 border border-blue-300",


    "SDE-II":
        "bg-blue-100 text-blue-700 border border-blue-300",



    "L5":
        "bg-indigo-100 text-indigo-700 border border-indigo-300",


    "SDE-III":
        "bg-indigo-100 text-indigo-700 border border-indigo-300",



    "L6":
        "bg-purple-100 text-purple-700 border border-purple-300",


    "Staff":
        "bg-purple-100 text-purple-700 border border-purple-300",



    "Principal":
        "bg-[#172554] text-white"

};


export default function Badge({
    level
}: BadgeProps) {


    return (

        <span
            className={`
px-3
py-1
rounded-full
text-xs
font-semibold
inline-flex
items-center
${levelColors[level]}
`}
        >

            {level}

        </span>

    )

}