import Link from "next/link";


export default function Navbar() {


    return (

        <nav

            className="
sticky
top-0
z-50
bg-white/80
backdrop-blur-xl
border-b
border-slate-200
shadow-sm
"

        >


            <div

                className="
max-w-7xl
mx-auto
px-6
h-20
flex
items-center
justify-between
"

            >



                {/* Brand */}


                <Link

                    href="/salaries"

                    className="
flex
items-center
gap-3
group
"

                >


                    <div

                        className="
w-10
h-10
rounded-xl
bg-gradient-to-br
from-blue-600
to-indigo-600
flex
items-center
justify-center
text-white
font-bold
shadow-md
group-hover:scale-105
transition
"

                    >

                        T

                    </div>



                    <div>


                        <h1

                            className="
text-xl
font-extrabold
tracking-tight
text-slate-900
"

                        >

                            TalentDash

                        </h1>


                        <p

                            className="
text-xs
text-slate-500
"

                        >

                            Salary Intelligence

                        </p>


                    </div>



                </Link>







                {/* Navigation */}


                <div

                    className="
hidden
md:flex
items-center
gap-2
bg-slate-100
rounded-full
p-1
"

                >



                    <Link

                        href="/salaries"

                        className="
px-5
py-2
rounded-full
text-sm
font-semibold
text-slate-700
hover:bg-white
hover:text-blue-600
hover:shadow-sm
transition
"

                    >

                        Salaries

                    </Link>




                    <Link

                        href="/companies"

                        className="
px-5
py-2
rounded-full
text-sm
font-semibold
text-slate-700
hover:bg-white
hover:text-blue-600
hover:shadow-sm
transition
"

                    >

                        Companies

                    </Link>




                    <Link

                        href="/compare"

                        className="
px-5
py-2
rounded-full
text-sm
font-semibold
text-slate-700
hover:bg-white
hover:text-blue-600
hover:shadow-sm
transition
"

                    >

                        Compare

                    </Link>



                </div>






            </div>


        </nav>

    );

}