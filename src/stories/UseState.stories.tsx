import React, {useMemo} from 'react';
import {useState} from "react";

export default {
    title: 'useState demo',
}

function  generateData()  {
    // difficult counting
    console.log("generateDate")
    return 1
}
export const Example1 = () => {
    console.log("Example1");
    // const initialValue = useMemo(generateData, [])
    const [counter, setCounter] = useState<number>(generateData)

    return (
        <>
            <button onClick={() => setCounter(state =>state + 1)}>+</button>
            {counter}
        </>
    );
}
