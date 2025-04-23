import axios from "axios";


function TodoList() {

    const handleClick = async () => {
        const res =  await axios.get('http://localhost:8090/api/v1/todos/list')

        console.log(res)
    }

    return (
        <div onClick={handleClick}>
            LIST
        </div>
    );
}

export default TodoList;