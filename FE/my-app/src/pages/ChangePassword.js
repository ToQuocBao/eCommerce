function ChangePassword() {
    return (
        <div class="content">
            <h2>ĐĂNG NHẬP</h2>
            <div class="user">
                <form action="" method="post">
                    <div class="form-field">
                        <label for="name">Email của người dùng:</label>
                        <input type="password" name="name" id="name"/>
                    </div>
                    <div class="form-btns">
                        <div class="btn submit-btn">Xác nhận</div>
                        <a href="../"><div class="btn-alter cancel-btn">Hủy</div></a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword