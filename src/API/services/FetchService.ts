import { fetchData } from "../fetchData";

export class FetchService {
    static async fetchByCategory(category: string) {
        const { data, error } = await fetchData(`https://dummyjson.com/products/category/${category}`);
        return { data: data?.products, error }
    }
}