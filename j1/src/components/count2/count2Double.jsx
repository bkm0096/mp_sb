import useCountStore from "../../stores/useCountStore.jsx";


function Count2Double() {

    const {makeDouble} = useCountStore()

    return (
        <div>
            <button onClick={makeDouble}>Double</button>
        </div>
    );
}

export default Count2Double;