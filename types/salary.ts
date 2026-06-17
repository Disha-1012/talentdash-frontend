export type Level =
    "L3" |
    "L4" |
    "L5" |
    "L6" |
    "SDE-I" |
    "SDE-II" |
    "SDE-III" |
    "Staff" |
    "Principal"


export interface SalaryRecord {

    id: string;

    company: string;

    role: string;

    level: Level;

    location: string;

    currency: "INR" | "USD";

    experience_years: number;

    base_salary: number;

    bonus: number;

    stock: number;

    total_compensation: number;

}