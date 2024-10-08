import React, {useCallback, useEffect, useMemo} from 'react';
import {useState} from "react";

export default {
    title: 'useEffect demo',
}
export const SimpleExample = () => {

    // const initialValue = useMemo(generateData, [])
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SimpleExample");
    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake( fake+ 1)}>fake+</button>
            <button onClick={() => setCounter( counter+ 1)}>counter+</button>
        </>
    );
}
export const SetTimeoutExample = () => {

    // const initialValue = useMemo(generateData, [])
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SetTimeoutExample");

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("SetTimeout");
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])
    //

    return (
        <>
            Hello, counter: {counter}
        </>
    );
}
