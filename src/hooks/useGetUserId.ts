import { useState, useEffect } from "react"

export default function useGetUserId() {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        setUserId(localStorage.getItem('user_id'))
    }, [])

    return userId
}
