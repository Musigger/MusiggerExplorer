import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./pages/Home.vue")
        },
        {
            path: "/release/:id",
            name: "release",
            component: () => import("./pages/Release.vue")
        }
    ]
})

router.afterEach((to) => {
    document.querySelectorAll("link[rel=canonical]").forEach((e) => e.parentNode.removeChild(e))
    const head = document.getElementsByTagName("head")[0]
    const link = document.createElement("link")
    link.rel = "canonical"
    link.href = `https://${window.location.hostname}${to.path}`
    head.appendChild(link)
})

export default router
