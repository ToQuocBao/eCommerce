import React, {useContext} from 'react';
import {LoginContext} from './Context'


function Header() {

    const {login, setLogin} = useContext(LoginContext);

    return(
        <div class="header">
            <a href="../"><div class="header-icon">
            </div></a>
            <div class="search-bar">
                <input type="text" placeholder="Tân bình, Tp HCM..."/>
            </div>
            <a href="../Posting/"><div class="lease-btn btn">
                Cho thuê
            </div></a>
            <a href="../Cart/"><div class="cart-btn btn">
                <div class="cart-icon"></div>
                Giỏ hàng
            </div></a>
            {login.isLoggedIn?
            <div id="account-btn">
                {/* <a href="../Profile/"> */}
                    <div class="account-btn btn-alter">
                    Lonhhhh
                    </div>
                {/* </a> */}
            </div>
            :<div id="account-btn" onClick={()=>setLogin({isLoggedIn: true, ...login})}>
                {/* <a href="../LogIn/"> */}
                    <div class="account-btn btn-alter">
                    Đăng nhập
                    </div>
                {/* </a> */}
            </div>
            }
        </div>
    )
}

export default Header