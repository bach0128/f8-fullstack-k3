import { client } from "./client.js"
import { requestRefresh } from "./token.js";

client.setUrl("https://api-auth-two.vercel.app")

const home = document.getElementById("home")
const homeHeader = home.querySelector("header")
const signInNav = document.querySelector(".container .nav-sign-in")
const formSignInEl = document.querySelector(".sign-in")
const formSignUpEl = document.querySelector(".sign-up")
const newBlogEl = document.querySelector(".container .new-blog")
const blogsEl = document.querySelector(".container .blogs")
const signInBtn = formSignUpEl.querySelector(".container .btn-submit .sign-in-btn")
const userProfile = document.querySelector(".user-profile")
const newBlogBtn = userProfile.querySelector(".new-blog-btn")

let checkFormSignUp = false

signInNav.addEventListener('click', () => {
  homeHeader.style.display = "none"
  formSignInEl.style.display = "flex"
  blogsEl.style.display = "none"
  })

signInBtn.addEventListener('click', () => {
  homeHeader.style.display = "none"
  formSignInEl.style.display = "flex"
  formSignUpEl.style.display = "none"
  })

const app = {
  render: function() {
    // hiển thị form sign-in 
    if (!this.isSignIn()) {
      formSignInEl.innerHTML = `
      <div class="container m-auto g-3">
      <div class="row">
        <div class="col-6 text-center">
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
                    <button type="submit" class="p-2 g-col-6 sign-in-btn">Sign in</button>
                    <button class="p-2 g-col-6 sign-up-btn">Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `
      this.eventSignIn()
  const signUpBtn = document.querySelector(".container .sign-up-btn")
      signUpBtn.addEventListener('click', (e) => {
        e.preventDefault()
        formSignInEl.style.display = "none"
        formSignUpEl.style.display = "flex"
        })
  const goHomeBtnList = document.querySelectorAll(".container .go-home")
  goHomeBtnList.forEach((homeBtn) => {
    homeBtn.addEventListener('click', () => {
      homeHeader.style.display = "block"
      formSignInEl.style.display = "none"
      formSignUpEl.style.display = "none"
  })
  })
      } else {
        // render blog
        //  profile (lấy ra name user)
          homeHeader.style.display = "none"
          formSignInEl.style.display = "none"
          userProfile.style.display = "flex"
          this.getProfile(userProfile)
          this.getBlog()
          this.eventSignOut()
      }
  }, 
  
  isSignIn: function() {
    if (localStorage.getItem("login_tokens")) {
      return true
    } else {
      return false
    }
  },
// kiểm tra signin và render blog
  handleSignIn: async function(data, msg) {
      msg.innerText = ''
      const {data: tokens, response} = await client.post("/auth/login", data)
      if(!response.ok) {
          msg.innerText = "Email hoặc mật khẩu không chính xác"
      } else {
        // nếu thành công lưu token vào storage 
        localStorage.setItem("login_tokens", JSON.stringify(tokens))
        this.render()
    }
  },
  // lưu thông tin tài khoản mới vào local
  handleSignUp: async function(dataNew, msg) {
    msg.innerText = ''
    const {data: tokens, response} = await client.post("/auth/register", dataNew)
    console.log(response);
    if (!response.ok) {
      msg.innerText = "Vui lòng nhập lại email và password"
    } else {
      localStorage.setItem("login_tokens", JSON.stringify(tokens))
      alert("Đăng ký thành công")
      this.render()
    }
  },
  // lấy thông tin tài khoản mới của người dùng 
  eventSignUp: function() {
      const form = document.querySelector(".sign-up")
      const msg = document.querySelector(".msg")
      form.addEventListener("submit", (e) => {
          e.preventDefault()
        
      const nameEl = e.target.querySelector('.input-name')
      const emailEl = e.target.querySelector('.input-email')
      const passwordEl = e.target.querySelector('.input-password')

      const name = nameEl.value
      const email = emailEl.value
      const password = passwordEl.value

      // validate  
      const validateEmail = function(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      const validatePassword = function(password) {
        return String(password)
          .match(
            /^[a-zA-Z0-9]{8,}$/
          );
      }
      if (!validateEmail(email)) {
        msg.innerText = "Vui lòng nhập lại email"
      }
      if (!validatePassword(password)) {
        msg.innerText = "Password phải chứa ít nhất 8 ký tự"
      }

      if (validateEmail(email) && validatePassword(password)) {
        this.handleSignUp({name, email, password}, msg)
      }
      })

  },
  // / lấy thông tin tài khoản của người dùng
  eventSignIn: function() {
    const form = document.querySelector(".sign-in")
    const msg = document.querySelector(".msg")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
      
    const emailEl = e.target.querySelector('.input-email')
    const passwordEl = e.target.querySelector('.input-password')

    const email = emailEl.value
    const password = passwordEl.value
      this.handleSignIn({ email, password }, msg)
    })
  },
  
  getProfile: async function(el) {
    // check đã sigin chưa -> lấy access và refresh token
        let loginTokens = localStorage.getItem('login_tokens')
        loginTokens = JSON.parse(loginTokens)

        const accessToken = loginTokens.data.accessToken
        const refreshToken = loginTokens.data.refreshToken
        client.setToken(accessToken, refreshToken)

    // thêm token vào request header
    const {response, data} = await client.get("/users/profile")
    if (response.ok) {
        // token hop le
        el.querySelector("h1").innerText = data.data.name
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
        // this.handleLogout()
    }
  },

  // Lấy tất cả blog
  getBlog: async function() {
    const {data: blogs} = await client.get("/blogs")
    this.renderBlogs(blogs.data)
  },
  // lấy ra 10 blog đầu tiên 
  getTenBlog: async function() {
    const {data} = await client.get("/blogs?offset=0&limit=10")
  },
  // Lấy 1 blog theo id
  getOneBlog: async function(id) {
    const {data} = await client.get(`"/blogs/:${id}"`)
  },

  renderBlogs: function(blogs) {
    const blogEl = document.querySelector(".blogs");
      blogEl.innerHTML = `
      ${blogs
        .map(
            (blog, index) => 
                `<div class="container">
                <div class="row">
                  <div class="col-3">
                    <hr />
                    <p class="user-name"> ${blog.userId.name}</p>
                    <p class="count-time">10 triệu năm trước</p>
                    <p class="when-done">7:80 am</p>
                  </div>
          
                  <div class="col-9">
                    <span><a href="">Bài viết số ${index + 1}</a></span>
                    <p>${blog.title}</p>
                    <p>${blog.content}</p>
                    <button># view more test...</button>
                    <button># ${blog.userId.name}</button>
                    <hr />
                  </div>
                </div>
              </div>`
        )
        .join("")
    }
    `;
  },

  handleSignOut: function() {
    localStorage.removeItem("login_tokens")
    this.render()
  },
  eventSignOut: function() {
      const logout = userProfile.querySelector(".sign-out")
      logout.addEventListener("click", (e) => {
          e.preventDefault()
          this.handleSignOut()
      })
  }
}

app.handleSignOut()
app.render()
app.eventSignUp()
app.getBlog()


// xử lý create new blogs 
newBlogBtn.addEventListener('click', function() {
  console.log("add");
  userProfile.style.display = "none"
  blogsEl.style.display = "none"
  newBlogEl.innerHTML = `
    <div class="m-3">
      <label for="title" class="fw-bold">Title</label>
      <input type="text" class="title form-label" id="title" placeholder="title" />
    </div>
    <div class="m-3">
      <label for="new-content" class="fw-bold">Content</label>
      <textarea
        class="content form-control"
        id="new-content" 
        rows="3"
        col="10"
      ></textarea>
    </div>
      <p>Set month for posting</p>
      <input class="month" type="number" min="1" max="12" placeholder="Choose month"></input> 
    <div class="calendar"></div>
    <div class="count-down-post"></div>
    <button class="btn-post" type="submit">Submit</button> 
    `
  // get content -> check expire -> post
  const btnPost = newBlogEl.querySelector(".btn-post")

  btnPost.addEventListener('submit', function() {
    const titleEl = newBlogEl.querySelector(".title")
    const contentEl = newBlogEl.querySelector(".content")
    const title = titleEl.value
    const content = contentEl.value
    regexContent(content)
  })
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
  // countdown to post
  elem.addEventListener('click', (e) => {
    const div = document.createElement("div")
    day = e.target.textContent
    div.innerHTML = `<p>Ngày post bài:2023-${month}-${day}</p>`

    countDownPost.textContent = ""

  let countDownDate = new Date(2023, mon, day, 0, 0, 0).getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    console.log(distance);

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countDownPost.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " ;
    
    elem.style.display = "none"

    countDownPost.appendChild(div)

    if (distance < 0) {
      clearInterval(x);
      countDownPost.innerHTML = "EXPIRED";
      const result = regexContent(content)
      postNew(result)
      postNew = async function(result) {
        const {data , response} = await client.post("/blogs", result)
        if (response.ok) {
          app.render()
        }
      }
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
  // xử lý content của bài post mới 
  function regexContent(content) {
    const patternContentEnter = /(\n){2,}/g
    const patternContentWhiteSpace = /(\s){2,}/g
    const patternTel = /[0|\+84]\d{9}/g
    const patternEmail = /[a-z0-9-_\.]{3,}[a-z-_\.0-9]+\.[a-z]{2,}/g
    const patternYoutube = /(https:)\/\/(www)\.(youtube)\.(com)\/(watch)\?(v)\=(.+)/g

    let contentFake = document.createElement("div")

    content = content.replace(patternContentEnter, "\n")
    content = content.replace(patternContentWhiteSpace, "\s")

    patternTel.forEach((tel) => {
      const a = document.createElement("a")
      a.innerText = tel
      contentFake.append(a)
    })

    patternEmail.forEach((email) => {
      const a = document.createElement('a')
      a.href = `"${email}"`
      contentFake.append(a)
    })

    patternYoutube.forEach((youtube) => {
      const iframe = document.createElement("iframe")
      iframe.width = 420
      iframe.height = 315
      iframe.src = `"${youtube}"`
      contentFake.append(iframe)
    })
    return contentFake
  }

})





  


