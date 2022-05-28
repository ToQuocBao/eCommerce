const roles = ['user', 'admin', 'mod']
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

var users = []

function randomItem(items){
    return items[Math.floor(Math.random()*items.length)];
}

function generateSample(){
    for (var i = 0; i < 21; i++){
        var item = {
            id: i,
            name: "Lonh" + i.toString(),
            dob: Date("01/01/0001"),
            username: 'username' + i.toString(),
            password: 'password' + i.toString(),
            address: randomItem(addrSample),
            phoneNum: '0123456789',
            email: 'mail' + i.toString() + '@gmail.com',
            houseRenting: [Math.floor(Math.random()*20)],
            houseLeasing: [Math.floor(Math.random()*20)],
            cart: [Math.floor(Math.random()*20), Math.floor(Math.random()*20)]
        };
        users.push(item);
    }
}

generateSample()

export default users