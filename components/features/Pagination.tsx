"use client";

interface Props {
    page: number;

    total: number;

    setPage: (p: number) => void;
}

export default function Pagination({ page, total, setPage }: Props) {
    const pages = Math.ceil(total / 25);

    return (
        <div
            className="
mt-8
bg-white
border
border-[#EBEBEB]
rounded-xl
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
                onClick={() => setPage(page - 1)}
                className="
px-5
py-2.5
rounded-lg
border
border-[#EBEBEB]
font-semibold
text-sm
text-[#484848]
transition

hover:bg-[#F2F2F2]
hover:border-[#FF5A5F]
hover:text-[#FF5A5F]

disabled:opacity-40
disabled:cursor-not-allowed
disabled:hover:bg-transparent
disabled:hover:border-[#EBEBEB]
disabled:hover:text-[#484848]

"
            >
                ← Previous
            </button>

            <div className="text-center">
                <p
                    className="
text-sm
font-semibold
text-[#484848]
"
                >
                    Showing
                    <span className="text-[#0369A1] mx-1">{(page - 1) * 25 + 1}</span>
                    -
                    <span className="text-[#0369A1] mx-1">
                        {Math.min(page * 25, total)}
                    </span>
                    of
                    <span className="font-bold text-[#222222] ml-1">{total}</span>
                    records
                </p>

                <p
                    className="
text-xs
text-[#717171]
mt-1
"
                >
                    Page {page} of {pages}
                </p>
            </div>

            <button
                disabled={page >= pages}
                onClick={() => setPage(page + 1)}
                className="
px-5
py-2.5
rounded-lg
bg-[#FF5A5F]
text-white
font-semibold
text-sm
transition
shadow-sm

hover:opacity-90

disabled:opacity-40
disabled:cursor-not-allowed
disabled:hover:opacity-40

"
            >
                Next →
            </button>
        </div>
    );
}