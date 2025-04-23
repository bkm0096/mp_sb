
'use server'

export async function addServerAction(todo: Todo) {
    
    //const res = await fetch('http://localhost:8080/todo/add')

    //실제 서버 액션을 호출
    console.log("adding server action")
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { result: 123 }
}