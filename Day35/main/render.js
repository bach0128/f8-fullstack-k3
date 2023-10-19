import { client } from "./client.js"

const containerEl = document.querySelector(".container")

const getPosts = async ( query = {}) => {
    const queryString = new URLSearchParams(query).toString();
    const {data: posts} = await client.get(`/posts?` + queryString)
    render(posts)
}

getPosts()

const render = (posts) => {
    
    let postsHTML = ``;

    posts.forEach(({content, imgLink}) => {
        postsHTML += `
        <div class="col-6 col-lg-6">
        <div class="post-item border p-3">
            <img src="${imgLink}"/>
        </div>
        </div>

        <div class="col-6 col-lg-6">
        <div class="post-item border p-3">
            <p>${content}</p>
        </div>
        </div>
        `
    });

    const div = document.createElement("div")
    div.setAttribute("class", "row g-3")
    div.innerHTML = postsHTML

    containerEl.append(div)
}

const p = document.createElement("p")
p.innerText = `Loading...`

let checkScrollBot = false

window.addEventListener("scroll",() => {
    if((window.scrollY + window.innerHeight) >= (document.body.scrollHeight - 16) && !checkScrollBot) {
        checkScrollBot = true
        containerEl.append(p)
            setTimeout(() => {
                getPosts().then(() => {
                    checkScrollBot = false
                    containerEl.remove(p)
                })
            }, 1000)
    };
})



