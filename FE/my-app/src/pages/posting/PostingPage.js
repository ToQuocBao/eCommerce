function PostingPage() {
    return(
        <div class="content">
            <form name="posting-form" action="" method="post">
                <h2 class="form-title">
                    ĐĂNG KÍ CHO THUÊ
                </h2>
                <div class="form-content">
                    <div class="img-picker">
                        <label for="files">Chọn ảnh</label>
                        <input type="file" id="files" name="files" accept="image/gif, image/jpeg, image/png" multiple/><br/>
                    </div>
                    <div class="house-detail">
                        <div class="form-field">
                            <label for="title">Tiêu đề:</label>
                            <input type="text" name="title" id="title"/>
                        </div>
                        <div class="form-field">
                            <label for="cagetory">Loại nhà:</label>
                            <select name="cagetory" id="cagetory">
                                <option value="1">Nhà trọ</option>
                                <option value="2">Chung cư</option>
                                <option value="3">Nhà bán</option>
                            </select>
                        </div>
                        <div class="addr-label">Địa chỉ:</div><br/>
                        <div class="form-field">
                            <label for="province">Tỉnh:</label>
                            <select name="province" id="province">
                                <option value="1">Tp HCM</option>
                                <option value="2">Hà Nội</option>
                                <option value="3">Đà Nẵng</option>
                                <option value="4">Hải Phòng</option>
                            </select>
                        </div>

                        <div class="form-field">
                            <label for="quan">Quận/Huyện:</label>
                            <select name="quan" id="quan">
                                <option value="1">Quận 1</option>
                                <option value="2">Quẩn 2</option>
                                <option value="3">Quận 3</option>
                                <option value="4">Quận 4</option>
                            </select>
                        </div>

                        <div class="form-field">
                            <label for="xa">Phường/xã:</label>
                        <select name="xa" id="xa">
                            <option value="1">Xã A</option>
                            <option value="2">Xã B</option>
                            <option value="3">Xã C</option>
                            <option value="4">Xã D</option>
                        </select>
                        </div>

                        <div class="form-field">
                            <label for="st-num">Số nhà và tên đường:</label>
                            <input type="text" name="st-num" id="st-num"/>
                        </div>

                        <div class="form-field">
                            <label for="renting-fee">Phí thuê hàng tháng:</label>
                            <input type="number" name="renting-fee" id="renting-fee"/>
                        </div>

                        <div class="form-field">
                            <label for="available">Sẵn sàng sau:</label>
                            <input type="number" name="available" id="available"/>
                            <label for="available">tháng</label>
                        </div>
                    </div>

                    <div class="house-desc form-field">
                        <label for="desc">Mô tả:</label>
                        <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
                    </div>

                    <div class="service-selector form-field">
                        <label for="service">Loại dịch vụ đăng:</label>
                        <select name="service" id="service">
                            <option value="1">service 1</option>
                            <option value="2">service 2</option>
                            <option value="3">service 3</option>
                        </select>
                    </div>
                    
                    <div class="btn submit-btn">Xác nhận</div>
                    <a href="../"><div class="btn-alter cancel-btn">Hủy</div></a>

                </div>
            </form>

        </div>
    )
}

export default PostingPage