
todoApp = document.querySelector(".todo-app")
btnTask = document.querySelector(".btn-task")
inputTask = document.querySelector(".todo-app .create-task .input-task")
listTask = document.querySelector(".list-task")

var todoHeight = 200;
var i = 0;
var inputValue;


// check input va render ra giao dien 
btnTask.addEventListener('click', function() {
    inputValue = inputTask.value
    if (inputValue !== "") {
        render()
        i++
        todoHeight += 100*i;
        inputTask.value = ""
        todoApp.style.height = todoHeight
    }
// kiem tra co task hay ko roi moi lam viec vs task

    if (i > 0) {
        var newTasks = document.querySelectorAll(".task")
        for(var j = 0;j < newTasks.length; j++)
        {
            newTasks[j].addEventListener('click', function(e) {
                console.log(this);
                const remove = this.querySelector(".remove-task")
                const editBtn = this.querySelector(".edit-task")
                const param = this.querySelector(".param")

                if (e.target === remove) {
                    this.remove(this)
                    --i
                    todoHeight += 100*i;
                }

                if (e.target === param) {
                    param.classList.toggle("line-through")
                }

                if (e.target === editBtn) {
                    alert("Phần này chưa làm được nhá =)))")
                }
            })
        }
    } 
})

var render = function() {
    var newTask = `
    <div class="task">
        <span class="param">${inputValue}</span>
        <div class="change-task">
        <i class="fa-solid fa-pen-to-square edit-task"></i>
        <i class="fa-solid fa-trash remove-task"></i>
        </div>
    </div>
    `
    listTask.innerHTML += newTask
    todoApp.style.height = todoHeight
}







