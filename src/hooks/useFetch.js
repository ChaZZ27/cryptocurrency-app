import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [errorData, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
                fetch(url).then(async res => {
                    if(res.ok) {
                        const response = await res.json();
                        return response
                    } else {
                        const data = await res.json();
                        setError(data.error);
                        if(res.status === 429) {
                            return setError('Too many requests! Please try again later.');
                        }
                    }
                }).then(data => {
                    return setData(data);
                })
                .catch(error => {
                    setError(error)
                })
        }
        fetchData();
    }, [url])

    return { data, errorData };
}

export default useFetch;