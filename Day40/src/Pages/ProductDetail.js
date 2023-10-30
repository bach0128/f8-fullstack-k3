// import { navigate } from "../Utils/router"

export const ProductDetail = ({ data }) => {
    console.log(data);
    const id = data.id

    return `
    <h1>Chi tiết sản phẩm: ${id}</h1>
    <a href="/san-pham" data-route>Back</a>
    `
}