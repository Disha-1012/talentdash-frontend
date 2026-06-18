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

                Compare Companies

            </h1>





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

    );


}