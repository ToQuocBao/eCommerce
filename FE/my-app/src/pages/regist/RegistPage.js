function RegistPage() {
    return(
        <div class="content">
            <h2>ĐĂNG NHẬP</h2>
            <div class="user">
                <form action="" method="post">
                    <div class="form-field">
                        <label for="name">Tên:</label>
                        <input type="text" name="name" id="name" value=""/>
                    </div>
                    <div class="form-field">
                        <label for="Dob">Ngày sinh:</label>
                        <input type="date" name="Dob" id="Dob" value=""/>
                    </div>
                    <div class="form-field">
                        <label for="username">Tài khoản:</label>
                        <input type="text" name="username" id="username"/>
                    </div>
                    <div class="form-field">
                        <label for="password">Mật khẩu:</label>
                        <input type="password" name="password" id="password" value=""/>
                    </div>
                    <div class="form-field">
                        <label for="repassword">Nhập lại mật khẩu:</label>
                        <input type="password" name="repassword" id="repassword" value=""/>
                    </div>
                    <div class="form-field">
                        <label for="mail">Email:</label>
                        <input type="email" name="mail" id="mail" value=""/>
                    </div>
                    <div class="form-field">
                        <label for="phonenum">Số điện thoại:</label>
                        <input type="text" name="phonenum" id="phonenum" value=""/>
                    </div>
                    <div class="form-btns">
                        <div class="btn submit-btn">Xác nhận</div>
                        <div class="btn-alter cancel-btn">Hủy</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistPage