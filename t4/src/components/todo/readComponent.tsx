import { useEffect, useState } from "react";
import { getTodo } from "../../api/todoApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";
import useCustomMove from "../../hooks/useCustomMove.ts";

const initState: Todo = {
    tno: 0,
    title: '',
    writer: '',
    regDate: '',
    modDate: ''
};

function ReadComponent() {

    const [todo, setTodo] = useState<Todo>(initState);

    const {tno, loading, setLoading, moveToModify, moveToList} = useCustomMove()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            getTodo(tno)
                .then(data => {
                    setTodo(data)
                    setLoading(false)
                })
                .catch(error => console.error("Error fetching todo:", error));
        }, 500)

    }, [tno]);

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">

            <LoadingComponent isLoading={loading}/>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Todo Read Component</h2>

            <div className="space-y-3">
                <div>
                    <label className="block text-gray-600 text-sm font-medium">번호</label>
                    <input type="text" value={todo.tno} readOnly
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text" value={todo.title} readOnly
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
                    >List</button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={() => moveToModify(todo.tno)}
                    >Modify</button>
                </div>
            </div>
        </div>
    );
}

export default ReadComponent;