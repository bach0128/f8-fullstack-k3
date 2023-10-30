import image from "./Assets/Images/404.png"
import "./Assets/Errors.scss"

export const Error = () => {
    return `
        <div class="error-page">
            <img src="${image}" />
        </div>
    `
}