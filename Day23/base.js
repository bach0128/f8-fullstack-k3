
showForm = document.querySelector(".show-form")
userInfor = document.querySelector(".userInfor")
overlay = document.querySelector(".overlay")
btnNavs = document.querySelectorAll(".userInfor .btnJoin .btnNav")
formLogin = document.querySelector(".form-login")
formCreate = document.querySelector(".form-create")

showForm.addEventListener('click', function() {
    userInfor.style.display = "block"
    overlay.style.display = "block"
    showForm.style.display = "none"
})

overlay.addEventListener('click', function() {
    userInfor.style.display = "none"
    overlay.style.display = "none"
    showForm.style.display = "block"
})


btnNavs[0].addEventListener("click",function() {
    if (!btnNavs[0].classList.contains("active") && !btnNavs[1].classList.contains("active")) {
        btnNavs[0].classList.add("active")
    } else if (!btnNavs[0].classList.contains("active") && btnNavs[1].classList.contains("active")) {
        btnNavs[0].classList.add("active")
        btnNavs[1].classList.remove("active")
        formLogin.style.display = "block"
        formCreate.style.display = "none"
    }
})

btnNavs[1].addEventListener("click",function() {
    if (!btnNavs[1].classList.contains("active") && !btnNavs[0].classList.contains("active")) {
        btnNavs[1].classList.add("active")
        formCreate.style.display = "block"
    } else if (!btnNavs[1].classList.contains("active") && btnNavs[0].classList.contains("active")) {
        btnNavs[1].classList.add("active")
        btnNavs[0].classList.remove("active")
        formLogin.style.display = "none"
        formCreate.style.display = "block"
    }
})

formLogin.addEventListener('submit', function(e) {
    var emailEl = this.querySelector(".userEmail input") 
    var passwordEl = this.querySelector(".userPassword input")

    var email = emailEl.value;
    var password = passwordEl.value;

    var errors = {}

    if (!email.trim()) {
        errors.email = "Vui lòng nhập email"
    }

    if (!password.trim()) {
        errors.password = "Vui lòng nhập password"
    }

    // chọn tất cả các form group 
    var formGroupList = formLogin.querySelectorAll(".form-group")
    formGroupList.forEach(function(element) {
        var fieldName =  element.querySelector(".field-item").classList[1]
        element.classList.remove("has-error")
        element.querySelector(".error").innerText = ""

        if (errors[fieldName]) {
            element.classList.add("has-error")
            element.querySelector(".error").innerText = errors[fieldName]
        }
    })
})




// formLoginSubmit.addEventListener('click', function() {
//     let passwordLogin = document.querySelector(".form-login .userPassword input");
//     let emailLogin = document.querySelector(".form-login .userEmail input");
//     var errorEmail = document.querySelector(".error-email")
//     var completeLogin = document.querySelector(".complete-login")
//     var errorPassword = document.querySelector(".error-password")

//     if (emailLogin.value === "") {
//         emailLogin.style.border = "1px solid red"
//         errorEmail.innerHTML = `
//         <span style="color: red;">Vui lòng nhập email</span>
//         `
//     } else if (passwordLogin.value === "") {
//         passwordLogin.style.border = "1px solid red"
//         errorEmail.innerHTML = ``
//         emailLogin.style.border = "1px solid gray"
//         errorPassword.innerHTML = `
//         <span style="color: red;">Vui lòng nhập mật khẩu</span>
//         `
//         } else {
//             passwordLogin.style.border = "1px solid gray"
//             errorPassword.innerHTML = ``
//             completeLogin.innerHTML = `
//             <span style="color: red">Ngon</span>
//             `
//         }
//     }
// )






