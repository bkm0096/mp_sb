import ModifyComponent from "../../components/todo/modifyComponent.tsx";


function ModifyPage() {
    return (
        <div className={'m-3 p-3 bg-blue-200 w-full h-full'}>
            <div>Todo Modify</div>
            <div>
                <ModifyComponent/>
            </div>
        </div>
    );
}

export default ModifyPage;