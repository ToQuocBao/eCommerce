import './css/product.css'
import { useParams } from 'react-router-dom'
import data from '../components/data';
import users from './components/users';
import axios from 'axios';

function HouseDetail(props) {

    async function makePayment(){
        // const response = await fetch('http://127.0.0.1:4000/');
        // const data = await response.json();
        // console.log(data);
        console.log(props);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                houseInfo: props.houseInfo
            })
        };
        const response = await fetch('http://127.0.0.1:4000/pay', requestOptions);
        const data = await response.json();
        // this.setState({ postId: data.id });
        console.log(data);
    }

    return (
        <div class="house-detail">
            <div class="house-title">
                {props.houseInfo.title}
            </div>
            <div class="house-addr">
                {
                    (props.houseInfo.address.street?(props.houseInfo.address.street + ", "):'') + 
                    (props.houseInfo.address.ward?(props.houseInfo.address.ward + ", "):'') + 
                    (props.houseInfo.address.district?(props.houseInfo.address.district + ", "):'') + 
                    (props.houseInfo.address.province?(props.houseInfo.address.province):'')}
            </div>
            <div class="info-row">
                <div class="house-cagetory">Loại nhà: <span id="cagetory">{props.houseInfo.cagetory}</span></div>
                <div class="house-status">Tình trạng: <span id="status">Có trong vòng 3 tháng.</span></div>
                <div class="renting-fee">Phí thuê hàng tháng: <span id="fee">{props.houseInfo.price + "VNĐ"}</span></div>
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
                <div class="btn pay-btn" onClick={makePayment}>Đặt cọc ngay</div>
                <div class="btn-alter add2cart-btn">Thêm vào giỏ hàng</div>
            </div>
        </div>
    )
}

function HouseImg(props){
    return (
        <div class="house-imgs">
            <div class="house-img">
                <div class="img-prev-btn"></div>
                <div class="img-next-btn"></div>
            </div>
            <div class="house-img-nav">
                <div class="img-nav-cell" style={{
                    
                }}></div>
                <div class="img-nav-cell"></div>
                <div class="img-nav-cell"></div>
            </div>
        </div>
    )
}

function HouseInfo(props){
    return (
    <div class="house-info">
        <div class="row">
            <HouseImg houseInfo = {props.houseInfo}></HouseImg>
            <HouseDetail houseInfo = {props.houseInfo}></HouseDetail>
        </div>
        <div class="house-description">
            <div class="desc-title">Mô tả</div>
            <div class="description">{props.houseInfo.description}</div>
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

function Product(props){
    let {id} = useParams(); 
    return (
    <div class="content">
        <HouseInfo houseInfo = {data.data[id]}/>
    </div>
    )
}

export default Product