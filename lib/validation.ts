import {
    SalaryRecord,
    LEVELS
}
    from "@/types/salary";



export interface ValidationResult {

    valid: boolean;

    errors: string[];

}




export function validateSalaryRecord(
    record: SalaryRecord,
    existingRecords: SalaryRecord[] = []
): ValidationResult {


    const errors: string[] = [];



    // 1. Negative salary check

    if (record.base_salary < 0) {

        errors.push(
            "base_salary cannot be negative"
        );

    }



    if (record.bonus < 0) {

        errors.push(
            "bonus cannot be negative"
        );

    }



    if (record.stock < 0) {

        errors.push(
            "stock cannot be negative"
        );

    }





    // 2. Invalid level check

    if (
        !LEVELS.includes(record.level)
    ) {

        errors.push(
            "Invalid salary level"
        );

    }






    // 3. Total compensation integrity

    const calculatedTotal =
        record.base_salary +
        record.bonus +
        record.stock;



    if (
        record.total_compensation
        !==
        calculatedTotal
    ) {

        errors.push(
            "total_compensation mismatch"
        );

    }






    // 4. Duplicate record check


    const duplicate =
        existingRecords.some(item =>

            item.id !== record.id &&
            
            item.company === record.company &&

            item.role === record.role &&

            item.level === record.level &&

            item.location === record.location &&

            item.experience_years ===
            record.experience_years

        );



    if (duplicate) {

        errors.push(
            "Duplicate salary record"
        );

    }




    return {

        valid:
            errors.length === 0,


        errors

    };


}