import Link from "next/link";


export default function Navbar() {


    return (

        <nav

            className="
bg-white
p-5
flex
gap-8
border-b
"

        >


            <Link href="/salaries">
                Salaries
            </Link>


            <Link href="/companies/amazon">
                Companies
            </Link>


            <Link href="/compare">
                Compare
            </Link>


        </nav>

    )

}