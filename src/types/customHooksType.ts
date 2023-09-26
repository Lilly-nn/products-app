import { ProductType } from "./productsType";

export type AddToCartHook = {
    product: ProductType;
    isAddedToBag: boolean;
    setIsAddedToBag: (option: boolean) => void
}