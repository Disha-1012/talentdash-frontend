import { SalaryRecord } from "@/types/salary";
import Badge from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/format";

interface Props {
  data: SalaryRecord[];
}

export default function SalaryTable({ data }: Props) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-[#EBEBEB]">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#F7F7F7] text-[#484848] border-b border-[#EBEBEB]">
          <tr>
            <th className="p-4 text-[13px] font-medium uppercase tracking-wide whitespace-nowrap">Company</th>
            <th className="p-4 text-[13px] font-medium uppercase tracking-wide whitespace-nowrap">Role</th>
            <th className="p-4 text-[13px] font-medium uppercase tracking-wide whitespace-nowrap">Level</th>
            <th className="p-4 text-[13px] font-medium uppercase tracking-wide whitespace-nowrap">Location</th>
            <th className="p-4 text-[13px] font-medium uppercase tracking-wide whitespace-nowrap">Experience</th>
            <th className="p-4 text-[13px] font-medium uppercase tracking-wide whitespace-nowrap">Base Salary</th>
            <th className="p-4 text-[13px] font-medium uppercase tracking-wide whitespace-nowrap">Stock</th>
            <th className="p-4 text-[13px] font-medium uppercase tracking-wide whitespace-nowrap">Total Comp</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-t border-[#EBEBEB] hover:bg-[#F2F2F2] transition-colors"
            >
              <td className="p-4 text-[16px] font-semibold text-[#222222] max-w-[220px] truncate">
                {item.company}
              </td>
              <td className="p-4 text-[16px] text-[#484848] whitespace-nowrap">{item.role}</td>
              <td className="p-4">
                <Badge level={item.level} />
              </td>
              <td className="p-4 text-[16px] text-[#484848] whitespace-nowrap">{item.location}</td>
              <td className="p-4 text-[16px] text-[#484848] whitespace-nowrap">
                {item.experience_years} yrs
              </td>
              <td className="p-4 text-[16px] text-[#484848] whitespace-nowrap">
                {item.base_salary ? (
                  formatCurrency(item.base_salary, item.currency)
                ) : (
                  <span className="text-[#717171]">—</span>
                )}
              </td>
              <td className="p-4 text-[16px] text-[#484848] whitespace-nowrap">
                {item.stock ? (
                  formatCurrency(item.stock, item.currency)
                ) : (
                  <span className="text-[#717171]">—</span>
                )}
              </td>
              <td className="p-4 font-bold text-xl text-[#0369A1] whitespace-nowrap">
                {formatCurrency(item.total_compensation, item.currency)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}