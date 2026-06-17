import { Level } from "@/types/salary";


interface BadgeProps {
    level: Level;
}


const levelColors: Record<Level, string> = {

    "L3":
        "bg-slate-200 text-slate-800",

    "SDE-I":
        "bg-slate-200 text-slate-800",


    "L4":
        "bg-blue-200 text-blue-800",

    "SDE-II":
        "bg-blue-200 text-blue-800",


    "L5":
        "bg-indigo-200 text-indigo-800",

    "SDE-III":
        "bg-indigo-200 text-indigo-800",


    "L6":
        "bg-purple-200 text-purple-900",

    "Staff":
        "bg-purple-200 text-purple-900",


    "Principal":
        "bg-purple-900 text-white"

};


export default function Badge({
    level
}: BadgeProps) {


    return (

        <span
            className={`
px-3 py-1 rounded-full text-xs font-semibold
${levelColors[level]}
`}
        >

            {level}

        </span>

    )

}