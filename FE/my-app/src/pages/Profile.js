import './css/profile.css'

function Profile() {
    return(
        <div class="content">
            <h2>HỒ SƠ NGƯỜI DÙNG</h2>
            <div class="user-pf">
                <form action="" method="post">
                    <div class="form-field">
                        <label for="name">Tên người dùng:</label>
                        <input type="text" name="name" id="name" value="Lonh"/>
                    </div>
                    <div class="form-field">
                        <label for="Dob">Ngày sinh:</label>
                        <input type="date" name="Dob" id="Dob" value=""/>
                    </div>
                    <div class="form-field">
                        <label for="username">Tài khoản:</label>
                        <input type="text" name="username" id="username" readonly value="username123"/>
                    </div>
                    <div class="form-field">
                        <label for="addr">Địa chỉ:</label>
                        <input type="text" name="addr" id="addr"/>
                    </div>
                    <div class="form-field">
                        <label for="phone-num">Số điện thoại:</label>
                        <input type="text" name="phone-num" id="phone-num"/>
                    </div>
                    <div class="form-field">
                        <label for="mail">Email:</label>
                        <input type="email" name="mail" id="mail"/>
                    </div>
                    <div class="form-btns">
                        <a href="../"><div class="btn submit-btn">Xác nhận</div></a>
                        <a href="../"><div class="btn submit-btn" id = "logout-btn">Đăng xuất</div></a>
                        <a href="../ChangePassword/"><div class="btn-alter cancel-btn">Đổi mật khẩu</div></a>
                    </div>
                </form>
            </div>


            <h2>NHÀ ĐANG THUÊ</h2>
            <div class="renting-info">
                <div class="renting-list">
                    <div class="renting-item">
                        <div class="house-img">
                        </div>
                        <div class="phouse-detail">
                            <div class="house-title">
                                TITLE
                            </div>
                            
                            <div class="house-addr">
                                Số nhà, phường xã, huyện quận, thành tỉnh
                            </div>
                            <div class="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                            <div class="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                            <div class="house-period">Thời gian thuê: Từ ngày <span id="period-start">dd/mm/yyyy</span> đến ngày <span id="period-end">dd/mm/yyyy</span> </div>
                            <div class="contact-title">Liên hệ chủ nhà</div>
                            <div class="owner-info">
                                <ul>
                                    <li class="owner-name">Tên chủ nhà: A A A</li>
                                    <li class="owner-phone">Số điện thoại: 0123456789</li>
                                </ul>
                            </div>
                            <div class="contact-method">
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
            <div class="leasing-info">
                <div class="renting-list">
                    <div class="renting-item">
                        <div class="phouse-detail">
                            <div class="house-title">
                                TITLE
                            </div>
                            
                            <div class="house-addr">
                                Số nhà, phường xã, huyện quận, thành tỉnh
                            </div>
                            <div class="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                            <div class="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                            <div class="house-period">Thời gian thuê: Từ ngày <span id="period-start">dd/mm/yyyy</span> đến ngày <span id="period-end">dd/mm/yyyy</span> </div>
                            <div class="contact-title">Liên hệ người thuê</div>
                            <div class="owner-info">
                                <ul>
                                    <li class="owner-name">Tên chủ nhà: A A A</li>
                                    <li class="owner-phone">Số điện thoại: 0123456789</li>
                                </ul>
                            </div>
                            <div class="contact-method">
                                Phương thức liên lạc
                                <ul>
                                    <li><a href="./">Facebook</a></li>
                                    <li><a href="./">Zalo</a></li>
                                    <li><a href="./">email</a></li>
                                    <li><a href="./">Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="house-img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile