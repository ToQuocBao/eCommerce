function Cart() {
    return(
        <div class="content">
            <div class="filter">
                <form action="" class="cagetory-filter">
                    <h2 class="title">
                        LOẠI NHÀ
                    </h2>
                    <input type="checkbox" id="boarding" name="boarding" value="boarding"/>
                    <label for="boarding"> Nhà trọ</label><br/>
                    <input type="checkbox" id="apartment" name="apartment" value="apartment"/>
                    <label for="apartment"> Chung cư</label><br/>
                    <input type="checkbox" id="selling" name="selling" value="selling"/>
                    <label for="selling"> Nhà bán</label>
                </form>

                <form action="" class="area-filter">
                    <h2 class="title">
                        KHU VỰC
                    </h2>
                    <label for="province">Tỉnh:</label>
                    <select name="province" id="province">
                        <option value="1">Tp HCM</option>
                        <option value="2">Hà Nội</option>
                        <option value="3">Đà Nẵng</option>
                        <option value="4">Hải Phòng</option>
                    </select>

                    <label for="quan">Quận/Huyện:</label>
                    <select name="quan" id="quan">
                        <option value="1">Quận 1</option>
                        <option value="2">Quẩn 2</option>
                        <option value="3">Quận 3</option>
                        <option value="4">Quận 4</option>
                    </select>

                    <label for="xa">Phường/xã:</label>
                    <select name="xa" id="xa">
                        <option value="1">Xã A</option>
                        <option value="2">Xã B</option>
                        <option value="3">Xã C</option>
                        <option value="4">Xã D</option>
                    </select>
                </form>

                <form action="" class="fee-filter">
                    <h2 class="title">
                        Chi phí
                    </h2>
                    <label for="floor">Từ:</label>
                    <input type="number" name="floor"/>
                    <label for="ceil">Đến:</label>
                    <input type="number" name="ceil"/>
                </form>

            </div>
            <div class="cart-item-list">
                <div class="cart-item">
                    <div class="house-img">
                    </div>
                    <div class="house-detail">
                        <div class="house-title">TITLE</div>
                        <div class="btn delete-btn">Xóa</div>
                        <div class="house-addr">Số nhà, phường xã, huyện quận, thành tỉnh</div>
                        <div class="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                        <div class="house-status">Tình trạng: <span id="status">Có trong vòng 3 tháng.</span></div>
                        <div class="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                        <div class="deposit-fee">Phí đặt cọc: 9000000đ</div>
                    </div>
                </div>

                <div class="cart-item">
                    <div class="house-img">
                    </div>
                    <div class="house-detail">
                        <div class="house-title">TITLE</div>
                        <div class="btn delete-btn">Xóa</div>
                        <div class="house-addr">Số nhà, phường xã, huyện quận, thành tỉnh</div>
                        <div class="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                        <div class="house-status">Tình trạng: <span id="status">Có trong vòng 3 tháng.</span></div>
                        <div class="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                        <div class="deposit-fee">Phí đặt cọc: 9000000đ</div>
                    </div>
                </div>

                <div class="cart-item">
                    <div class="house-img">
                    </div>
                    <div class="house-detail">
                        <div class="house-title">TITLE</div>
                        <div class="btn delete-btn">Xóa</div>
                        <div class="house-addr">Số nhà, phường xã, huyện quận, thành tỉnh</div>
                        <div class="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                        <div class="house-status">Tình trạng: <span id="status">Có trong vòng 3 tháng.</span></div>
                        <div class="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                        <div class="deposit-fee">Phí đặt cọc: 9000000đ</div>
                    </div>
                </div>

                <div class="cart-btns">
                    <div class="btn payment-btn">Thanh toán tất cả</div>
                    <div class="btn-alter delete-all-btn">Xóa tất cả</div>
                </div>
            </div>
        </div>
    )
}

export default Cart