import useCountStore, {CountState} from "../stores/countStore.tsx";
import TopMenuComponent from "../components/menu/topMenuComponent.tsx";


function CountPage() {

    const {num,inc,dec}:CountState = useCountStore()

    return (
        <div>
            <TopMenuComponent/>
            <div>Count Page</div>
            <div><h1>{num}</h1></div>
            <div>
                <button onClick={()=> inc(3)}>+</button>
                <button onClick={() => dec(2)}>-</button>
            </div>
        </div>
    );
}

export default CountPage;