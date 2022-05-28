import './css/cart.css'

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../components/Context'
import data from '../components/data'
import users from "./components/users";

function CartItem(props) {
    const houseInfo = data.data[props.houseId]
    return (
        <div className="cart-item">
            <div className="house-img">
            </div>
            <div className="house-detail">
                <div className="house-title">{houseInfo.title}</div>
                <div className="btn delete-btn">Xóa</div>
                <div className="house-addr">{
                    (houseInfo.address.street?(houseInfo.address.street + ", "):'') + 
                    (houseInfo.address.ward?(houseInfo.address.ward + ", "):'') + 
                    (houseInfo.address.district?(houseInfo.address.district + ", "):'') + 
                    (houseInfo.address.province?(houseInfo.address.province):'')
                }</div>
                <div className="house-cagetory">Loại nhà: <span id="cagetory">{houseInfo.cagetory}</span></div>
                <div className="house-status">Tình trạng: <span id="status">Có trong vòng 3 tháng.</span></div>
                <div className="renting-fee">Phí thuê hàng tháng: <span id="fee">{houseInfo.price} đ</span></div>
                <div className="deposit-fee">Phí đặt cọc: {houseInfo.price * 2} đ</div>
            </div>
        </div>
    )
}

function Cart() {

    const {login, setLogin} = useContext(LoginContext);

    console.log(login.userInfo)
    return(
        <div className="content">
            <div className="cart-item-list">
                {login.userInfo.cart.map(x => <CartItem houseId = {x} />)}

                <div className="cart-btns">
                    <div className="btn payment-btn">Thanh toán tất cả</div>
                    <div className="btn-alter delete-all-btn">Xóa tất cả</div>
                </div>
            </div>
        </div>
    )
}

export default Cart