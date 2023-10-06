import { ProductType } from "@/types/productsType";
import axios from "axios";
import { useEffect, useState } from "react";

export function useGetLiked() {
    const [likedProducts, setLikedProducts] = useState<ProductType[]>([]);
    const userId = localStorage.getItem('user_id');

    async function getLikedProducts() {
        const res = await axios.get('/api/liked/' + userId);
        setLikedProducts(res.data);
    }

    useEffect(() => {
        if (userId) {
            getLikedProducts()
        }
    }, [userId])

    return likedProducts;
}

export function useCheckLiked(setIsLiked: (arg: boolean) => void, id: number) {
    const likedProducts = useGetLiked();
    useEffect(() => {
        if (likedProducts.length > 0) {
            const isLiked = likedProducts.some((el) => el.id === id);
            if (isLiked) {
                setIsLiked(true);
            }
        }
    }, [likedProducts.length, id])
}

