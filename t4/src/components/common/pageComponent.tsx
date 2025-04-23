

interface PageComponentProps<T> {

    serverData: PageResponse<T>
    moveListPage: (page:number) => void
}

function PageComponent({serverData, moveListPage}: PageComponentProps<unknown>) {

    const {page,prev,next,start,end} = serverData

    const pageNumArr =  Array.from({ length: end - start + 1 }, (_, i) => start + i);


    return (
        <div className="flex items-center justify-center space-x-2 mt-4 mb-4">

            {prev &&
                <div
                    onClick={() => { moveListPage(start - 1)}}
                    className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-gray-300 disabled:opacity-50">
                    이전
                </div>
            }

            {pageNumArr.map((num, idx) =>
                <div
                    key={idx}
                    onClick={() => { moveListPage(num)}}
                    className={`px-4 py-2 rounded-lg transition ${page === num ? 'bg-blue-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-300'}`}>
                    {num}
                </div>)}

            {next &&
                <div
                    onClick={() => { moveListPage(end + 1)}}
                    className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-gray-300 disabled:opacity-50">
                    다음
                </div>}
        </div>
    );
}

export default PageComponent;