import './product.css'

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

function HouseImg(){
    return (
        <div class="house-imgs">
            <div class="house-img">
                <div class="img-prev-btn"></div>
                <div class="img-next-btn"></div>
            </div>
            <div class="house-img-nav">
                <div class="img-nav-cell"></div>
                <div class="img-nav-cell"></div>
                <div class="img-nav-cell"></div>
            </div>
        </div>
    )
}

function HouseInfo(){
    return (
    <div class="house-info">
        <div class="row">
            <HouseImg></HouseImg>
            <HouseDetail></HouseDetail>
        </div>
        <div class="house-description">
            <div class="desc-title">Mô tả</div>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique, dolor sed viverra rutrum, velit ex efficitur tellus, ut sodales neque felis eu lectus.</div>
        </div>
        <div class="rent-contract">
            <div class="cont-title">Hợp đồng</div>
            <div class="contract">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique, dolor sed viverra rutrum, velit ex efficitur tellus, ut sodales neque felis eu lectus.</div>
        </div>
        <div class="map">
            <div class="map-title">Địa chỉ</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31453.919256317517!2d105.46760310819882!3d9.788061201778048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0e9476e57a86d%3A0x282d0dd9bc868a2f!2zUGjGsOG7nW5nIDUsIFRwLiBW4buLIFRoYW5oLCBI4bqtdSBHaWFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1651487025912!5m2!1svi!2s" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    )
}

function Product(){
    return (
    <div class="content">
        <HouseInfo/>
    </div>
    )
}

export default Product