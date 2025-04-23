import CountDisplay from "./CountDisplay.jsx";
import CountButtons from "./CountButtons.jsx";
import {useState} from "react";

function CountContainer() {

    const [num, setNum] = useState(1)

    const plus = () => {
        setNum(num + 1)
    }


    const minus = () => {
        setNum(num - 1)
    }


    return (
        <div className={'p-3 justify-center items-center'}>
            <CountDisplay value={num}/>
            <CountButtons plusFn={plus} minusFn={minus}/>
        </div>
    );
}

export default CountContainer;