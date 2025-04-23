
import {useEffect, useState} from "react";
import {getTodoList} from "../../api/todoApi.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";
import PageComponent from "../common/pageComponent.tsx";
import useCustomMove from "../../hooks/useCustomMove.ts";


const initState:PageResponse<Todo> = {
    dtoList: [],
    total:0,
    size: 0,
    end : 0,
    next: false,
    prev: false,
    page: 0,
    start: 0
}

function ListComponent() {

    const [serverData, setServerData] = useState(initState)

    const {loading,setLoading, refresh, page,size, moveListPage, moveRead} = useCustomMove()

    useEffect(() => {

        setLoading(true)

        //setTimeout(() => {
        getTodoList(page,size).then(data => {
            setServerData(data)
            setLoading(false)
        })
        //}, 1000)
    },[page,size, refresh])

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

            <LoadingComponent isLoading={loading}/>

            <div className="flex flex-wrap mx-auto justify-center p-6">
                List Component
            </div>
            <div>
                <ul className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-2">
                    {serverData.dtoList.map(todo =>
                        <li
                            key={todo.tno}
                            className="flex justify-between items-center p-4 border-b last:border-none hover:bg-gray-100"
                            onClick={() => moveRead(todo.tno || 0)}
                        >
                            <span className="font-medium text-gray-900">{todo.tno}</span>
                            <span className="text-gray-600">{todo.title}</span>
                            <span className="text-gray-600">{todo.writer}</span>
                        </li>
                    )}
                </ul>
            </div>

            <PageComponent serverData={serverData} moveListPage={moveListPage}></PageComponent>

        </div>
    );
}

export default ListComponent;