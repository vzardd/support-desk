import { useEffect, useState } from "react";

const useFetch = (url, method = "GET", body = null) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect( () => {
        setIsLoading(true);
        // const abortController = new AbortController();
        fetch(url, {method: method, headers: {"Content-Type":"application/json"}, body: body})
        .then(
            res => {
                console.log("1",res);
                if(!res.ok){
                    throw Error("Could not fetch data");
                }
                return res.json();
            }
        )
        .then(
            data => {
                console.log("2",data);
                setData(data);
                setIsLoading(false);
                setError(null);
            }
        )
        .catch(
            e => {
                console.log("3",e);
                if(e.name !== "AbortError"){
                    console.log("4 Abort");
                    setError(e.message);
                    setIsLoading(false);
                    setData(null);

                }
            }
        );
        // return (
        //     abortController.abort()
        // );
    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;