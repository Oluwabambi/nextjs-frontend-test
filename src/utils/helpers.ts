export const formatCurrency = (number: number, format = 'NGN') => {
    return new Intl.NumberFormat(`en-${format.substr(0, 2)}`, {
        style: 'currency',
        currency: format
    }).format(number);
};

export const formatNum = (number: number) => {
    return number.toFixed(2)
}