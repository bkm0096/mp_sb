import useCustomMove from "../../hooks/useCustomMove.ts";
import {useEffect, useState} from "react";
import {deleteTodo, getTodo, updateTodo} from "../../api/todoApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";
import ResultComponent from "../common/resultComponent.tsx";

const initState:Todo = {
    tno:0,
    title:'',
    writer:'',
    regDate:'',
    modDate:''
}

function ModifyComponent() {

    //현재 tno 번호
    const {tno, moveToList, loading,setLoading, result, setResult, moveRead}  = useCustomMove()

    const [todo, setTodo] = useState<Todo>(initState)

    useEffect(() => {
        setLoading(true)

        getTodo(tno).then(data => {
            setTodo(data)
            setLoading(false)
        })

    }, [tno]);

    const [oper, setOper] = useState('M')

    const handleClickDelete = ()=> {

        setLoading(true)

        setTimeout(() => {

            deleteTodo(tno).then(() => {
                setLoading(false)
                setOper('D')
                setResult(true)
            })
        },1000)
    }

    const handleClickModify = () => {

        setLoading(true)

        setTimeout(() => {
            updateTodo(tno, todo.title).then(() => {
                setLoading(false)
                setOper('M')
                setResult(true)
            })
        },1000)
    }

    const closeFn = () =>  {

        setResult(false)

        if(oper === 'M') {
            moveRead(tno)
        }else {
            moveToList()
        }

    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">

            <ResultComponent show={result} msg={oper} closeFn={closeFn}></ResultComponent>



            <LoadingComponent isLoading={loading}/>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Todo Modify Component</h2>

            <div className="space-y-3">
                <div>
                    <label className="block text-gray-600 text-sm font-medium">번호</label>
                    <input type="text" value={todo.tno} readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text"
                           value={todo.title}
                           onChange={(e) => {
                               todo.title = e.target.value
                               setTodo({...todo})
                           }}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">작성자</label>
                    <input type="text" value={todo.writer} readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">등록일</label>
                    <input type="text" value={todo.regDate} readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">수정일</label>
                    <input type="text" value={todo.modDate} readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={moveToList}
                    >List
                    </button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={handleClickModify}
                    >Modify
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={handleClickDelete}
                    >Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModifyComponent;