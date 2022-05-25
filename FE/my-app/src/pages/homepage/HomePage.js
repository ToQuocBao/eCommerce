

function HomePage(){
    return 
    <React.Fragment>
        <div class = "filter">
            <div class = "cagetory-filter">
                <h2 class="title">
                    LOẠI NHÀ
                </h2>
                <input type="checkbox" id="boarding" name="boarding" value="boarding"/>
                <label for="boarding"> Nhà trọ</label><br/>
                <input type="checkbox" id="apartment" name="apartment" value="apartment"/>
                <label for="apartment"> Chung cư</label><br/>
                <input type="checkbox" id="selling" name="selling" value="selling"/>
            <label for="selling"> Nhà bán</label>
            </div>
        </div>

        <HouseList></HouseList>
    </React.Fragment>
}

export default HomePage