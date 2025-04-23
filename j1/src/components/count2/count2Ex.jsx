import React from 'react';
import useCountStore from "../../stores/useCountStore.jsx";
import Count2Double from "./count2Double.jsx";

function Count2Ex() {

    const {count, inc, dec} = useCountStore()

    return (
        <div>
            <h1>Count2 Ex </h1>
            <h1>COUNT: {count}  </h1>
            <div>
                <button onClick={() => inc(3)}>PLUS</button>
                <button onClick={() => dec(2)}>MINUS</button>
                <Count2Double/>
            </div>
        </div>
    );
}

export default Count2Ex;