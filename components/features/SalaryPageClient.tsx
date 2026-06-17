"use client";


import { useState } from "react";

import SalaryTable from "@/components/features/SalaryTable";
import Pagination from "@/components/features/Pagination";

import { SalaryRecord } from "@/types/salary";


interface Props {

    data: SalaryRecord[];

}



export default function SalaryPageClient({
    data
}: Props) {


    const [page, setPage] = useState(1);


    const pageSize = 25;


    const start =
        (page - 1) * pageSize;


    const paginatedData =
        data.slice(
            start,
            start + pageSize
        );



    return (

        <>

            <SalaryTable
                data={paginatedData}
            />


            <Pagination

                page={page}

                total={data.length}

                setPage={setPage}

            />


        </>

    )

}