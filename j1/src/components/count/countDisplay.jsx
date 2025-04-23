import React from 'react';
import CountButtons from "./countButtons.jsx";
import {useSelector} from "react-redux";



function CountDisplay() {

    // const ctx = useContext(CountContext)

    const obj = useSelector(state => state.counter)
    console.log(obj)

    return (
        <div>
            Count Display <b>{obj.num}</b>
            <CountButtons/>
        </div>
    );
}

export default CountDisplay;