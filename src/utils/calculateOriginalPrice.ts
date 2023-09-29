export function calculateOriginal(changedPrice: number, discount: number) {
    const percentage = 1 - (discount / 100);
    const originalPrice = changedPrice / percentage;
    return originalPrice;
}