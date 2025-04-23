import CustomLayout from "../../layouts/customLayout.tsx";
import {NavLink, Outlet} from "react-router";

function TodoIndexPage() {
    return (
        <CustomLayout>
            <div className="flex gap-4 p-4 font-bold text-white">
                <div className="flex-1 bg-blue-900 p-4 shadow rounded">
                    <NavLink to={'/todo/list'}> LIST </NavLink>
                </div>
                <div className="flex-1 bg-blue-900 p-4 shadow rounded">
                    <NavLink to={'/todo/add'}> ADD </NavLink>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </CustomLayout>
    );
}

export default TodoIndexPage;