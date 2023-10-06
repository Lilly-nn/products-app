import { ProductType } from "@/types/productsType";
import axios from "axios";
import { useEffect, useState } from "react";
import useGetUserId from "./useGetUserId";

export function useGetLiked() {
    const userId = useGetUserId();
    const [likedProducts, setLikedProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getLikedProducts() {
        try {
            const res = await axios.get('/api/liked/' + userId);
            setLikedProducts(res.data);
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        if (userId) {
            getLikedProducts()
        }
    }, [userId])

    return { likedProducts, loading, error };
}

export function useCheckLiked(setIsLiked: (arg: boolean) => void, id: number) {
    const { likedProducts } = useGetLiked();
    useEffect(() => {
        if (likedProducts.length > 0) {
            const isLiked = likedProducts.some((el) => el.id === id);
            if (isLiked) {
                setIsLiked(true);
            }
        }
    }, [likedProducts.length, id])
}

