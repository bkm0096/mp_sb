
'use client'


import { addServerAction } from "@/app/todo/actions";
import { useActionState } from "react";


interface AddResult {
    result: number;
    error?: string;
}

const initState: AddResult = {
    result: 0,
    error: '',
}


export const addAction = async (state: AddResult, formData: FormData): Promise<AddResult> => {

    console.log("--------------------------------")
    console.log(formData)

    return addServerAction({tno:13, complete:true, title:'aaa', writer:'aaa', dueDate:'2025-12-12'})
}


export default function TodoAddComponent() {

    const [state, action, isPending] = useActionState(addAction, initState)

    return (
        <div>
            {isPending && <div className={'bg-blue-600 text-amber-50'}>처리중........................</div>}
            {state.result !== 0 && <div className={'bg-amber-700 text-amber-50'}>처리 완료</div>}
            <form className="space-y-5" action={action}>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input type="text" id="title" name="title" placeholder="제목을 입력하세요"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required={true} />
                </div>

                <div>
                    <label htmlFor="writer" className="block text-sm font-medium text-gray-700 mb-1">Writer</label>
                    <input type="text" id="writer" name="writer" placeholder="작성자 이름"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required={true} />
                </div>
                <div>
                    <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                    <input type="date" id="dueDate" name="dueDate"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required={true} />
                </div>
                <div className="pt-4">
                    <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                        제출하기
                    </button>
                </div>
            </form>
        </div>
    )
}