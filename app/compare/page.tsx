import type { Metadata } from "next";

import {
    Suspense
}
    from "react";


import CompareSalary
    from "@/components/features/CompareSalary";



export const metadata: Metadata = {

    title:
        "Compare Tech Salaries | TalentDash",


    description:
        "Compare software engineer compensation between technology companies.",


    alternates: {

        canonical:
            "https://talentdash.com/compare"

    },


    openGraph: {

        title:
            "Compare Tech Salaries | TalentDash",


        description:
            "Compare software engineer compensation between technology companies.",


        url:
            "https://talentdash.com/compare"

    }

};





export default function ComparePage() {


    return (

        <div
            className="
max-w-7xl
mx-auto
px-6
"
        >

            <main

                className="
min-h-screen
bg-slate-50
py-10
"

            >



                <h1

                    className="
text-4xl
font-bold
mb-8
"

                >

                    Compare Salary Compensation

                </h1>

                <p className="
text-gray-500
mb-8
">
                    Compare total compensation between technology companies
                </p>





                <Suspense

                    fallback={

                        <div

                            className="
bg-white
rounded-xl
p-8
"

                        >

                            Loading comparison...

                        </div>

                    }

                >

                    <CompareSalary />

                </Suspense>



            </main>

        </div>

    );


}