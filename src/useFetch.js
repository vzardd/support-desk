import { useEffect, useState } from "react";

const useFetch = (url, method = "GET", body = null) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = () => {
        setIsLoading(true);
            fetch(url, {method: method, headers: {"Content-Type":"application/json"}, body: body})
            .then(
                res => {
                    if(!res.ok){
                        throw Error("Could not fetch data");
                    }
                    return res.json();
                }
            )
            .then(
                data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                }
            )
            .catch(
                err => {
                    if(err.name !== "AbortError"){
                        setError(err.message);
                        setIsLoading(false);
                        setData(null);
    
                    }
                }
            );
    }

    useEffect(
        () => {
            fetchData();
        }, [url]
    )

    return {data, isLoading, error, fetchData};
}

export default useFetch;