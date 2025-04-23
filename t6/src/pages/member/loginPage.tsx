import LoginComponent from "../../components/member/loginComponent.tsx";
import TopMenuComponent from "../../components/menu/topMenuComponent.tsx";


function LoginPage() {
    return (
        <div>
            <TopMenuComponent/>
            <div>Login Page</div>

            <LoginComponent/>
        </div>
    );
}

export default LoginPage;