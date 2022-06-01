import data from './data'
import HouseItem from "./HouseItem";


function HouseList(props) {
    var x = data.data;
    console.log(props.filter)
    return(
        <div className = "house-list">
            {x.map(data =>{
                var flag = true;
                if (!(!props.filter.cagetory.boarding && !props.filter.cagetory.apartment && !props.filter.cagetory.selling))
                    if (data.cagetory == "Nhà trọ" && !props.filter.cagetory.boarding) return;
                    else if (data.cagetory == "Chung Cư" && !props.filter.cagetory.apartment) return;
                    else if (data.cagetory == "Nhà bán" && !props.filter.cagetory.selling) return;
                if (props.filter.area.province){
                    if (props.filter.area.province != data.address.province) return;
                    else if (props.filter.area.district){
                        if (props.filter.area.district != data.address.district) return;
                        else if (props.filter.area.ward){
                            if (props.filter.area.ward != data.address.ward) return;
                        }
                    }
                }

                if (props.filter.price.ceil && props.filter.price.floor)
                    if ((props.filter.price.ceil < data.price)||(props.filter.price.floor > data.price)) return;
                else if (props.filter.ceil)
                    if (props.filter.price.ceil < data.price) return;
                else if (props.filter.floor)
                    if (props.filter.price.floor > data.price) return;

                return <HouseItem data = {data} />
            })}
        </div>
    )
}

export default HouseList