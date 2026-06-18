import Link from "next/link";
import type { Metadata } from "next";
import {
    notFound
} from "next/navigation";


import {
    companies
} from "@/lib/company-data";


import {
    cleanedSalaries
}
    from "@/lib/mock-data";


import SalaryTable
    from "@/components/features/SalaryTable";

import {
    Level,
    LEVELS
}
    from "@/types/salary";

import {
    formatCurrency
}
    from "@/lib/format";



interface Props {

    params: Promise<{

        slug: string;

    }>;

}




// Generate static company pages

export function generateStaticParams() {


    return companies.map(company => ({

        slug: company.slug

    }));


}

export async function generateMetadata(
    {
        params
    }: Props
): Promise<Metadata> {


    const {
        slug
    }
        =
        await params;



    const company =
        companies.find(
            c =>
                c.slug === slug
        );



    return {


        title:
            `${company?.name} Salary Data | TalentDash`,



        description:
            `Explore ${company?.name} software engineer salaries, compensation trends and salary records.`,



        alternates: {


            canonical:
                `https://talentdash.com/companies/${slug}`


        },



        openGraph: {


            title:
                `${company?.name} Salaries | TalentDash`,


            description:
                `View ${company?.name} salary insights and compensation data.`,


            url:
                `https://talentdash.com/companies/${slug}`


        }


    };


}



// Calculate median compensation

function median(
    values: number[]
) {


    const sorted = [

        ...values

    ].sort(

        (a, b) => a - b

    );



    return sorted[

        Math.floor(
            sorted.length / 2
        )

    ];


}

function getRange(
    values: number[]
) {

    if (values.length === 0) {
        return {
            min: 0,
            max: 0
        };
    }


    return {

        min: Math.min(...values),

        max: Math.max(...values)

    };

}



// Calculate level distribution

function getDistribution(
    records: {
        level: Level
    }[]
) {


    const result:
        Record<Level, number> =
        {} as Record<Level, number>;



    records.forEach(item => {


        if (!result[item.level]) {

            result[item.level] = 0;

        }



        result[item.level]++;


    });



    return result;


}




export default async function CompanyPage({
    params
}: Props) {



    const {
        slug

    } = await params;



    const company = companies.find(

        c =>
            c.slug === slug

    );



    if (!company) {

        notFound();

    }




    const records =
        cleanedSalaries.filter(

            item =>

                item.company.toLowerCase()

                ===

                company.name.toLowerCase()

        );




    const compensationValues =
        records.map(
            r => r.total_compensation
        );



    const medianComp =
        records.length > 0
            ?
            median(
                compensationValues
            )
            :
            0;



    const range =
        getRange(
            compensationValues
        );




    const distribution = getDistribution(
        records
    );

    const firstRecordId =
        records.length > 0
            ? records[0].id
            : "";





    return (


        <main

            className="
min-h-screen
bg-slate-50
py-10
"

        >

            <div
                className="
max-w-7xl
mx-auto
px-6
"
            >



                {/* Company Header */}


                <h1
                    className="
text-5xl
font-bold
tracking-tight
mb-3
"
                >

                    {company.name}


                </h1>

                <p className="
text-gray-500
text-lg
">
                    Explore compensation trends and engineering salaries.
                </p>

                <div
                    className="
mt-6
"
                >


                    <Link

                        href={`/compare?s1=${firstRecordId}`}

                        className="
    inline-block
    mt-6
    bg-blue-600
    text-white
    px-5
    py-3
    rounded-lg
    font-semibold
    "

                    >

                        Compare {company.name}

                    </Link>


                </div>





                <div

                    className="
bg-white
rounded-xl
p-6
grid
md:grid-cols-6
gap-5
"

                >



                    <div>

                        <p className="text-gray-500">
                            Industry
                        </p>


                        <b>
                            {company.industry}
                        </b>

                    </div>





                    <div>

                        <p className="text-gray-500">
                            Founded
                        </p>


                        <b>
                            {company.founded}
                        </b>


                    </div>






                    <div>

                        <p className="text-gray-500">
                            Employees
                        </p>


                        <b>
                            {company.headcount}
                        </b>


                    </div>







                    <div>

                        <p className="text-gray-500">
                            HQ
                        </p>


                        <b>
                            {company.hq}
                        </b>


                    </div>







                    <div>

                        <p className="text-gray-500">
                            Median Compensation
                        </p>


                        <b className="text-xl">

                            ₹
                            {
                                formatCurrency(
                                    medianComp,
                                    "INR"
                                )
                            }

                        </b>


                    </div>

                    <div>

                        <p className="text-gray-500">
                            TC Range
                        </p>


                        <b>

                            ₹
                            {
                                formatCurrency(
                                    range.min,
                                    "INR"
                                )
                            }

                            -

                            ₹
                            {
                                formatCurrency(
                                    range.max,
                                    "INR"
                                )
                            }

                        </b>


                    </div>



                    <div>

                        <p className="text-gray-500">
                            Records
                        </p>


                        <b>

                            {records.length}

                        </b>


                    </div>




                </div>









                {/* Level Distribution */}



                <section

                    className="
            bg-white
            mt-6
            p-6
            rounded-xl
            "

                >


                    <h2

                        className="
                text-xl
                font-bold
                mb-4
                "

                    >

                        Level Distribution

                    </h2>





                    {
                        LEVELS.map(level => (


                            <div

                                key={level}

                                className="mb-4"

                            >


                                <div className="flex justify-between">


                                    <span>

                                        {level}

                                    </span>



                                    <span>

                                        {
                                            distribution[level] || 0
                                        }

                                    </span>



                                </div>





                                <div
                                    className="
bg-gray-200
h-3
rounded
"

                                >


                                    <div

                                        className="
bg-blue-600
h-3
rounded
"

                                        style={{

                                            width:

                                                records.length > 0

                                                    ?

                                                    `

${(
                                                        (distribution[level] || 0)
                                                        / records.length
                                                    )
                                                    *
                                                    100
                                                    }%

`

                                                    :

                                                    "0%"

                                        }}


                                    />


                                </div>



                            </div>


                        ))

                    }



                </section>







                <section className="mt-6">


                    <h2 className="text-2xl font-bold mb-4">

                        Salary Records

                    </h2>



                    {

                        records.length > 0

                            ?

                            <SalaryTable data={records} />


                            :

                            <div className="
bg-white
p-8
rounded-xl
">

                                No salary records found.

                            </div>

                    }


                </section>






            </div>

        </main>


    );


}