import data from './data'
import HouseItem from "./HouseItem";


function HouseList() {
    var x = data.data;
    return(
        <div className = "house-list">
            {x.map(data =>  <HouseItem data = {data} />)}
        </div>
    )
}

export default HouseList