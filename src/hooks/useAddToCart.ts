import { useDispatch } from "react-redux";
import { useTypedSelector } from "./useTypedSelector";
import { addToCart, removeFromCart } from "@/context/features/cart/cartSlice";
import { useEffect } from "react";
import { AddToCartHook } from "@/types/customHooksType";


export default function useAddToCart({ product, isAddedToBag, setIsAddedToBag }: AddToCartHook) {
    const dispatch = useDispatch();
    const { cartItems } = useTypedSelector((state) => state.cart);

    function addToBag() {
        if (!isAddedToBag) {
            dispatch(addToCart(product));
        } else {
            dispatch(removeFromCart(product));
        }
        setIsAddedToBag(!isAddedToBag)
    }

    useEffect(() => {
        if (!cartItems.length) setIsAddedToBag(false);
        if (cartItems.find(item => item.id === product.id)) {
            setIsAddedToBag(true);
        } else {
            setIsAddedToBag(false)
        }

    }, [product.id, cartItems, setIsAddedToBag]);

    return () => {
        addToBag()
    }
}
