
interface TodoListProps {
    arr: Todo[],
    remove: (tid:string) => void
}

function TodoList({arr, remove}: TodoListProps) {

    return (
        <ul>
            {arr.map(todo =>
                <li key={todo.tid}>
                    {todo.title}&nbsp;&nbsp;
                    <button
                        onClick={ () => {remove(todo.tid)}}
                        className={'border-1 bg-red-700 m-1 w-20 text-white'}
                    > DELETE </button>
                </li>
            )}
        </ul>
    );
}

export default TodoList;