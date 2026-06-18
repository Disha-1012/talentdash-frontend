"use client";


interface Props {

    page: number;

    total: number;

    setPage: (p: number) => void;

}



export default function Pagination({

    page,

    total,

    setPage

}: Props) {


    const pages =
        Math.ceil(total / 25);



    return (


        <div

            className="
mt-8
bg-white
border
border-slate-200
rounded-2xl
shadow-sm
p-5
flex
flex-col
md:flex-row
items-center
justify-between
gap-4
"

        >



            <button


                disabled={page <= 1}


                onClick={() =>
                    setPage(page - 1)
                }


                className="
px-5
py-2.5
rounded-xl
border
font-semibold
text-sm
transition

hover:bg-slate-100

disabled:opacity-40
disabled:cursor-not-allowed

"

            >


                ← Previous


            </button>







            <div

                className="
text-center
"

            >



                <p

                    className="
text-sm
font-semibold
text-slate-700
"

                >

                    Showing


                    <span className="
text-blue-600
mx-1
">

                        {(page - 1) * 25 + 1}

                    </span>


                    -


                    <span className="
text-blue-600
mx-1
">

                        {Math.min(
                            page * 25,
                            total
                        )}

                    </span>


                    of


                    <span className="
font-bold
ml-1
">

                        {total}

                    </span>


                    records


                </p>





                <p

                    className="
text-xs
text-slate-400
mt-1
"

                >

                    Page {page} of {pages}


                </p>



            </div>







            <button


                disabled={page >= pages}


                onClick={() =>
                    setPage(page + 1)
                }


                className="
px-5
py-2.5
rounded-xl
bg-blue-600
text-white
font-semibold
text-sm
transition

hover:bg-blue-700

disabled:opacity-40
disabled:cursor-not-allowed

"

            >


                Next →


            </button>





        </div>


    );

}