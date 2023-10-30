import "../Assets/Style.scss"

export const DefaultLayout = (content) => {
    return `
        <header class="mb-3">
            <div class="container">
                <h1><a href="/" data-route>HEADER</a></h1>
                <hr>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                    <h2>Menu</h2>
                    <ul>
                        <li><a href="/" data-route>Trang chủ</a></li>
                        <li><a href="/gioi-thieu" data-route>Giới thiệu</a></li>
                        <li><a href="/san-pham" data-route>Sản phẩm</a></li>
                    </ul>
                    </div>
                    <div class="content col-9">${content}</div>
                </div>
            </div>
        </main>
        <footer class="mt-3">
            <div class="container">
            <h1>FOOTER</h1>
            </div>
        </footer>
    `
}