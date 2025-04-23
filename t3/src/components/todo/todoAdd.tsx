
import {ChangeEvent, useCallback, useState} from "react";
import {postTodo} from "../../apis/todoApi.tsx";


const initState:Todo = {
    title: '',
    writer: ''
}

interface TodoAddProps {
    changeKey: () => void
}

function TodoAdd({changeKey}: TodoAddProps) {

    const [todoAdd, setTodoAdd] = useState(initState)
    const [fetching, setFetching] = useState(false)
    const [result, setResult] = useState(0)

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target

        setTodoAdd(prevState => ({ ...prevState, [name]: value }));
    },[])

    const handleClick = () => {

        setFetching(true)

        setTimeout(()=> {

            postTodo(todoAdd).then(tnoResult => {
                setFetching(false)
                setResult(tnoResult)
                changeKey()
            })

        },3000)


    }

    return (
        <div>

            {result !== 0  && <h1> RESULT: {result}</h1> }

            {fetching && <h1>Fetching...............</h1>}

            <h1> Todo Add </h1>

            <div>
                TITLE
                <input type='text' name='title'  value={todoAdd.title} onChange={handleChange}></input>
            </div>
            <div>
                WRITER
                <input type='text' name='writer' value={todoAdd.writer} onChange={handleChange}></input>
            </div>
            <div>
                <button onClick={handleClick} >SEND</button>
            </div>


        </div>
    );
}

export default TodoAdd;