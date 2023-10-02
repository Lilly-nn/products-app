export function convertFromUSD(price: number, exchangeRate: number) {
    const convertedPrice = price * exchangeRate;
    return convertedPrice;
}