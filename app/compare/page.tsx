import type { Metadata } from "next";
import CompareSalary
    from "@/components/features/CompareSalary";


export const metadata: Metadata = {


    title:
        "Compare Tech Salaries | TalentDash",



    description:
        "Compare software engineer compensation between technology companies."


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



            <CompareSalary />


        </main>

    )


}