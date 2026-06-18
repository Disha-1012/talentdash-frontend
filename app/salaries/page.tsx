import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import SalaryPageClient
    from "@/components/features/SalaryPageClient";
import FilterBar from "@/components/features/FilterBar";
import {
    cleanedSalaries
}
    from "@/lib/mock-data";
import SortSelect
    from "@/components/features/SortSelect";

export const metadata: Metadata = {


    title:
        "Software Engineer Salaries at Amazon India — L3 to L5 | TalentDash",


    description:
        "Explore software engineer salaries, total compensation, levels and company-wise technology pay trends.",


    alternates: {

        canonical:
            "https://talentdash.com/salaries"

    },


    openGraph: {


        title:
            "Software Engineer Salaries | TalentDash",


        description:
            "Compare technology salaries by company, role and level.",


        url:
            "https://talentdash.com/salaries"


    }


};



interface Props {

    searchParams: Promise<{

        company?: string;
        level?: string;
        currency?: string;
        role?: string;
        location?: string;
        sort?: string;

    }>

}


export default async function SalariesPage({
    searchParams
}: Props) {


    const params = await searchParams;


    let data =
        [...cleanedSalaries];
    if (params.sort === "base") {


        data.sort(
            (a, b) =>
                b.base_salary -
                a.base_salary
        );


    }


    else if (params.sort === "experience") {


        data.sort(
            (a, b) =>
                b.experience_years -
                a.experience_years
        );


    }


    else {


        data.sort(
            (a, b) =>
                b.total_compensation -
                a.total_compensation
        );


    }



    // Company filter

    if (params.company) {


        data =
            data.filter(item =>

                item.company
                    .toLowerCase()
                    .includes(
                        params.company!.toLowerCase()
                    )

            );

    }



    // Role filter

    if (params.role) {


        data =
            data.filter(item =>

                item.role === params.role

            );

    }



    // Level filter

    if (params.level) {


        const selectedLevels =
            params.level.split(",");



        data =
            data.filter(item =>

                selectedLevels.includes(item.level)

            );


    }



    // Location filter

    if (params.location) {


        data =
            data.filter(item =>

                item.location === params.location

            );

    }



    // Currency filter

    if (params.currency) {


        data =
            data.filter(item =>

                item.currency === params.currency

            );


    }




    // Sort by total compensation

    if (params.sort === "base") {


        data.sort(
            (a, b) =>
                b.base_salary -
                a.base_salary
        );


    }

    else if (params.sort === "experience") {


        data.sort(
            (a, b) =>
                b.experience_years -
                a.experience_years
        );


    }

    else if (params.sort === "recent") {


        data.sort(
            (a, b) =>
                Number(b.id) -
                Number(a.id)
        );


    }

    else {


        data.sort(
            (a, b) =>
                b.total_compensation -
                a.total_compensation
        );


    }




    return (

        <>
            <JsonLd />

            <main
                className="
min-h-screen
bg-slate-50
"
            >


                <div
                    className="
max-w-7xl
mx-auto
px-6
py-10
"
                >



                    <section

                        className="
mb-8
"

                    >


                        <h1

                            className="
text-4xl
font-bold
text-slate-900
"

                        >

                            Software Engineer Salaries

                        </h1>


                        <p
                            className="
mt-2
text-gray-500
"
                        >

                            Compare compensation, levels and company-wise salary trends.

                        </p>


                    </section>
                    <div

                        className="
grid
md:grid-cols-3
gap-5
mb-8
"

                    >


                        <div
                            className="
bg-white
rounded-xl
p-5
border
shadow-sm
"
                        >

                            <p className="text-gray-500">
                                Salary Records
                            </p>

                            <h2 className="
text-3xl
font-bold
text-[#0369A1]
">

                                {cleanedSalaries.length}

                            </h2>

                        </div>



                        <div
                            className="
bg-white
rounded-xl
p-5
border
shadow-sm
"
                        >

                            <p className="text-gray-500">
                                Companies
                            </p>

                            <h2 className="
text-3xl
font-bold
">

                                12+

                            </h2>

                        </div>



                        <div
                            className="
bg-white
rounded-xl
p-5
border
shadow-sm
"
                        >

                            <p className="text-gray-500">
                                Levels
                            </p>

                            <h2 className="
text-3xl
font-bold
">

                                L3 - Principal

                            </h2>

                        </div>


                    </div>

                    <FilterBar />
                    <SortSelect />



                    {
                        data.length > 0 ?

                            <SalaryPageClient
                                data={data}
                            />


                            :


                            <div
                                className="
                    bg-white
                    p-10
                    rounded-xl
                    text-center
                    "
                            >

                                <h2
                                    className="
                        text-xl
                        font-bold
                        "
                                >

                                    No records found

                                </h2>


                                <p>

                                    Try removing filters.

                                </p>


                            </div>

                    }


                </div>
            </main>

        </>

    );

}