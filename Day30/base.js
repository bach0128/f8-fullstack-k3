var header = document.querySelector("section header")
var content = document.querySelector(".content")

// build header
// header left
var div1 = document.createElement('div')
div1.classList.add("header-left")

var div = document.createElement('div')
div.classList.add("header-file")

var span = document.createElement("span")
span.innerText = "File"
span.innerHTML += "<i class='fa-solid fa-sort-down'></i>"
span.addEventListener("click", function() {
    div2.classList.toggle("active")
})
div.append(span)

var input = document.createElement('input')
input.type = "text"
input.value = "untitled"
input.classList.add('file-name')
div.append(input)

var div2 = document.createElement('div')
div2.classList.add('wrap')

var btn = document.createElement("button")
btn.classList.add("btn-1")
btn.addEventListener('click', function() {
    content.textContent = ""
    div2.classList.remove("active")
})
btn.innerText = "New"

div2.append(btn)


var btn = document.createElement("button")
btn.classList.add("btn-2")
btn.addEventListener('click', function() {
    html2pdf().from(content).save(input.value);
    div2.classList.remove("active")
})
btn.innerText = "Save as TXT"

div2.append(btn)

var btn = document.createElement("button")
btn.classList.add("btn-3")
btn.addEventListener('click', function() {
    html2pdf().from(content).save(input.value);
    div2.classList.remove("active")
})
btn.innerText = "Save as PDF"

div2.append(btn)

div.append(div2)

div1.append(div)

header.append(div1)

// header right
var divR = document.createElement('div')
divR.classList.add("header-right")

var btnB = document.createElement("button")
btnB.classList.add("bold")
btnB.innerText = "b"

divR.append(btnB)

var btnU = document.createElement("button")
btnU.classList.add("underline")
btnU.innerText = "u"

divR.append(btnU)

var btnI = document.createElement("button")
btnI.classList.add("italic")
btnI.innerText = "i"

divR.append(btnI)

header.append(divR)

// content
var docUser;
var spanCharacters = document.querySelector('.count-characters>span')
var spanWord = document.querySelector('.count-word>span')

// var countCharacters = 0;

var getTextContent = function() {
    content.addEventListener('keydown', function(e) {
    docUser = e.target.textContent

    let countWord = 1; 
    
    if (docUser) {
        if (e.keyCode === 13) {
            this.stopPropagation()
            ++countWord 
        } else {
            for (var i = 0; i < docUser.length; i++) {
                if (docUser.charCodeAt(i-1) === 32) {
                    ++countWord
                }
            }
        }
        spanWord.innerText = countWord
    }
    spanCharacters.innerText = docUser.length
    })

    const buttons = divR.querySelectorAll("button");

    for (const button of buttons) {
        const typeText = button.getAttribute("class");
        button.addEventListener("click", function() {
            content.execCommand(typeText, false, null)
            // document.execCommand(typeText, false, content.content)
        });
    }
}

getTextContent()


function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}

addScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');



// content.addEventListener('keydown', function(e) {
//     if ((48 <= e.keyCode && e.keyCode <= 57) || (65 <= e.keyCode && e.keyCode <= 90) || e.keyCode === 32) {
//         // countCharacters++
//         // spanCharacters.innerText = countCharacters
//     }
//     })

    




