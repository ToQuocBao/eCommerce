function HouseDetail() {
    return (
        <div class="house-detail">
            <div class="house-title">
                TITLE
            </div>
            <div class="house-addr">
                Số nhà, phường xã, huyện quận, thành tỉnh
            </div>
            <div class="info-row">
                <div class="house-cagetory">Loại nhà: <span id="cagetory">Nhà trọ</span></div>
                <div class="house-status">Tình trạng: <span id="status">Có trong vòng 3 tháng.</span></div>
                <div class="renting-fee">Phí thuê hàng tháng: <span id="fee">4500000 đ</span></div>
            </div>
            <div class="house-owner-contact">
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
            <div class="deposit-fee">Phí đặt cọc: 9000000đ</div>
            <div class="product-btns">
                <div class="btn pay-btn">Đặt cọc ngay</div>
                <div class="btn-alter add2cart-btn">Thêm vào giỏ hàng</div>
            </div>
        </div>
    )
}

export default HouseDetail