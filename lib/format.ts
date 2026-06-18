import {
    Currency
}
from "@/types/salary";


import {
    CURRENCY_RATE
}
from "@/lib/config";



export function convertCurrency(
    amount:number,
    currency:Currency
){

    if(currency === "USD"){

        return (
            amount *
            CURRENCY_RATE.INR_TO_USD
        );

    }


    return amount;

}





export function formatCurrency(
    amount:number,
    currency:Currency
){

    const converted =
        convertCurrency(
            amount,
            currency
        );


    if(currency==="USD"){

        return (
            "$" +
            Math.round(converted)
                .toLocaleString("en-US")
        );

    }



    return (
        "₹" +
        Math.round(converted)
            .toLocaleString("en-IN")
    );

}