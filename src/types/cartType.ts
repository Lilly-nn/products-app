import { CartProductType } from "./productsType";

export type CartType = {
    cartItems: CartProductType[];
    totalItemsAmount: number;
    totalPrice: number;
}
