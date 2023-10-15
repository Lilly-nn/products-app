import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTypedSelector } from "./useTypedSelector";
import axios, { AxiosError } from "axios";

export default function useCheckAuthorized() {
    const router = useRouter();
    const { isAuthorized } = useTypedSelector((state) => state.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getUser() {
        try {
            const { data } = await axios.get('/api/check-auth');
            return {
                user: data,
                error: null,
            };
        } catch (err) {
            const error = err as AxiosError;
            if (error) {
                setError(true);
                localStorage.removeItem('user_id');
                router.push('/sign-up');
            }
            return {
                user: null,
                error,
            };
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (!userId && !isAuthorized) {
            router.push('/sign-up');
            return;
        }

        getUser();
    }, []);
    return { loading, error }
}
