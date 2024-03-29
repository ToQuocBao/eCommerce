import HouseList from './components/HouseList';
import { useState } from 'react';
import './css/homepage.css'

function HomePage(){
    const [filter, setFilter] = useState({
        cagetory: {
            boarding: false,
            apartment: false,
            selling: false
        },
        area: {
            province: "",
            district: "",
            ward: ""
        },
        price:{
            ceil: 0,
            floor: 0
        }
    });
    // console.log(filter)

    

    return( 
    <div class = "home-page">
        <div class = "filter">
            <div class = "cagetory-filter">
                <h2 class="title">
                    LOẠI NHÀ
                </h2>
                <input type="checkbox" id="boarding" name="boarding" value="boarding" onChange={()=>{
                    setFilter({...filter, cagetory: {...filter.cagetory, boarding: !filter.cagetory.boarding}});
                }}/>
                <label for="boarding"> Nhà trọ</label><br/>
                <input type="checkbox" id="apartment" name="apartment" value="apartment" onChange={()=>{
                    setFilter({...filter, cagetory: {...filter.cagetory, apartment: !filter.cagetory.apartment}});
                }}/>
                <label for="apartment"> Chung cư</label><br/>
                <input type="checkbox" id="selling" name="selling" value="selling" onChange={()=>{
                    setFilter({...filter, cagetory: {...filter.cagetory, selling: !filter.cagetory.selling}});
                }}/>
                <label for="selling"> Nhà bán</label>
            </div>
            <div action="" class="area-filter">
                <h2 class="title">
                    KHU VỰC
                </h2>
                <label for="province">Tỉnh:</label>
                <select name="province" id="province" onChange={(e)=>{
                    setFilter({...filter, area: {...filter.area, province: e.target.value}});
                }}>
                    <option value=""></option>
                    <option value="Tp Hồ Chí Minh">Tp HCM</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="TP. Đà Nẵng">TP. Đà Nẵng</option>
                </select>

                <label for="district">Quận/Huyện:</label>
                <select name="district" id="district">
                    <option value=""></option>
                    <option value="1">Quận 1</option>
                    <option value="2">Quẩn 2</option>
                    <option value="3">Quận 3</option>
                    <option value="4">Quận 4</option>
                </select>

                <label for="ward">Phường/xã:</label>
                <select name="ward" id="ward">
                    <option value=""></option>
                    <option value="1">Xã A</option>
                    <option value="2">Xã B</option>
                    <option value="3">Xã C</option>
                    <option value="4">Xã D</option>
                </select>
            </div>

            <div action="" class="fee-filter">
                <h2 class="title">
                    Chi phí
                </h2>
                <label for="floor">Từ:</label>
                <input type="number" name="floor" id="floor" onChange={(e)=>{
                    setFilter({...filter, price: {...filter.price, floor: e.target.value}});
                }}/>
                <label for="cell">Đến:</label>
                <input type="number" name="cell" id="cell" onChange={(e)=>{
                    setFilter({...filter, price: {...filter.price, ceil: e.target.value}});
                }}/>
            </div>
        </div>
        <HouseList filter = {filter}/>
    </div>
    )
}

export default HomePage