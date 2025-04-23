import useLoginStore from "../../stores/loginStore.tsx";
import {useState} from "react";


function LoginComponent() {

    const {login} = useLoginStore()
    const [text, setText] = useState('')
211111111

    return (
        <div>
            <h1>Login Component</h1>
            <input type={'text'} value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => login(text)}>Login</button>
        </div>
    );
}

export default LoginComponent;