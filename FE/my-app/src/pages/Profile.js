import './css/profile.css'

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../components/Context';

function Profile() {
    const {login, setLogin} = useContext(LoginContext);
    console.log(login.userInfo)
    return(
        <div className="content">
            <h2>HỒ SƠ NGƯỜI DÙNG</h2>
            <div className="user-pf">
                <form action="" method="post">
                    <div className="form-field">
                        <label for="name">Tên người dùng:</label>
                        <input type="text" name="name" id="name" value={login.userInfo.name}/>
                    </div>
                    <div className="form-field">
                        <label for="Dob">Ngày sinh:</label>
                        <input type="date" name="Dob" id="Dob" value={login.userInfo.dob}/>
                    </div>
                    <div className="form-field">
                        <label for="username">Tài khoản:</label>
                        <input type="text" name="username" id="username" readonly value={login.userInfo.username}/>
                    </div>
                    <div className="form-field">
                        <label for="addr">Địa chỉ:</label>
                        <input type="text" name="addr" id="addr" value = {
                            (login.userInfo.address.street?(login.userInfo.address.street + ", "):'') + 
                            (login.userInfo.address.ward?(login.userInfo.address.ward + ", "):'') + 
                            (login.userInfo.address.district?(login.userInfo.address.district + ", "):'') + 
                            (login.userInfo.address.province?(login.userInfo.address.province):'')
                        }/>
                    </div>
                    <div className="form-field">
                        <label for="phone-num">Số điện thoại:</label>
                        <input type="text" name="phone-num" id="phone-num" value={login.userInfo.phoneNum}/>
                    </div>
                    <div className="form-field">
                        <label for="mail">Email:</label>
                        <input type="email" name="mail" id="mail" value={login.userInfo.email}/>
                    </div>
                    <div className="form-btns">
                        <Link to="/"><div className="btn submit-btn">Xác nhận</div></Link>
                        <Link to="/"><div className="btn submit-btn" id = "logout-btn" onClick={()=>{setLogin({isLogged: false, userInfo: {}})}}>Đăng xuất</div></Link>
                        <Link to="/ChangePassword"><div className="btn-alter cancel-btn">Đổi mật khẩu</div></Link>
                    </div>
                </form>
            </div>


            <h2>NHÀ ĐANG THUÊ</h2>
            <div className="renting-info">
                <div className="renting-list">
                    <div className="renting-item">
                        <div className="house-img">
                        </div>
                        <div className="phouse-detail">
                            <div className="house-title">
                                TITLE
                            </div>
                            
                            <div className="house-addr">
                                Số nhà, phường xã, huyện quận, thành tỉnh
                            </div>
                            <div className="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                            <div className="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                            <div className="house-period">Thời gian thuê: Từ ngày <span id="period-start">dd/mm/yyyy</span> đến ngày <span id="period-end">dd/mm/yyyy</span> </div>
                            <div className="contact-title">Liên hệ chủ nhà</div>
                            <div className="owner-info">
                                <ul>
                                    <li className="owner-name">Tên chủ nhà: A A A</li>
                                    <li className="owner-phone">Số điện thoại: 0123456789</li>
                                </ul>
                            </div>
                            <div className="contact-method">
                                Phương thức liên lạc
                                <ul>
                                    <li><a href="./">Facebook</a></li>
                                    <li><a href="./">Zalo</a></li>
                                    <li><a href="./">email</a></li>
                                    <li><a href="./">Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h2>NHÀ ĐANG CHO THUÊ</h2>
            <div className="leasing-info">
                <div className="renting-list">
                    <div className="renting-item">
                        <div className="phouse-detail">
                            <div className="house-title">
                                TITLE
                            </div>
                            
                            <div className="house-addr">
                                Số nhà, phường xã, huyện quận, thành tỉnh
                            </div>
                            <div className="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                            <div className="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                            <div className="house-period">Thời gian thuê: Từ ngày <span id="period-start">dd/mm/yyyy</span> đến ngày <span id="period-end">dd/mm/yyyy</span> </div>
                            <div className="contact-title">Liên hệ người thuê</div>
                            <div className="owner-info">
                                <ul>
                                    <li className="owner-name">Tên chủ nhà: A A A</li>
                                    <li className="owner-phone">Số điện thoại: 0123456789</li>
                                </ul>
                            </div>
                            <div className="contact-method">
                                Phương thức liên lạc
                                <ul>
                                    <li><a href="./">Facebook</a></li>
                                    <li><a href="./">Zalo</a></li>
                                    <li><a href="./">email</a></li>
                                    <li><a href="./">Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="house-img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile