export type CategoriesFilterType = {
    name: string;
    price: { min: number, max: number } | null;
    rating: string[];
    brands: string[];
};