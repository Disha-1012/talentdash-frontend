"use client";


import { useState } from "react";

import {
    companies
}
    from "@/lib/company-data";


import {
    salaries
}
    from "@/lib/mock-data";



function median(
    values: number[]
) {


    const sorted =
        [
            ...values

        ]
            .sort(
                (a, b) => a - b
            );



    return sorted[
        Math.floor(
            sorted.length / 2
        )

    ];


}





export default function CompareSalary() {



    const [company1, setCompany1]
        =
        useState(
            companies[0].slug
        );



    const [company2, setCompany2]
        =
        useState(
            companies[1].slug
        );





    const firstCompany =
        companies.find(
            c =>
                c.slug === company1
        );



    const secondCompany =
        companies.find(
            c =>
                c.slug === company2
        );





    const firstRecords =
        salaries.filter(

            item =>

                item.company
                    .toLowerCase()
                ===

                firstCompany?.name
                    .toLowerCase()

        );





    const secondRecords =
        salaries.filter(

            item =>

                item.company
                    .toLowerCase()
                ===

                secondCompany?.name
                    .toLowerCase()

        );





    const firstSalary =
        median(

            firstRecords.map(
                r =>
                    r.total_compensation
            )

        );




    const secondSalary =
        median(

            secondRecords.map(
                r =>
                    r.total_compensation
            )

        );






    const difference =
        Math.abs(
            firstSalary - secondSalary
        );




    const percentage =

        secondSalary !== 0 ?

            (
                difference /
                secondSalary
                *
                100
            ).toFixed(1)

            :

            0;





    return (

        <div

            className="
bg-white
rounded-xl
p-8
"

        >





            <div

                className="
grid
md:grid-cols-2
gap-5
mb-8
"

            >



                <select

                    className="
border
p-3
rounded-lg
"

                    value={company1}

                    onChange={
                        e =>
                            setCompany1(
                                e.target.value
                            )
                    }

                >


                    {
                        companies.map(c => (

                            <option

                                key={c.slug}

                                value={c.slug}

                            >

                                {c.name}

                            </option>

                        ))
                    }


                </select>







                <select

                    className="
border
p-3
rounded-lg
"

                    value={company2}

                    onChange={
                        e =>
                            setCompany2(
                                e.target.value
                            )
                    }

                >


                    {
                        companies.map(c => (

                            <option

                                key={c.slug}

                                value={c.slug}

                            >

                                {c.name}

                            </option>

                        ))
                    }


                </select>






            </div>








            <div

                className="
grid
md:grid-cols-3
gap-5
"

            >






                <div

                    className="
border
rounded-xl
p-5
"

                >


                    <p>
                        {firstCompany?.name}
                    </p>


                    <h2

                        className="
text-3xl
font-bold
"

                    >

                        ₹
                        {firstSalary.toLocaleString("en-IN")}

                    </h2>


                    <p>
                        Median Compensation
                    </p>


                </div>







                <div

                    className="
border
rounded-xl
p-5
"

                >


                    <p>
                        {secondCompany?.name}
                    </p>


                    <h2

                        className="
text-3xl
font-bold
"

                    >

                        ₹
                        {secondSalary.toLocaleString("en-IN")}

                    </h2>


                    <p>
                        Median Compensation
                    </p>


                </div>







                <div

                    className="
border
rounded-xl
p-5
"

                >


                    <p>
                        Difference
                    </p>



                    <h2

                        className="
text-3xl
font-bold
text-blue-700
"

                    >

                        ₹
                        {difference.toLocaleString("en-IN")}

                    </h2>



                    <p>

                        {percentage}% difference

                    </p>



                </div>






            </div>






        </div>


    )


}