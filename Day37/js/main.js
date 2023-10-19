import { config } from "./config.js"
import { client } from "./client.js"
import { requestRefresh } from "./token.js";

const {PAGE_LIMIT} = config

client.setUrl("https://api.escuelajs.co/api/v1")

const home = document.getElementById("home")
const homeHeader = home.querySelector("header")
const signInBtn = document.querySelector(".container .btn-sign-in")
const formLoginEl = document.querySelector(".login")

let checkLogin = false

signInBtn.addEventListener('click', (e) => {
    homeHeader.style.display = "none"
    checkLogin = true
    app.render()
})

const app = {
  render: function() {
    console.log(checkLogin);
    if (!checkLogin) {
      formLoginEl.style.display = "none"
      this.getProducts()
      // this.getProfile(userProfile)
      // this.eventLogout()
      } else {
          formLoginEl.innerHTML = `
          <div class="container m-auto g-3">
          <div class="row">
            <div class="col-6 text-center ">
              <p>Sign In</p>
              <p>Please enter your email and password</p>
              <a href="#home" class="go-home">Go to home</a>
            </div>
          
            <div class="col-6">
              <div class="container">
                <div class="row">
                  <div class="col-12 email --bs-pink">
                    <p>Enter your email</p>
                    <input
                      type="text"
                      class="input-email"
                      placeholder="Please enter the email"
                    />
                  </div>
          
                  <div class="col-12 p-20 password">
                    <p>Enter your password</p>
                    <input
                      type="password"
                      class="input-password"
                      placeholder="Please enter the password"
                    />
                  </div>
          
                  <div class="btn-submit">
                    <div class="container">
                      <div class="grid gap-1 column-gap-2">
                        <button class="p-2 g-col-6 login-btn">Sign in</button>
                        <button class="p-2 g-col-6">Sign up</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      `;
      // go back home 
    const goHomeBtn = formLoginEl.querySelector(".go-home")
    goHomeBtn.addEventListener('click', (e) => {
    home.style.display = "block"
    formLoginEl.style.display = "none"
    })
      this.eventLogin()
      }
  },  
  isLogin: function() {
      if (localStorage.getItem("login_tokens")) {
          return true
      } else {
          return false
      }
  },
// kiểm tra login và lưu vào localstorage
  handleLogin: async function(data, msg) {
    console.log(data);
      msg.innerText = ''
      const {data: tokens, response} = await client.post("/auth/login", data)
      if(!response.ok) {
          msg.innerText = "Email hoặc mật khẩu không chính xác"
      } else {
          // neu thanh cong luu token vao storeage
          localStorage.setItem("login_tokens",
          JSON.stringify(tokens))
          checkLogin = false
          const userProfile = document.querySelector(".user-profile")
          userProfile.innerHTML = `
            <p style="color: #30c67c; font-weight: bold;"></p>
            <button class="new-blog">Add new blog</button>
            <button class="logout">Logout</button>
          `
          userProfile.querySelector("p").innerText = data.email
          this.render()
      }
  },
  getProfile: async function(el) {
      if (this.isLogin()) {
          let loginTokens = localStorage.getItem('login_tokens')
          loginTokens = JSON.parse(loginTokens)

          const {access_tokens: accessTokens, refresh_token: refreshToken} = loginTokens
          client.setToken(accessTokens, refreshToken)
      }

      // thêm token vào request header
      const {response, data} = await client.get("/auth/login")
      if (response.ok) {
          // token hop le
          el.querySelector("p").innerText = data.name
      } else {
          // goi request refresh token 
          const newToken = await requestRefresh(refresh_token)
          // khong lay dc token moi -> dang xuat 
          if (!newToken) {
              this.handleLogout()
          } else {
          // cap nhat token moi vao localstorage
              localStorage.setItem("login_tokens", newToken)
              JSON.stringify(newToken)
              this.render()
          }
          // xu ly logout
          this.handleLogout()
      }
  },

  // lấy thông tin login của người dùng 
  eventLogin: function() {
      const form = document.querySelector(".login")
      const msg = document.querySelector(".msg")
      form.addEventListener("submit", (e) => {
          e.preventDefault()

      const emailEl = e.target.querySelector('.input-email')
      const passwordEl = e.target.querySelector('.input-password')

      const email = emailEl.value
      const password = passwordEl.value

      this.handleLogin({email, password}, msg)
      })
  },
// xử lý logout 
handleLogout: function() {
  checkLogin = false
    localStorage.removeItem("login_tokens")
    this.render()
},
  // eventLogout: function() {
  //     const logout = document.querySelector(".profile .logout")
  //     logout.addEventListener("click", (e) => {
  //         e.preventDefault()
  //         this.handleLogout()
  //     })
  // }

// lấy ra thông tin user đưa vào blogs
  getProducts: async function() {
    const {data: products, response} = await client.get("/products")
    this.renderBlogs(products)
  },

// render blogs 
  renderBlogs: function(products) {
    console.log(products);
    const totalItems = products.length;
    // const totalPages = Math.ceil(totalItems / PAGE_LIMIT);
    const blogEl = document.querySelector(".blogs");
      blogEl.innerHTML = `
      ${products
        .map(
            (product, index) => 
                `<div class="container">
                <div class="row">
                  <div class="col-3">
                    <hr />
                    <p class="user-name"> ${product.category.name}</p>
                    <p class="count-time">10 triệu năm trước</p>
                    <p class="when-done">7:80 am</p>
                  </div>
          
                  <div class="col-9">
                    <span><a href="">Bài viết số ${index + 1}</a></span>
                    <p>${product.title}</p>
                    <p>${product.description}</p>
                    <button># view more test...</button>
                    <button># ${products[index].price}</button>
                    <hr />
                  </div>
                </div>
              </div>`
        )
        .join("")
    }
    `;
  }
}











  


