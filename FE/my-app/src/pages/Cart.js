import './css/cart.css'

function Cart() {
    return(
        <div className="content">
            <div className="cart-item-list">
                <div className="cart-item">
                    <div className="house-img">
                    </div>
                    <div className="house-detail">
                        <div className="house-title">TITLE</div>
                        <div className="btn delete-btn">Xóa</div>
                        <div className="house-addr">Số nhà, phường xã, huyện quận, thành tỉnh</div>
                        <div className="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                        <div className="house-status">Tình trạng: <span id="status">Có trong vòng 3 tháng.</span></div>
                        <div className="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                        <div className="deposit-fee">Phí đặt cọc: 9000000đ</div>
                    </div>
                </div>

                <div className="cart-item">
                    <div className="house-img">
                    </div>
                    <div className="house-detail">
                        <div className="house-title">TITLE</div>
                        <div className="btn delete-btn">Xóa</div>
                        <div className="house-addr">Số nhà, phường xã, huyện quận, thành tỉnh</div>
                        <div className="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                        <div className="house-status">Tình trạng: <span id="status">Có trong vòng 3 tháng.</span></div>
                        <div className="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                        <div className="deposit-fee">Phí đặt cọc: 9000000đ</div>
                    </div>
                </div>

                <div className="cart-item">
                    <div className="house-img">
                    </div>
                    <div className="house-detail">
                        <div className="house-title">TITLE</div>
                        <div className="btn delete-btn">Xóa</div>
                        <div className="house-addr">Số nhà, phường xã, huyện quận, thành tỉnh</div>
                        <div className="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                        <div className="house-status">Tình trạng: <span id="status">Có trong vòng 3 tháng.</span></div>
                        <div className="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
                        <div className="deposit-fee">Phí đặt cọc: 9000000đ</div>
                    </div>
                </div>

                <div className="cart-btns">
                    <div className="btn payment-btn">Thanh toán tất cả</div>
                    <div className="btn-alter delete-all-btn">Xóa tất cả</div>
                </div>
            </div>
        </div>
    )
}

export default Cart