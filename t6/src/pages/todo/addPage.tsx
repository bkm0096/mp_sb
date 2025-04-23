import {useNavigate} from "react-router";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postTodo} from "../../api/todoApi.tsx";



const sampleState:TodoAdd = {
    title:'Test-096',
    writer:'tester',
    dueDate:'2025-03-14'
}


function AddPage() {

    const navigate = useNavigate()

    const addMutation = useMutation({
        mutationFn: (todo:TodoAdd) => postTodo(todo),
        onSuccess: data => {
            console.log("onSuccess", data)
        }
    })

    const handleClick = () => {

        addMutation.mutate(sampleState)
    }

    const queryClient = useQueryClient()

    const moveToList = () => {
        queryClient.invalidateQueries({queryKey: ['todo/list']})
        navigate('../todo/list')
    }

    return (
        <div>
            {addMutation.isPending && <h1>Pending.......</h1>}
            {addMutation.isSuccess && <h1 onClick={moveToList}>Success {addMutation.data.TNO}</h1>}
            <div>Todo Add</div>
            <button onClick={handleClick}>ADD</button>
        </div>
    );
}

export default AddPage;