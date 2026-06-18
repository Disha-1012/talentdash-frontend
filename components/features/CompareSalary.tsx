"use client";


import {
    useRouter,
    useSearchParams
}
from "next/navigation";


import {
    useEffect,
    useState
}
from "react";


import {
    cleanedSalaries
}
from "@/lib/mock-data";


import {
    formatCurrency
}
from "@/lib/format";





export default function CompareSalary() {


    const router = useRouter();

    const params = useSearchParams();



    const [a, setA] = useState(
        params.get("s1") ||
        cleanedSalaries[0].id
    );


    const [b, setB] = useState(
        params.get("s2") ||
        cleanedSalaries[1].id
    );




    useEffect(() => {

        const currentS1 =
            params.get("s1");


        const currentS2 =
            params.get("s2");


        if(
            currentS1 !== a ||
            currentS2 !== b
        ){

            router.replace(
                `/compare?s1=${a}&s2=${b}`
            );

        }


    },[
        a,
        b,
        router,
        params
    ]);





    const first =
        cleanedSalaries.find(
            x => x.id === a
        )!;



    const second =
        cleanedSalaries.find(
            x => x.id === b
        )!;



    function delta(
        x:number,
        y:number
    ){

        return x-y;

    }





    function renderDelta(
        value:number
    ){

        return (

            <span

                className={`
                font-semibold
                ${
                    value >= 0
                    ?
                    "text-green-600"
                    :
                    "text-red-600"
                }
                `}

            >

                {
                    value >=0
                    ? "+"
                    :
                    ""
                }


                {
                    formatCurrency(
                        value,
                        "INR"
                    )
                }

            </span>

        )

    }





    type ComparisonRow = {

        label:string;
        first:string|number;
        second:string|number;
        numeric:boolean;

    };




    const rows:ComparisonRow[]=[

        {
            label:"Company",
            first:first.company,
            second:second.company,
            numeric:false
        },


        {
            label:"Role",
            first:first.role,
            second:second.role,
            numeric:false
        },


        {
            label:"Level",
            first:first.level,
            second:second.level,
            numeric:false
        },


        {
            label:"Location",
            first:first.location,
            second:second.location,
            numeric:false
        },


        {
            label:"Experience",
            first:`${first.experience_years} yrs`,
            second:`${second.experience_years} yrs`,
            numeric:false
        },


        {
            label:"Base Salary",
            first:first.base_salary,
            second:second.base_salary,
            numeric:true
        },


        {
            label:"Bonus",
            first:first.bonus ?? 0,
            second:second.bonus ?? 0,
            numeric:true
        },


        {
            label:"Stock",
            first:first.stock ?? 0,
            second:second.stock ?? 0,
            numeric:true
        },


        {
            label:"Total Compensation",
            first:first.total_compensation,
            second:second.total_compensation,
            numeric:true
        }


    ];






    return (


        <div

            className="
            bg-white
            rounded-3xl
            shadow-md
            border
            border-gray-200
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

                    {
                        title:"Company A",
                        value:a,
                        set:setA
                    },

                    {
                        title:"Company B",
                        value:b,
                        set:setB
                    }

                ].map(item=>(


                    <div

                        key={item.title}

                        className="
                        bg-gray-50
                        rounded-2xl
                        p-5
                        border
                        "

                    >


                        <label

                            className="
                            block
                            font-semibold
                            mb-3
                            text-gray-700
                            "

                        >

                            {item.title}

                        </label>



                        <select

                            value={item.value}

                            onChange={
                                e =>
                                item.set(
                                    e.target.value
                                )
                            }


                            className="
                            w-full
                            rounded-xl
                            border
                            px-4
                            py-3
                            bg-white
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "

                        >


                            {
                                cleanedSalaries.map(r=>(


                                    <option

                                        key={r.id}

                                        value={r.id}

                                    >

                                        {r.company}
                                        {" - "}
                                        {r.level}

                                    </option>


                                ))
                            }


                        </select>



                    </div>


                ))}


            </div>







            {/* Comparison Table */}



            <div

                className="
                overflow-x-auto
                rounded-2xl
                border
                "

            >


                <table

                    className="
                    w-full
                    text-left
                    "

                >



                    <thead

                        className="
                        bg-gray-100
                        "

                    >


                        <tr>


                            <th className="p-5">
                                Metric
                            </th>


                            <th className="p-5">
                                Company A
                            </th>


                            <th className="p-5">
                                Company B
                            </th>


                            <th className="p-5">
                                Difference
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                    {
                        rows.map(row=>(


                        <tr

                            key={row.label}

                            className="
                            border-t
                            hover:bg-gray-50
                            "

                        >


                            <td className="
                            p-5
                            font-semibold
                            "
                            >

                                {row.label}

                            </td>



                            <td className="p-5">

                                {
                                    row.numeric
                                    ?
                                    formatCurrency(
                                        Number(row.first),
                                        "INR"
                                    )
                                    :
                                    row.first
                                }

                            </td>



                            <td className="p-5">

                                {
                                    row.numeric
                                    ?
                                    formatCurrency(
                                        Number(row.second),
                                        "INR"
                                    )
                                    :
                                    row.second
                                }

                            </td>




                            <td className="p-5">

                                {
                                    row.numeric
                                    ?
                                    renderDelta(
                                        delta(
                                            Number(row.first),
                                            Number(row.second)
                                        )
                                    )
                                    :
                                    "—"
                                }

                            </td>



                        </tr>


                        ))
                    }


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
                    bg-blue-600
                    text-white
                    px-6
                    py-3
                    rounded-full
                    font-semibold
                    shadow
                    "

                >

                    {
                        first.total_compensation >=
                        second.total_compensation
                        ?
                        `${first.company} has higher TC`
                        :
                        `${second.company} has higher TC`
                    }


                </div>


            </div>




        </div>


    );

}