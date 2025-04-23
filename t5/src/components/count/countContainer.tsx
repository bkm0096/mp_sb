import {useSelector} from "react-redux";
import {RootState} from "../../store.tsx";
import {CountState} from "../../slices/countSlice.tsx";
import useCustomLogin from "../../hooks/useCustomLogin.tsx";

function CountContainer() {

    const {count}:CountState = useSelector( (state: RootState) => state.countSlice)

    const {loginDTO} = useCustomLogin()

    console.log(count)

    return (
        <>
            <h1>{loginDTO.username}</h1>
            <h1>COUNT {count}</h1>
        </>
    );
}

export default CountContainer;