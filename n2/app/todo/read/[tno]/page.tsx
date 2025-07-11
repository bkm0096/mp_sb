import TodoReadComponent from "@/app/components/todo/readComponent"

type Params = {
    tno: String;
}

export const revalidate = 60


export async function generateStaticParams(): Promise<Params[]> {
    
    const res = await fetch("http:/localhost:8080/api/todo/list?size=20")
    const todos: PageResponse<Todo> = await res.json()

    return todos.dtoList.map( (todo: Todo) => ({tno: String(todo.tno)}) ) 
}


//fetch 해야하면 async
async function TodoReadPage({params}: {params:Promise<any>}) {
    
    const param = await params
    const tno = param.tno

    //tno를 이용해서 데이터 패치
    const res = await fetch(`http:/localhost:8080/api/todo/${tno}`)
    const data = await res.json()

    console.log(data)

    return (
        <div>
            <div className={'text-4xl'}>Todo Read Page</div>

            <TodoReadComponent todo={data}/>
        </div>
    )
}

export default TodoReadPage