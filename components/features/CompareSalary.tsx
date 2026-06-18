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



        if (
            currentS1 !== a ||
            currentS2 !== b
        ) {

            router.replace(
                `/compare?s1=${a}&s2=${b}`
            );

        }


    }, [
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
        x: number,
        y: number
    ) {

        return x - y;

    }






    function renderDelta(
        value: number
    ) {


        return (

            <span

                className={

                    `
                    font-semibold
                    ${value >= 0
                        ?
                        "text-green-600"
                        :
                        "text-red-600"
                    }
                    `
                }

            >


                {
                    value >= 0
                        ?
                        "+"
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
            numeric: false
        },


        {
            label: "Role",
            first: first.role,
            second: second.role,
            numeric: false
        },


        {
            label: "Level",
            first: first.level,
            second: second.level,
            numeric: false
        },


        {
            label: "Location",
            first: first.location,
            second: second.location,
            numeric: false
        },


        {
            label: "Experience",
            first: `${first.experience_years} yrs`,
            second: `${second.experience_years} yrs`,
            numeric: false
        },


        {
            label: "Base",
            first: first.base_salary,
            second: second.base_salary,
            numeric: true
        },


        {
            label: "Bonus",
            first: first.bonus ?? 0,
            second: second.bonus ?? 0,
            numeric: true
        },


        {
            label: "Stock",
            first: first.stock ?? 0,
            second: second.stock ?? 0,
            numeric: true
        },


        {
            label: "Total Comp",
            first: first.total_compensation,
            second: second.total_compensation,
            numeric: true
        }

    ];








    return (

        <div

            className="
            bg-white
            rounded-2xl
            shadow-sm
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
                gap-5
                mb-8
                "

            >



                <div>


                    <label
                        className="
                        block
                        text-sm
                        font-semibold
                        mb-2
                        "
                    >

                        Compare Record A

                    </label>



                    <select


                        value={a}


                        onChange={
                            e =>
                                setA(
                                    e.target.value
                                )
                        }


                        className="
                        w-full
                        border
                        rounded-xl
                        p-3
                        focus:outline-none
                        "

                    >


                        {
                            cleanedSalaries.map(r => (


                                <option

                                    key={r.id}

                                    value={r.id}

                                >

                                    {r.company} -
                                    {r.role} -
                                    {r.level}


                                </option>


                            ))
                        }


                    </select>


                </div>







                <div>


                    <label
                        className="
                        block
                        text-sm
                        font-semibold
                        mb-2
                        "
                    >

                        Compare Record B

                    </label>



                    <select


                        value={b}


                        onChange={
                            e =>
                                setB(
                                    e.target.value
                                )
                        }


                        className="
                        w-full
                        border
                        rounded-xl
                        p-3
                        focus:outline-none
                        "

                    >


                        {
                            cleanedSalaries.map(r => (


                                <option

                                    key={r.id}

                                    value={r.id}

                                >

                                    {r.company} -
                                    {r.role} -
                                    {r.level}


                                </option>


                            ))
                        }


                    </select>


                </div>



            </div>









            {/* Comparison Table */}



            <div

                className="
                overflow-x-auto
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
                bg-gray-50
                "

                    >


                        <tr>


                            <th className="p-4">
                                Field
                            </th>


                            <th className="p-4">
                                Record A
                            </th>


                            <th className="p-4">
                                Record B
                            </th>


                            <th className="p-4">
                                Delta
                            </th>


                        </tr>


                    </thead>





                    <tbody>


                        {
                            rows.map(
                                row => (

                                    <tr

                                        key={row.label}

                                        className="
            border-t
            "

                                    >


                                        <td
                                            className="
                p-4
                font-semibold
                "
                                        >

                                            {row.label}

                                        </td>



                                        <td className="p-4">


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




                                        <td className="p-4">


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




                                        <td className="p-4">


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
                mt-8
                flex
                justify-center
                "

            >


                {

                    first.total_compensation >=
                        second.total_compensation

                        ?


                        <div

                            className="
                    bg-[#0369A1]
                    text-white
                    px-5
                    py-2
                    rounded-full
                    font-semibold
                    "

                        >

                            {first.company}
                            {" "}
                            Higher TC


                        </div>


                        :


                        <div

                            className="
                    bg-[#0369A1]
                    text-white
                    px-5
                    py-2
                    rounded-full
                    font-semibold
                    "

                        >

                            {second.company}
                            {" "}
                            Higher TC


                        </div>


                }


            </div>




        </div>


    )


}