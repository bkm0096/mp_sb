import { useState } from "react";

interface CountProp{
    start: number,
    plusShow ?: boolean,
    minusShow ?: boolean,
    resetShow ?: boolean
}


function Count1({start,plusShow,minusShow}:CountProp) {

    const [num, setNum] = useState<number>(start)

    function change():void {
        setNum( num + 1)
    }

    return ( 
        <div>
            <h1>Count1</h1>
            <h2>{num}</h2>
            <button onClick={change}>CLICK</button>
        </div>
     );
}

export default Count1;