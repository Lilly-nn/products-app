import axios, { AxiosError } from 'axios';

export async function fetchData(url: string) {
    try {
        const res = await axios.get(url);
        const data = res.data;
        return {
            data
        };
    } catch (err) {
        if (err instanceof AxiosError) {
            return {
                error: err.message,
                data: null
            };
        }
        return {
            error: 'something went wrong',
            data: null
        };
    }
}

