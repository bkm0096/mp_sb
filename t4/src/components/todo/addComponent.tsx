import {useState} from "react";
import {postTodo} from "../../api/todoApi.tsx";
import useCustomMove from "../../hooks/useCustomMove.ts";
import LoadingComponent from "../common/loadingComponent.tsx";
import ResultComponent from "../common/resultComponent.tsx";

function AddComponent() {

    const [todo, setTodo] = useState({title:'', writer:''})
    const [msg, setMsg] = useState('')
    const {moveToList, loading, setLoading, result, setResult} = useCustomMove()

    const handleClick = () => {

        setLoading(true)

        setTimeout(() => {
            postTodo(todo).then(todoNum => {
                setLoading(false)
                setMsg(`New Todo ${todoNum} Added`)
                setResult(true)
            })
        }, 1000)
    }

    const closeFn = () => {
        setResult(false)
        moveToList()
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">

            <ResultComponent show={result} msg={msg} closeFn={closeFn}/>
            <LoadingComponent isLoading={loading}/>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Todo Add Component</h2>

            <div className="space-y-3">
                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text" value={todo.title}
                           onChange={e => {
                               todo.title = e.target.value
                               setTodo({...todo})
                           }}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">작성자</label>
                    <input type="text" value={todo.writer}
                           onChange={e => {
                               todo.writer = e.target.value
                               setTodo({...todo})
                           }}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={handleClick}
                    >Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddComponent;