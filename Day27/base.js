var productItems = [
    {
        id: 1,
        name: "Sản phẩm 1",
        price: 1000,
    },
    {
        id: 2,
        name: "Sản phẩm 2",
        price: 2000,
    },
    {
        id: 3,
        name: "Sản phẩm 3",
        price: 3000,
    },
    {
        id: 4,
        name: "Sản phẩm 4",
        price: 4000,
    },
]

var cart = [
]

var productCart = document.querySelector(".product-items")
var userCart = document.querySelector(".user-cart")
var userCartTable = userCart.querySelector(".user-cart-table")
var total = userCartTable.querySelector(".total")

productCart.innerHTML += `<tr>
        <th>STT</th>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Thêm vào giỏ</th>
    </tr>
`
productItems.forEach(function(item) {
    productCart.innerHTML += `<tr>
        <td width="5%"> ${item.id} </td>
        <td width="50%">${item.name}</td>
        <td>${item.price}</td>
        <td width="15%"><input type="number" value="1" style="width: 90%; display: block; margin: 0 auto;">
        <button id="${item.id}" type="button" style="width: 100%;cursor:pointer;">Thêm vào giỏ</button>
        </td>
    </tr>
`
})
btnAddItems = productCart.querySelectorAll("button")
btnAddItems.forEach(function(btnAddItem, index) {
    var amount = 0;
    btnAddItem.onclick = function() {
        var idItemCart = this.id
        amount = +(this.parentElement.querySelector("input").value);
        var dataMatchItem = productItems.find(function(item) {
            if (idItemCart == item.id) {
                return item
            }
        })
        dataMatchItem["amount"] = amount
        var a = dataMatchItem.amount;
        console.log(cart.indexOf(dataMatchItem));
        if (cart.indexOf(dataMatchItem) == -1) {
            cart.push(dataMatchItem)
        } else {
        //     cart.find(function(cartItem) {
        //         if (cartItem.id === dataMatchItem.id) {
        //             Object.entries(cartItem).map(function(objKey) {
        //                 if (objKey[0] === 'amount') {
        //                     a += objKey[1] 
        //                     objKey[1] = a
        //                     console.log(objKey[1]);
        //                 }
        //             })
        //         }
        //     }) 
        return "1"
        }
    renderCart()

    }
})
function renderCart() {
    if (cart.length > 0) {
        console.log(cart[i]);
        for (var i = 0; i < cart.length; i++) {
            var newItem = `<tr>
                    <td width="5%">${i + 1}</td>
                    <td width="25%">${cart[i].name}</td>
                    <td width="25%">${cart[i].price}</td>
                    <td width="25%">${cart[i].amount}</td>
                    <td width="25%">${cart[i].amount * cart[i].price}</td>
                    <td><button>Xóa</button></td>
                </tr>
            `
            userCartTable.innerHTML += newItem
        }
        
        userCart.style.display = "block"
    }
} 

renderCart()


    

