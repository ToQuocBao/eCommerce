const priceSample  = [2000000, 5000000, 8000000]

const cagetorySample = ["Nhà trọ", "Chung Cư", "Nhà bán"]

const statusSample = ["Sẵn sàng", "Trong 3 tháng", "Hơn 1 năm"]

const addrSample = [
    {
        street: "Mai Chí Thọ",
        ward: "Linh Trung",
        district: "Thủ Đức",
        province: "Tp Hồ Chí Minh"
    },
    {
        street: "Phạm Huy Thông",
        ward: "",
        district: "Ba Đình",
        province: "Hà Nội"
    },
    {
        street: "",
        ward: "Thọ Quang",
        district: "Sơn Trà,",
        province: "TP. Đà Nẵng"
    }
]

var data = []

function randomItem(items){
    return items[Math.floor(Math.random()*items.length)];
}


function generateSample(){
    for (var i = 0; i < 21; i++){
        var item = {
            id: i,
            owner: {
                name: "Nguyễn A",
                phone: "012345678",
                fb: "",
                zalo: "",
                email: "",
                twitter: ""
            },
            deposite: randomItem(priceSample) * 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique, dolor sed viverra rutrum, velit ex efficitur tellus, ut sodales neque felis eu lectus.",
            img: ['house1.jpg', 'house2.jpg', 'house3.jpg'],
            onwer: Math.floor(Math.random()*20),
            renter: Math.floor(Math.random()*21) - 1,
        };

        const cagetory = randomItem(cagetorySample);
        item.title = cagetory + " " + i.toString();
        item.cagetory = cagetory;
        item.price = randomItem(priceSample);
        item.status = randomItem(statusSample)
        item.address = randomItem(addrSample)

        data.push(item);
    }
}

generateSample()

export default {data}
