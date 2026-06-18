import Link from "next/link";

import {
    companies
}
    from "@/lib/company-data";


export const metadata = {

    title:
        "Companies | TalentDash",

    description:
        "Browse company salary insights"

};



export default function CompaniesPage() {


    return (

        <main

            className="
            min-h-screen
            bg-[#F7F7F7]
            p-8
            "

        >


            <h1

                className="
                text-4xl
                font-bold
                mb-8
                "

            >

                Companies


            </h1>



            <div

                className="
                grid
                md:grid-cols-3
                gap-6
                "

            >



                {
                    companies.map(company => (


                        <Link

                            key={company.slug}

                            href={
                                `/companies/${company.slug}`
                            }


                            className="
                            bg-white
                            rounded-xl
                            p-6
                            shadow
                            hover:shadow-lg
                            transition
                            "

                        >



                            <h2

                                className="
                                text-2xl
                                font-bold
                                mb-3
                                "

                            >

                                {company.name}


                            </h2>



                            <p>

                                {company.industry}

                            </p>



                            <p>

                                HQ:
                                {" "}
                                {company.hq}

                            </p>



                            <p

                                className="
                                mt-3
                                text-blue-600
                                "

                            >

                                View Salaries →

                            </p>




                        </Link>


                    ))

                }



            </div>



        </main>


    );


}