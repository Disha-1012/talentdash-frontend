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

        <div className="
flex
justify-between
mt-5
">


            <button

                disabled={page === 1}

                onClick={() => setPage(page - 1)}

                className="border px-4 py-2 rounded"

            >

                Previous

            </button>


            <p>

                Showing {(page - 1) * 25 + 1}
                -
                {Math.min(page * 25, total)}
                of {total} records

            </p>


            <button

                disabled={page === pages}

                onClick={() => setPage(page + 1)}

                className="border px-4 py-2 rounded"

            >

                Next

            </button>


        </div>

    )

}