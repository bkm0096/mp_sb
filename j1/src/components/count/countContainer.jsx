import React, {createContext, useState} from 'react';
import CountDisplay from "./countDisplay.jsx";
import CountMenu from "./countMenu.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductsList} from "../../slices/productsSlice.js";

export const CountContext = createContext()

function CountContainer() {

    const [count, setCount] = useState(1)
    const user = useSelector(state => state.login)
    const plus =  () => {
        setCount(count + 1)
    }
    const obj = {count:count, plus:plus}
    const dispatch = useDispatch()
    const productResult = useSelector(state => state.products)
    const handleClick = () => {
        dispatch(getProductsList())
    }

    return (
        <CountContext.Provider value={obj}>
            <div>

                <button onClick={handleClick}>GET PRODUCTS</button>

                Count Container <b>{user.uid}</b>
                <CountMenu/>
                <CountDisplay/>
            </div>
        </CountContext.Provider>
    );
}

export default CountContainer;