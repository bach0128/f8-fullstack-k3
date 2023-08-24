// Bai 1 
var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

var errorsArr = Object.entries(errors);
function getError(field) {
    errorsArr.filter(function(error) {
        if (error[0] === field) {
            result = Object.entries(error[1])[0][1]
            return result
        }
    })
    console.log(result);
}
getError('name')

// Bai 2 
const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomer() {
    var ageCus = [];
    var nameCus = [];
    customers.forEach(function(customer, index) {
        ageCus.push(customer.age)
        nameCus.push([customer.name])
        nameCus.forEach(function(t, key) {
            for (index in t ) {
                var u = t[index].split(' ');
                var shortName = [];
                shortName.push(u[0])
                shortName.push(u[u.length - 1])
                customer.shortName = shortName.join(' ');
            }
        })
    })
    ageCus.sort(function(a, b) {
        if( a <  b ) {
            return -1
        }
    })
    var newArr = []
        for ( i in ageCus ) {
            customers.map(function(customer) {
                if (ageCus[i] === customer.age) {
                    newArr.push(customer)
                }
            })
        }
    console.log(newArr);
}

createCustomer();

// Bai 3s
function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = "user";
}
var userInfor = [];
function register(name, password, email) {
    if (!name || !password || !email) {
        console.log("Vui lòng nhập đầy đủ thông tin!");
    }

    var existEmail = userInfor.find((user) => user.email === email);
    if (existEmail) {
        console.log("Email đã tồn tại!");
    }

    var newUser = new User(name, password, email);
    userInfor.push(newUser);
    console.log("Đăng ký thành công!");
    return newUser;
}    

function login(email, password) {
    const user = userInfor.find((user) => user.email === email && user.password === password);
    if (user) {
        console.log("Đăng nhập thành công!");
        return user;
    } else {
        console.log("Thông tin đăng nhập không hợp lệ");
        return 0;
    }
}
register("Bach Xuan", "666666", "xuanbach@email.com");
const formLogin = login("xuanbach@email.com", "666666");
console.log("userInfor =", userInfor);
console.log("userInforLogin =", formLogin);
