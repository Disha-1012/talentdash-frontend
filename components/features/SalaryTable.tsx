import { SalaryRecord } from "@/types/salary";
import Badge from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/format";


interface Props {

    data: SalaryRecord[];

}



export default function SalaryTable({
    data
}: Props) {



    return (

        <div className="
overflow-x-auto
bg-white
rounded-xl
border
border-gray-200
">


            <table className="
w-full
text-left
">


                <thead className="
bg-gray-50
">

                    <tr>

                        <th className="p-4">
                            Company
                        </th>


                        <th className="p-4">
                            Role
                        </th>


                        <th className="p-4">
                            Level
                        </th>


                        <th className="p-4">
                            Location
                        </th>


                        <th className="p-4">
                            Experience
                        </th>


                        <th className="p-4">
                            Base Salary
                        </th>


                        <th className="p-4">
                            Stock
                        </th>


                        <th className="p-4">
                            Total Comp
                        </th>


                    </tr>

                </thead>



                <tbody>


                    {
                        data.map((item) => {


                            return (

                                <tr
                                    key={item.id}
                                    className="
border-t
hover:bg-gray-50
"
                                >


                                    <td className="p-4 font-semibold">

                                        {item.company}

                                    </td>



                                    <td className="p-4">

                                        {item.role}

                                    </td>



                                    <td className="p-4">

                                        <Badge level={item.level} />

                                    </td>



                                    <td className="p-4">

                                        {item.location}

                                    </td>



                                    <td className="p-4">

                                        {item.experience_years} yrs

                                    </td>




                                    <td className="p-4">

                                        {formatCurrency(
                                            item.base_salary,
                                            item.currency
                                        )}

                                    </td>



                                    <td className="p-4">

                                        {
                                            item.stock ?
                                                formatCurrency(
                                                    item.stock,
                                                    item.currency
                                                )
                                                :
                                                "—"
                                        }

                                    </td>



                                    <td className="
p-4
font-bold
text-xl
text-[#0369A1]
">


                                        {
                                            formatCurrency(
                                                item.total_compensation,
                                                item.currency
                                            )
                                        }


                                    </td>



                                </tr>


                            )


                        })


                    }


                </tbody>


            </table>


        </div>

    )

}