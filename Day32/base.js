
const template = `
<p>Hello F8</p>
<change-text></change-text>
<button class="change-text">Change text</button>
<button class="decrease">-</button>
<button class="increase">+</button>
`;

const templateEL = document.createElement('template')
templateEL.innerHTML = template

const templateNode = templateEL.content.cloneNode(true)

document.body.append(templateNode)

const h3List = [
    {
        content: "Never gonna give you up",
        count: 0
    },
    {
        content: "Never gonna let you down",
        count: 1
    },
    {
        content: "Never gonna tell a lie",
        count: 2
    },
    {
        content: "And hit you",
        count: 3
    },
]

class H3text {
    constructor(textContent, count) {
        this.textContent = textContent;
        this.count = count
    }

    renderH3() {
        const h3 = `
        ${this.textContent} : <span> ${this.count}</span>
        `
        const h3EL = document.createElement('h3')
        h3EL.innerHTML = h3
        document.body.append(h3EL)
    }
}

h3List.forEach((item) => {
    const h3 = new H3text(item.content, item.count)
    h3.renderH3()
})

const changeText = document.querySelector(".change-text")
const decreaseBtn = document.querySelector(".decrease") 
const increaseBtn = document.querySelector(".increase")
const spanList = document.querySelectorAll('h3 span') 

let countEven = 0
let countOdd = 0
spanList.forEach((span, index) => {
    if (index % 2 === 0) {
        decreaseBtn.addEventListener('click', () => {
            countEven -= 1
            countOdd += 1
            spanList[index].innerText = `${countEven}`
            spanList[index+1].innerText = `${countOdd}`
        })
    } else {
        increaseBtn.addEventListener('click', () => {
            countEven += 1
            countOdd += 2
            spanList[index].innerText = `${countOdd}`
            spanList[index-1].innerText = `${countEven}`
        })
    }
})

customElements.define('change-text', class extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerText = `T-rex`
        changeText.addEventListener('click', () => {
            this.classList.toggle("red")
        })
    }
}
)

