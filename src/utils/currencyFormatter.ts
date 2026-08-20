const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "usd"
})

export function currencyFormatter(amount: number) {
    return formatter.format(amount)
}