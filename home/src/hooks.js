import {useState, useEffect} from 'react';

export const useFetch = (url, initalValue) => {
    const [result, setResult] = useState(initalValue);
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setResult(json))
    }, []);
    return result;
}

export const useDynamicTransition = ({increment, delay, length}) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        console.log("delay", delay, "increment", increment)
        const intervall = setInterval(() => {
            setIndex(
                storedIndex => {
                    return (storedIndex+increment)%length
                });
        },  delay);

        return () => {
            console.log("remove", delay)
            clearInterval(intervall);
        };
    }, [delay, increment]);

    return index;
}