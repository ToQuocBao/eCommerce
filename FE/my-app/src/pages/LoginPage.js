import { useState } from "react";
import users from "./components/users";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../components/Context";

function LoginPage() {

    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});
    const {login, setLogin} = useContext(LoginContext);

    console.log(loginInfo)

    const handleLogin = () =>{  
        console.log(loginInfo)
        for (let x of users){
            console.log(x)
            if (loginInfo.username == x.username && loginInfo.password == x.password){
                console.log("Hello?")
                setLogin({isLogged: true, userInfo: x})
                break;
            }
        }
    }

    return(
        <div class="content">
            <h2>ĐĂNG NHẬP</h2>
            <div class="user">
                <form action="" method="post">
                    <div class="form-field">
                        <label for="name">Tài khoản:</label>
                        <input type="text" name="name" id="name" onChange={(e) => {setLoginInfo({...loginInfo, username:e.target.value})}}/>
                    </div>
                    <div class="form-field">
                        <label for="password">Mật khẩu:</label>
                        <input type="password" name="password" id="password"  onChange={(e) => {setLoginInfo({...loginInfo, password:e.target.value})}}/>
                    </div>
                    <a class="forgotpw" href="../GetPassword/">Quên mật khẩu?</a>
                    <div class="form-btns">
                        <Link to="/"><div class="btn submit-btn" id = "login-btn" onClick={handleLogin}>Xác nhận</div></Link>
                        <Link to="/"><div class="btn-alter cancel-btn">Hủy</div></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage