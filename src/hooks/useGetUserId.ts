import { useState, useEffect } from "react"
import { useTypedSelector } from "./useTypedSelector";

export default function useGetUserId() {
    const [userId, setUserId] = useState<string | null>(null);
    const { userId: id } = useTypedSelector(state => state.user)

    useEffect(() => {
        if (!localStorage.getItem('user_id')) {
            setUserId(id)
        } else {
            setUserId(localStorage.getItem('user_id'))
        }
    }, [])

    return userId
}
