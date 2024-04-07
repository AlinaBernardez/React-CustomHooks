import { useEffect, useState } from "react"

export const useFetchCharacters = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiCall = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                if(!response.ok) throw new Error(response.message)
                const json = await response.json()
                setData(json)
                setLoading(false)
                setError(null)
            }
            catch(err) {
                setError(err)
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        }
        apiCall()
    }, [url])

    return {
        data,
        error,
        loading
    }
}
