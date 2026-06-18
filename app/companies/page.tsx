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


            <h1
                className="
text-5xl
font-bold
tracking-tight
mb-3
"
            >

                Companies


            </h1>
            <p className="
text-gray-500
text-lg
">
                Explore compensation trends and engineering salaries.
            </p>



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
                            shadow-sm
hover:shadow-xl
transition-all
duration-300
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



        </div>

        </main>


    );


}