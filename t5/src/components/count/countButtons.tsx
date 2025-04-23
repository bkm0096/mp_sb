import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store.tsx";
import {dec, inc} from "../../slices/countSlice.tsx";


function CountButtons() {

    const dispatch = useDispatch<AppDispatch>()

    return (
        <div>
            <button onClick={() => {
                dispatch(inc(10))
            }}>+</button>
            <button onClick={() => {
                dispatch(dec(5))
            }}>-</button>
        </div>
    );
}

export default CountButtons;