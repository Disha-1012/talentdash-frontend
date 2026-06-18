"use client";


import {
    useRouter,
    useSearchParams
}
    from "next/navigation";


import {
    useState,
    useEffect,
    useCallback
}
    from "react";


import {
    LEVELS
}
    from "@/types/salary";





export default function FilterBar() {


    const router = useRouter();

    const searchParams =
        useSearchParams();



    const [company, setCompany] =
        useState(
            searchParams.get("company") || ""
        );



    const [role, setRole] =
        useState(
            searchParams.get("role") || ""
        );



    const [location, setLocation] =
        useState(
            searchParams.get("location") || ""
        );


    const [level, setLevel] =
        useState<string[]>(

            searchParams.get("level")
                ?
                searchParams
                    .get("level")!
                    .split(",")

                :

                []

        );





    const updateFilters = useCallback(

        (
            newValues: Record<string, string>
        ) => {


            const params =
                new URLSearchParams(
                    searchParams.toString()
                );



            Object.entries(newValues)
                .forEach(
                    ([key, value]) => {


                        if (value) {


                            params.set(
                                key,
                                value
                            );


                        }

                        else {


                            params.delete(key);


                        }


                    }
                );



            router.push(
                `/salaries?${params.toString()}`
            );


        },

        [
            router,
            searchParams
        ]

    );







    useEffect(() => {


        const timer =
            setTimeout(() => {


                updateFilters({

                    company

                });


            }, 300);



        return () => clearTimeout(timer);



    }, [
        company,
        updateFilters
    ]);







    function changeLevel(
        item: string
    ) {


        let updated: string[];



        if (level.includes(item)) {


            updated =
                level.filter(
                    x => x !== item
                );


        }
        else {


            updated = [
                ...level,
                item
            ];


        }



        setLevel(updated);



        updateFilters({

            level:
                updated.join(",")

        });



    }







    return (


        <div

            className="
bg-white
rounded-2xl
shadow-sm
border
p-6
mb-8
space-y-6
"

        >


            <input

                value={company}

                onChange={
                    e => setCompany(
                        e.target.value
                    )
                }

                placeholder="Search company..."

                className="
w-full
rounded-xl
border
px-4
py-3
outline-none
focus:ring-2
focus:ring-blue-200
"

            />





            <div

                className="
flex
gap-3
flex-wrap
"

            >




                <select

                    value={role}

                    onChange={
                        e => {

                            setRole(
                                e.target.value
                            );


                            updateFilters({

                                role: e.target.value

                            });

                        }

                    }

                    className="
border
rounded-xl
px-4
py-3
bg-white
hover:border-blue-500
transition"

                >


                    <option value="">
                        Role
                    </option>


                    <option value="Software Engineer">
                        Software Engineer
                    </option>


                    <option value="Backend Engineer">
                        Backend Engineer
                    </option>


                    <option value="Frontend Engineer">
                        Frontend Engineer
                    </option>


                    <option value="Product Manager">
                        Product Manager
                    </option>


                </select>






                <select

                    value={location}

                    onChange={
                        e => {

                            setLocation(
                                e.target.value
                            );


                            updateFilters({

                                location: e.target.value

                            });

                        }

                    }


                    className="
border
rounded-xl
px-4
py-3
bg-white
hover:border-blue-500
transition
"

                >


                    <option value="">
                        Location
                    </option>


                    <option value="Bengaluru">
                        Bengaluru
                    </option>


                    <option value="Mumbai">
                        Mumbai
                    </option>


                    <option value="Hyderabad">
                        Hyderabad
                    </option>


                    <option value="Pune">
                        Pune
                    </option>


                    <option value="Noida">
                        Noida
                    </option>


                </select>







                <button

                    onClick={() => {

                        updateFilters({

                            currency: "INR"

                        });

                    }}

                    className="
rounded-xl
px-5
py-2.5
bg-[#0369A1]
text-white
font-semibold
"

                >

                    ₹ INR

                </button>





                <button

                    onClick={() => {

                        updateFilters({

                            currency: "USD"

                        });

                    }}

                    className="
rounded-xl
px-5
py-2.5
border
font-semibold
"

                >

                    $ USD

                </button>



            </div>







            <div>


                <p className="
font-semibold
mb-2
">

                    Levels

                </p>




                <div

                    className="
flex
flex-wrap
gap-3
"

                >


                    {

                        LEVELS.map(levelItem => (


                            <label

                                key={levelItem}

                            >


                                <input

                                    type="checkbox"

                                    checked={
                                        level.includes(levelItem)
                                    }

                                    onChange={() => changeLevel(levelItem)}


                                />

                                {" "}

                                {levelItem}


                            </label>


                        ))

                    }


                </div>



            </div>






        </div>


    );


}