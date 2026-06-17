export function formatCurrency(
    value: number,
    currency: string
) {


    if (currency === "INR") {

        return new Intl.NumberFormat(
            "en-IN",
            {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0
            }
        ).format(value)

    }


    return new Intl.NumberFormat(
        "en-US",
        {
            style: "currency",
            currency
        }
    ).format(value)


}