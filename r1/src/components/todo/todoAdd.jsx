import axios from "axios";
import TodoList from "./todoList.jsx";


function TodoAdd() {

    async function handleClick() {
        const data = {title:'React Todo Test', writer:'bgm'}

        const res =  await axios.post('http://localhost:8090/api/v1/todos', data)

        console.log(res)
    }

    return (
        <div>
            <button onClick={handleClick}>SEND</button>
            <TodoList/>
        </div>
    );
}

export default TodoAdd;