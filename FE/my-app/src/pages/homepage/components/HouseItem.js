
function HouseItem(props){
    return (
    <div className = "house-item">
        <a href = "./product">
            <div className="house-img">
            <div className="house-status">{props.data.status}</div>
            </div>
            <div className="house-addr">
                {props.data.address.street + ", " + props.data.address.ward + ", " + props.data.address.district + ", " + props.data.address.province}
            </div>
            <div className="house-title">
                {props.data.title}
            </div>
            <div className="house-desc">{props.data.description}</div>
        </a>
    </div>
    )
}

export default HouseItem