import {
    validateSalaryRecord
}
    from "@/lib/validation";

import { SalaryRecord } from "@/types/salary";

export const salaries: SalaryRecord[] = [

    {
        id: "1",
        company: "Amazon",
        role: "Software Engineer",
        level: "L3",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 1,
        base_salary: 1800000,
        bonus: 100000,
        stock: 200000,
        total_compensation: 2100000
    },

    {
        id: "2",
        company: "Amazon",
        role: "Software Engineer",
        level: "L4",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 4,
        base_salary: 3500000,
        bonus: 300000,
        stock: 600000,
        total_compensation: 4400000
    },

    {
        id: "3",
        company: "Amazon",
        role: "Backend Engineer",
        level: "L5",
        location: "Hyderabad",
        currency: "INR",
        experience_years: 7,
        base_salary: 5200000,
        bonus: 500000,
        stock: 1200000,
        total_compensation: 6900000
    },

    {
        id: "4",
        company: "Amazon",
        role: "SDE-II",
        level: "SDE-II",
        location: "Chennai",
        currency: "INR",
        experience_years: 6,
        base_salary: 5500000,
        bonus: 600000,
        stock: 1200000,
        total_compensation: 7300000
    },

    {
        id: "5",
        company: "Google",
        role: "Software Engineer",
        level: "L3",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 2,
        base_salary: 2200000,
        bonus: 200000,
        stock: 400000,
        total_compensation: 2800000
    },

    {
        id: "6",
        company: "Google",
        role: "Frontend Engineer",
        level: "L4",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 5,
        base_salary: 4500000,
        bonus: 600000,
        stock: 1500000,
        total_compensation: 6600000
    },

    {
        id: "7",
        company: "Google",
        role: "Backend Engineer",
        level: "L5",
        location: "Mumbai",
        currency: "INR",
        experience_years: 8,
        base_salary: 7000000,
        bonus: 900000,
        stock: 2500000,
        total_compensation: 10400000
    },

    {
        id: "8",
        company: "Google",
        role: "Software Engineer",
        level: "Staff",
        location: "Hyderabad",
        currency: "INR",
        experience_years: 12,
        base_salary: 10000000,
        bonus: 1500000,
        stock: 4000000,
        total_compensation: 15500000
    },

    {
        id: "9",
        company: "Microsoft",
        role: "Software Engineer",
        level: "L3",
        location: "Hyderabad",
        currency: "INR",
        experience_years: 2,
        base_salary: 2000000,
        bonus: 150000,
        stock: 300000,
        total_compensation: 2450000
    },

    {
        id: "10",
        company: "Microsoft",
        role: "Backend Engineer",
        level: "L4",
        location: "Hyderabad",
        currency: "INR",
        experience_years: 5,
        base_salary: 4200000,
        bonus: 500000,
        stock: 1000000,
        total_compensation: 5700000
    },

    {
        id: "11",
        company: "Microsoft",
        role: "Product Manager",
        level: "L5",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 8,
        base_salary: 6500000,
        bonus: 800000,
        stock: 2000000,
        total_compensation: 9300000
    },

    {
        id: "12",
        company: "Microsoft",
        role: "Principal",
        level: "Principal",
        location: "Noida",
        currency: "INR",
        experience_years: 16,
        base_salary: 14000000,
        bonus: 2500000,
        stock: 6000000,
        total_compensation: 22500000
    },

    {
        id: "13",
        company: "Meta",
        role: "Software Engineer",
        level: "L5",
        location: "London",
        currency: "INR",
        experience_years: 9,
        base_salary: 9000000,
        bonus: 800000,
        stock: 3000000,
        total_compensation: 12800000
    },

    {
        id: "14",
        company: "Meta",
        role: "Frontend Engineer",
        level: "L4",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 5,
        base_salary: 5000000,
        bonus: 700000,
        stock: 1800000,
        total_compensation: 7500000
    },

    {
        id: "15",
        company: "Meta",
        role: "Backend Engineer",
        level: "Staff",
        location: "Mumbai",
        currency: "INR",
        experience_years: 13,
        base_salary: 11000000,
        bonus: 1500000,
        stock: 5000000,
        total_compensation: 17500000
    },

    {
        id: "16",
        company: "Flipkart",
        role: "SDE-I",
        level: "SDE-I",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 2,
        base_salary: 1600000,
        bonus: 100000,
        stock: 200000,
        total_compensation: 1900000
    },

    {
        id: "17",
        company: "Flipkart",
        role: "SDE-II",
        level: "SDE-II",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 5,
        base_salary: 3500000,
        bonus: 400000,
        stock: 800000,
        total_compensation: 4700000
    },

    {
        id: "18",
        company: "Flipkart",
        role: "Product Manager",
        level: "L5",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 8,
        base_salary: 6000000,
        bonus: 700000,
        stock: 1500000,
        total_compensation: 8200000
    },

    {
        id: "19",
        company: "TCS",
        role: "Software Engineer",
        level: "L3",
        location: "Pune",
        currency: "INR",
        experience_years: 2,
        base_salary: 700000,
        bonus: 50000,
        stock: 0,
        total_compensation: 750000
    },

    {
        id: "20",
        company: "TCS",
        role: "Data Analyst",
        level: "L4",
        location: "Kolkata",
        currency: "INR",
        experience_years: 5,
        base_salary: 1400000,
        bonus: 100000,
        stock: 0,
        total_compensation: 1500000
    },

    {
        id: "21",
        company: "Infosys",
        role: "Software Engineer",
        level: "L3",
        location: "Pune",
        currency: "INR",
        experience_years: 2,
        base_salary: 800000,
        bonus: 50000,
        stock: 100000,
        total_compensation: 950000
    },

    {
        id: "22",
        company: "Infosys",
        role: "Data Analyst",
        level: "L5",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 8,
        base_salary: 2800000,
        bonus: 300000,
        stock: 200000,
        total_compensation: 3300000
    },

    {
        id: "23",
        company: "Razorpay",
        role: "Backend Engineer",
        level: "L4",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 5,
        base_salary: 4000000,
        bonus: 500000,
        stock: 700000,
        total_compensation: 5200000
    },

    {
        id: "24",
        company: "Razorpay",
        role: "Frontend Engineer",
        level: "L5",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 8,
        base_salary: 6500000,
        bonus: 800000,
        stock: 1500000,
        total_compensation: 8800000
    },

    {
        id: "25",
        company: "NVIDIA",
        role: "Software Engineer",
        level: "L5",
        location: "Pune",
        currency: "INR",
        experience_years: 8,
        base_salary: 8000000,
        bonus: 1000000,
        stock: 3000000,
        total_compensation: 12000000
    },

    {
        id: "26",
        company: "NVIDIA",
        role: "Principal",
        level: "Principal",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 17,
        base_salary: 16000000,
        bonus: 3000000,
        stock: 7000000,
        total_compensation: 26000000
    },

    {
        id: "27",
        company: "Meesho",
        role: "Software Engineer",
        level: "L3",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 2,
        base_salary: 2200000,
        bonus: 200000,
        stock: 300000,
        total_compensation: 2700000
    },

    {
        id: "28",
        company: "Meesho",
        role: "Backend Engineer",
        level: "SDE-II",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 6,
        base_salary: 5000000,
        bonus: 600000,
        stock: 1000000,
        total_compensation: 6600000
    },

    {
        id: "29",
        company: "Zepto",
        role: "Software Engineer",
        level: "SDE-I",
        location: "Mumbai",
        currency: "INR",
        experience_years: 2,
        base_salary: 2500000,
        bonus: 200000,
        stock: 400000,
        total_compensation: 3100000
    },

    {
        id: "30",
        company: "Zepto",
        role: "Product Manager",
        level: "L6",
        location: "Mumbai",
        currency: "INR",
        experience_years: 10,
        base_salary: 9000000,
        bonus: 1200000,
        stock: 3000000,
        total_compensation: 13200000
    },
    {
        id: "31",
        company: "Wipro",
        role: "Software Engineer",
        level: "L3",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 2,
        base_salary: 900000,
        bonus: 50000,
        stock: 0,
        total_compensation: 950000
    },

    {
        id: "32",
        company: "Wipro",
        role: "Data Analyst",
        level: "L4",
        location: "Hyderabad",
        currency: "INR",
        experience_years: 5,
        base_salary: 1800000,
        bonus: 150000,
        stock: 100000,
        total_compensation: 2050000
    },

    {
        id: "33",
        company: "Amazon",
        role: "SDE-III",
        level: "SDE-III",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 10,
        base_salary: 8500000,
        bonus: 1200000,
        stock: 2500000,
        total_compensation: 12200000
    },

    {
        id: "34",
        company: "Amazon",
        role: "Product Manager",
        level: "L6",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 11,
        base_salary: 10000000,
        bonus: 1500000,
        stock: 3500000,
        total_compensation: 15000000
    },

    {
        id: "35",
        company: "Google",
        role: "Data Analyst",
        level: "L4",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 4,
        base_salary: 3500000,
        bonus: 400000,
        stock: 700000,
        total_compensation: 4600000
    },

    {
        id: "36",
        company: "Google",
        role: "Product Manager",
        level: "L6",
        location: "Hyderabad",
        currency: "INR",
        experience_years: 12,
        base_salary: 12000000,
        bonus: 2000000,
        stock: 5000000,
        total_compensation: 19000000
    },

    {
        id: "37",
        company: "Microsoft",
        role: "Frontend Engineer",
        level: "L6",
        location: "Noida",
        currency: "INR",
        experience_years: 11,
        base_salary: 9000000,
        bonus: 1200000,
        stock: 3000000,
        total_compensation: 13200000
    },

    {
        id: "38",
        company: "Microsoft",
        role: "SDE-III",
        level: "SDE-III",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 10,
        base_salary: 8500000,
        bonus: 1000000,
        stock: 2500000,
        total_compensation: 12000000
    },

    {
        id: "39",
        company: "Meta",
        role: "Product Manager",
        level: "L6",
        location: "Singapore",
        currency: "INR",
        experience_years: 12,
        base_salary: 13000000,
        bonus: 2000000,
        stock: 6000000,
        total_compensation: 21000000
    },

    {
        id: "40",
        company: "Meta",
        role: "SDE-III",
        level: "SDE-III",
        location: "London",
        currency: "INR",
        experience_years: 10,
        base_salary: 11000000,
        bonus: 1500000,
        stock: 4500000,
        total_compensation: 17000000
    },

    {
        id: "41",
        company: "Flipkart",
        role: "Backend Engineer",
        level: "L6",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 12,
        base_salary: 9500000,
        bonus: 1200000,
        stock: 2500000,
        total_compensation: 13200000
    },

    {
        id: "42",
        company: "Flipkart",
        role: "Frontend Engineer",
        level: "L4",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 4,
        base_salary: 3000000,
        bonus: 300000,
        stock: 500000,
        total_compensation: 3800000
    },

    {
        id: "43",
        company: "TCS",
        role: "Product Manager",
        level: "L5",
        location: "Mumbai",
        currency: "INR",
        experience_years: 9,
        base_salary: 5000000,
        bonus: 500000,
        stock: 200000,
        total_compensation: 5700000
    },

    {
        id: "44",
        company: "TCS",
        role: "Software Engineer",
        level: "L6",
        location: "Pune",
        currency: "INR",
        experience_years: 13,
        base_salary: 7000000,
        bonus: 800000,
        stock: 1000000,
        total_compensation: 8800000
    },

    {
        id: "45",
        company: "Infosys",
        role: "Backend Engineer",
        level: "SDE-II",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 6,
        base_salary: 4000000,
        bonus: 400000,
        stock: 500000,
        total_compensation: 4900000
    },

    {
        id: "46",
        company: "Infosys",
        role: "Product Manager",
        level: "L6",
        location: "Hyderabad",
        currency: "INR",
        experience_years: 12,
        base_salary: 8500000,
        bonus: 1000000,
        stock: 1500000,
        total_compensation: 11000000
    },

    {
        id: "47",
        company: "Razorpay",
        role: "SDE-III",
        level: "SDE-III",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 10,
        base_salary: 9000000,
        bonus: 1200000,
        stock: 3000000,
        total_compensation: 13200000
    },

    {
        id: "48",
        company: "Razorpay",
        role: "Product Manager",
        level: "L5",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 8,
        base_salary: 6500000,
        bonus: 800000,
        stock: 1500000,
        total_compensation: 8800000
    },

    {
        id: "49",
        company: "NVIDIA",
        role: "Backend Engineer",
        level: "L6",
        location: "Pune",
        currency: "INR",
        experience_years: 12,
        base_salary: 11000000,
        bonus: 1500000,
        stock: 4000000,
        total_compensation: 16500000
    },

    {
        id: "50",
        company: "NVIDIA",
        role: "Software Engineer",
        level: "Staff",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 14,
        base_salary: 13000000,
        bonus: 2000000,
        stock: 5000000,
        total_compensation: 20000000
    },

    {
        id: "51",
        company: "Meesho",
        role: "Frontend Engineer",
        level: "L4",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 5,
        base_salary: 4000000,
        bonus: 500000,
        stock: 800000,
        total_compensation: 5300000
    },

    {
        id: "52",
        company: "Meesho",
        role: "Data Analyst",
        level: "L5",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 8,
        base_salary: 6000000,
        bonus: 700000,
        stock: 1000000,
        total_compensation: 7700000
    },

    {
        id: "53",
        company: "Zepto",
        role: "Backend Engineer",
        level: "SDE-II",
        location: "Mumbai",
        currency: "INR",
        experience_years: 6,
        base_salary: 5500000,
        bonus: 600000,
        stock: 1200000,
        total_compensation: 7300000
    },

    {
        id: "54",
        company: "Zepto",
        role: "Software Engineer",
        level: "L5",
        location: "Mumbai",
        currency: "INR",
        experience_years: 8,
        base_salary: 7500000,
        bonus: 900000,
        stock: 2000000,
        total_compensation: 10400000
    },

    {
        id: "55",
        company: "Wipro",
        role: "Frontend Engineer",
        level: "L3",
        location: "Kolkata",
        currency: "INR",
        experience_years: 2,
        base_salary: 1000000,
        bonus: 50000,
        stock: 0,
        total_compensation: 1050000
    },

    {
        id: "56",
        company: "Wipro",
        role: "Backend Engineer",
        level: "L5",
        location: "Pune",
        currency: "INR",
        experience_years: 8,
        base_salary: 4500000,
        bonus: 500000,
        stock: 700000,
        total_compensation: 5700000
    },

    {
        id: "57",
        company: "Amazon",
        role: "Data Analyst",
        level: "L5",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 7,
        base_salary: 5000000,
        bonus: 600000,
        stock: 1000000,
        total_compensation: 6600000
    },

    {
        id: "58",
        company: "Google",
        role: "SDE-II",
        level: "SDE-II",
        location: "Bengaluru",
        currency: "INR",
        experience_years: 6,
        base_salary: 7000000,
        bonus: 900000,
        stock: 2000000,
        total_compensation: 9900000
    },

    {
        id: "59",
        company: "Microsoft",
        role: "Principal",
        level: "Principal",
        location: "Redmond",
        currency: "INR",
        experience_years: 18,
        base_salary: 18000000,
        bonus: 3500000,
        stock: 8000000,
        total_compensation: 29500000
    },

    {
        id: "60",
        company: "Meta",
        role: "Software Engineer",
        level: "Staff",
        location: "Mumbai",
        currency: "INR",
        experience_years: 14,
        base_salary: 15000000,
        bonus: 2500000,
        stock: 6000000,
        total_compensation: 23500000
    }

];


export const validSalaries =
    salaries.filter(record => {


        const result =
            validateSalaryRecord(
                record,
                salaries.filter(
                    item =>
                        item.id !== record.id
                )
            );


        if (!result.valid) {

            console.warn(
                "Rejected record:",
                record.id,
                result.errors
            );

        }


        return result.valid;


    });

export const cleanedSalaries =
    validSalaries;