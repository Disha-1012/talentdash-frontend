export const LEVELS = [

    "L3",
    "L4",
    "L5",
    "L6",
    "SDE-I",
    "SDE-II",
    "SDE-III",
    "Staff",
    "Principal"

] as const;



export type Level =
    typeof LEVELS[number];



export const CURRENCIES = [

    "INR",
    "USD"

] as const;



export type Currency =
    typeof CURRENCIES[number];





export interface SalaryRecord {


    id: string;


    company: string;


    role: string;


    level: Level;


    location: string;


    currency: Currency;


    experience_years: number;


    base_salary: number;


    bonus: number;


    stock: number;


    total_compensation: number;


}
