import CountDisplay from "./countDisplay.tsx";
import CountButtons from "./countButtons.tsx";
import {useState} from "react";


function CountContainer() {

    const [count, setCount] = useState<Count>({num:1})

    const change = (amount: number): void => {

        count.num += amount

        setCount({...count})
    }



    return (
        <div className={'bg-amber-200 h-1/3 text-center pt-4 text-4xl bold border-1'}>
            COUNT CONTAINER

            <CountDisplay countObj={count}/>
            <CountButtons change={change}/>
        </div>
    );
}

export default CountContainer;