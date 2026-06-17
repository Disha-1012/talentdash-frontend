import {
    notFound
} from "next/navigation";


import {
    companies
} from "@/lib/company-data";


import {
    salaries
} from "@/lib/mock-data";


import SalaryTable
    from "@/components/features/SalaryTable";



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



// Calculate level distribution

function getDistribution(
    records: any[]
) {


    const result: any = {};



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




    const records = salaries.filter(

        item =>

            item.company.toLowerCase()

            ===

            company.name.toLowerCase()

    );




    const medianComp = median(

        records.map(

            r =>
                r.total_compensation

        )

    );




    const distribution = getDistribution(
        records
    );





    return (


        <main

            className="
        min-h-screen
        bg-[#F7F7F7]
        p-8
        "

        >



            {/* Company Header */}


            <h1

                className="
            text-4xl
            font-bold
            mb-6
            "

            >

                {company.name}


            </h1>





            <div

                className="
            bg-white
            rounded-xl
            p-6
            grid
            md:grid-cols-5
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
                        {medianComp.toLocaleString("en-IN")}

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
                    Object.entries(distribution)

                        .map(([level, count]) => (


                            <div

                                key={level}

                                className="
                        mb-4
                        "

                            >



                                <div

                                    className="
                            flex
                            justify-between
                            "

                                >


                                    <span>

                                        {level}

                                    </span>



                                    <span>

                                        {String(count)}

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

                                                `${Number(count)
                                                /
                                                records.length
                                                *
                                                100
                                                }%`

                                        }}


                                    />



                                </div>



                            </div>


                        ))
                }



            </section>









            {/* Salary Records */}



            <section

                className="
            mt-6
            "

            >



                <h2

                    className="
                text-2xl
                font-bold
                mb-4
                "

                >

                    Salary Records

                </h2>





                {
                    records.length > 0 ?

                        <SalaryTable

                            data={records}

                        />

                        :

                        <div

                            className="
                    bg-white
                    p-8
                    rounded-xl
                    "

                        >

                            No salary records found.

                        </div>

                }





            </section>






        </main>


    );


}