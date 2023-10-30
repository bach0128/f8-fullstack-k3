import { DefaultLayout } from "../Layouts/Default"
import { Error } from "../Error"
import Navigo from "navigo"

const rootEl = document.querySelector("#root")


export const router = (data) => {
    rootEl.innerHTML = DefaultLayout()
    const router = new Navigo('/');
    
    rootEl.innerHTML = DefaultLayout()

    function render(content) {
        rootEl.innerHTML = DefaultLayout(content)
    }

    data.forEach((nav) => {
        router.on(nav.path, function (data) {
            render(nav.component(data))
        });
    })
    
    router.notFound(function () {
        document.body.innerHTML = Error()
    });

    router.resolve()
}



