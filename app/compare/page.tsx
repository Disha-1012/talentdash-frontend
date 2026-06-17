import CompareSalary
    from "@/components/features/CompareSalary";


export const metadata = {

    title:
        "Compare Software Engineer Salaries | TalentDash",

    description:
        "Compare salary compensation between companies"

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