import { config } from "./config.js"
import { client } from "./client.js"
import { requestRefresh } from "./token.js";

const {PAGE_LIMIT} = config

client.setUrl("https://api.escuelajs.co/api/v1")

const home = document.getElementById("home")
const homeHeader = home.querySelector("header")
const signInBtn = document.querySelector(".container .btn-sign-in")
const formLoginEl = document.querySelector(".login")
const newBlogEl = document.querySelector(".container .new-blog")
const blogsEl = document.querySelector(".container .blogs")

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
            <button class="sign-out">Sign out</button>
          `
          userProfile.querySelector("p").innerText = data.email
          // xử lý create new blogs and sign out
          const newBlogBtn = userProfile.querySelector(".new-blog")
          this.render()
          newBlogBtn.addEventListener('click', function() {
            userProfile.style.display = "none"
            blogsEl.style.display = "none"
            newBlogEl.innerHTML = `
            <div class="m-3">
            <label for="title" class="fw-bold">Title</label>
            <input type="text" class="form-label" id="title" placeholder="title" />
          </div>
          <div class="m-3">
            <label for="new-content" class="fw-bold">Content</label>
            <textarea
              class="form-control"
              id="new-content"
              rows="3"
              col="10"
            ></textarea>
          </div>
          <p>Set month for posting</p>
          <input class="month" type="number" min="1" max="12" placeholder="Choose month"></input> 
          <div class="calendar"></div>
          <div class="count-down-post"></div>
            `

            // create calendar
          const monthEl = newBlogEl.querySelector(".month")
          const calendar = newBlogEl.querySelector(".calendar")
          const countDownPost = newBlogEl.querySelector(".count-down-post")

          let month,day
          monthEl.addEventListener("change", () => {
            month = monthEl.value
            createCalendar(calendar, 2023, month)
          })
          function createCalendar(elem, year, month) {
            let mon = month - 1; 
            let d = new Date(year, mon);
      
            let table = '<table class="table-dark" style="cursor: pointer"><tr class="table-dark"><th class="table-dark">MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';
      
            for (let i = 0; i < getDay(d); i++) {
              table += '<td></td>';
            }
      
            while (d.getMonth() == mon) {
              table += '<td>' + d.getDate() + '</td>';
      
              if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
                table += '</tr><tr>';
              }
      
              d.setDate(d.getDate() + 1);
            }
      
            // add spaces after last days of month for the last row
            if (getDay(d) != 0) {
              for (let i = getDay(d); i < 7; i++) {
                table += '<td></td>';
              }
            }
      
            table += '</tr></table>';
            elem.innerHTML = table;
            elem.addEventListener('click', (e) => {
              countDownPost.textContent = ""
              day = e.target.textContent

            // countdown to post
            let countDownDate = new Date(2023, mon, day, 0, 0, 0).getTime();
            var x = setInterval(function() {
              var now = new Date().getTime();
              var distance = countDownDate - now;

              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);

              countDownPost.innerHTML = days + "d " + hours + "h "
              + minutes + "m " + seconds + "s " ;

              if (distance < 0) {
                clearInterval(x);
                countDownPost.innerHTML = "EXPIRED";
                alert("Posting your blog")
                }
              }, 1000);
              })
          }
      
          function getDay(date) { 
            let day = date.getDay();
            if (day == 0) {
              day = 7}; 
            return day - 1;
          }

          
      })
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
      // validate email 
      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      if (!validateEmail) {
        msg.innerText = "Email hoặc mật khẩu không chính xác"
      } else {
      this.handleLogin({email, password}, msg)
      }
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












  


