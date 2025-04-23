import {NavLink} from "react-router";
import useLoginStore from "../../stores/loginStore.tsx";


function TopMenuComponent() {

    const {user, logout} = useLoginStore()

    return (
        <div>
            <hr/>
            TOP MENU
            <div>
                {user &&
                    <div>
                        {user}님 반갑습니다.
                        <button onClick={logout}>Logout</button>
                    </div>
                }
            </div>
            <NavLink to={'../member/login'}> LOGIN </NavLink>
            <NavLink to={'../todo/list'}> TODO </NavLink>
            <hr/>
        </div>
    );
}

export default TopMenuComponent;