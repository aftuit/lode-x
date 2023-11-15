export const SERVER_PATH = 'http://localhost:1001'

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "UZS",
    style: "currency",
})

export function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
}

export const getStatus = (status) => {
    switch (status) {
        case "men": return "Мужское";
        case "women": return "Женское";
        case "baby": return "Детские";
        default: return "Мужское";
    }
}