function LoginPage() {
    return(
        <div class="content">
            <h2>ĐĂNG NHẬP</h2>
            <div class="user">
                <form action="" method="post">
                    <div class="form-field">
                        <label for="name">Tài khoản:</label>
                        <input type="password" name="name" id="name"/>
                    </div>
                    <div class="form-field">
                        <label for="Dob">Mật khẩu:</label>
                        <input type="password" name="Dob" id="Dob" value=""/>
                    </div>
                    <a class="forgotpw" href="../GetPassword/">Quên mật khẩu?</a>
                    <div class="form-btns">
                        <a href="../"><div class="btn submit-btn" id = "login-btn">Xác nhận</div></a>
                        <a href="../"><div class="btn-alter cancel-btn">Hủy</div></a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage