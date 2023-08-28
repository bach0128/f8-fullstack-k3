
alert("Chưa làm được phần input đâu dương khoai quá ")

showForm = document.querySelector(".show-form")
userInfor = document.querySelector(".userInfor")
overlay = document.querySelector(".overlay")
btnNavs = document.querySelectorAll(".userInfor .btnJoin .btnNav")
formLogin = document.querySelector(".form-login")
formCreate = document.querySelector(".form-create")

emailError = document.querySelector(".form-login .userEmail")
passwordError = document.querySelector(".form-login .userPassword")

formLoginSubmit = formLogin.querySelector(".btnSubmit")

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




formLoginSubmit.addEventListener('click', function() {
    let passwordLogin = document.querySelector(".form-login .userPassword input");
    let emailLogin = document.querySelector(".form-login .userEmail input");
    var errorEmail = document.querySelector(".error-email")
    var completeLogin = document.querySelector(".complete-login")
    var errorPassword = document.querySelector(".error-password")

    if (emailLogin.value === "") {
        emailLogin.style.border = "1px solid red"
        errorEmail.innerHTML = `
        <span style="color: red;">Vui lòng nhập email</span>
        `
    } else if (passwordLogin.value === "") {
        passwordLogin.style.border = "1px solid red"
        errorEmail.innerHTML = ``
        emailLogin.style.border = "1px solid gray"
        errorPassword.innerHTML = `
        <span style="color: red;">Vui lòng nhập mật khẩu</span>
        `
        } else {
            passwordLogin.style.border = "1px solid gray"
            errorPassword.innerHTML = ``
            completeLogin.innerHTML = `
            <span style="color: red">Ngon</span>
            `
        }
    }
)






