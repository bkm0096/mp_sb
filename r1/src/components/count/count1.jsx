import {useState} from "react";

function Count1({value = 0, plusShow = true, minusShow = true, resetShow = true}) {

    const [num, setNum] = useState(value)

    // //3초마다 한 번씩 동작
    // setInterval(() => {
    //     setNum(num + 1)
    // }, 3000)

    const clickPlus = () => {
        setNum(num + 1)
    }

    const clickMinus = () => {
        setNum(num - 1)
    }

    const clickReset = () => {
        setNum(value)
    }

    return (
        <div>
            <h1>{num}</h1>
            <div>
                {plusShow &&
                <button onClick={clickPlus}>+</button>
                }
                {minusShow ?
                    <button onClick={clickMinus}>-</button>
                    :
                    <></>
                }
                {resetShow &&
                <button onClick={clickReset}>R</button>
                }
            </div>
        </div>
    );
}

export default Count1;