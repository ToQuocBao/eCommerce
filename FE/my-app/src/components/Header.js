import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {LoginContext} from './Context'


function Header() {

    const {login, setLogin} = useContext(LoginContext);

    return(
        <div className="header">
            <Link to="/"><div className="header-icon">
            </div></Link>
            <div className="search-bar">
                <input type="text" placeholder="Tân bình, Tp HCM..."/>
            </div>
            <Link to="/Posting"><div className="lease-btn btn">
                Cho thuê
            </div></Link>
            <Link to="/Cart"><div className="cart-btn btn">
                <div className="cart-icon"></div>
                Giỏ hàng
            </div></Link>
            {login?
            <div id="account-btn">
                <Link to = "/Profile">
                    <div className="account-btn btn-alter">
                    Lonhhhh
                    </div>
                </Link>
            </div>
            :<div id="account-btn">
                <Link to="/LogIn">
                    <div className="account-btn btn-alter">
                    Đăng nhập
                    </div>
                </Link>
            </div>
            }
        </div>
    )
}

export default Header