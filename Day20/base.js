// Bai 1 
function findMatch() {
    var arrA = [1, 4, 3, 2];
    var arrB = [5, 2, 6, 7, 1];
    var newArr = [];
    arrA.filter(function(numA) {
        if (arrB.includes(numA)) {
            newArr.push(numA);
        }
    })
    return newArr;
}

console.log(findMatch());

// Bai 2

function flatArr() {
    var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
    while (arr.some((arrChild) => Array.isArray(arrChild))) {
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatArr());

// Bai 3

function splitArr() {
    var arr = [["a", 1, true], ["b", 2, false]]
    var stringArr = [],
        numArr = [],
        tfArr = [],
        newArr = [1];
        while (arr.some((arrChild) => Array.isArray(arrChild))) {
            arr = [].concat(...arr)
        }
        arr.forEach(function(arrChild) {
            if (typeof(arrChild) === "number") {
                numArr.push(arrChild)
            }
            if (typeof(arrChild) === "string") {
                stringArr.push(arrChild)
            }
            if (typeof(arrChild) === "boolean") {
                tfArr.push(arrChild)
            }
        })
    newArr.splice(0, 1, numArr, stringArr, tfArr)
    return newArr
}

console.log(splitArr())

// Bài 4
var items = [
    {
    id: 1,
    title: "H1",
    content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    image:
        "https://fastly.picsum.photos/id/476/200/300.jpg?hmac=_vE--dw3keZ1r73AbtN9I362ItgpZJkRbRrJsB688Kw",
    },
    {
    id: 2,
    title: "H2",
    content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    image:
    "https://fastly.picsum.photos/id/623/200/300.jpg?hmac=2LlPuWimnDeGk-zZPKKgRVozFd3c-26BinXWcxfTtXo",
    coverRight: true,
    },
    {
    id: 3,
    title: "H3",
    content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    image:
    "https://fastly.picsum.photos/id/364/200/300.jpg?hmac=p9DQJ7EeVALsbnav-G_BYdU2et5ocKd4Qg_xwXjSc0k",
    },
];
function render() {
    var result = items.map((item, index) => {
        const isOdd = index % 2 !== 0;
        const rowReverse = isOdd ? "" : "flex-direction:row-reverse";

        return `
            <div class="item" 
            style = "display:flex; ${rowReverse}"
            >
                <div class="item_img">
                        <img
                            src="${item.image}"
                            alt="img"
                            width=200px;
                            height=200px;
                        />
                </div>
                <div class="item_content">
                        <h2 class="item_title">${item.title}</h2>
                        <p class="item_content">
                            ${item.content}
                        </p>
                </div>
            </div>
        `;
    });
    document.body.innerHTML = result;
}
render();