

import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

async function TodoListPage({searchParams}: {searchParams:Promise<any>} ) {

    const search = await searchParams

    console.log(search)

    // const data = await prisma.tbl_todo.findMany({
    //     take: 10
    // })
    //
    // console.log(data)

    return (
        <div>
            <div className={'text-4xl'}>Todo List Page</div>
        </div>
    )

}

export default TodoListPage