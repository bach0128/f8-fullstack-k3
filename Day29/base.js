    var list = document.querySelector(".list")
    var listItem = document.querySelectorAll(".list .list-item.no-active")
    var listModuleItem = document.querySelectorAll(".list .list-item.active")

var render = function(listItem, listModuleItem) {
    
    listItem.forEach(function(item, index) {
        // console.log(item.textContent);
        item.innerHTML= `<span> Bài: ${index + 1} : </span> ${item.textContent}`
    })
    
    listModuleItem.forEach(function(item, index) {
        item.innerHTML= `<span> Module: ${index + 1} : </span> ${item.textContent}`
    })
}

listItem.forEach(function(item) {
    item.addEventListener('dragstart',function(e) {
        e.target.classList.add("dragging")
        var itemEl = document.createElement("div");
        itemEl.classList.add(".list-item.no-active")
        itemEl.innerText = e.target.textContent

        list.append(itemEl)
    })
    item.addEventListener("dragenter",function(e) {
        var 
    })
    item.addEventListener("drop", function() {
        e.preventDefault()
        render()
    })
})


