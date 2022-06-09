import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComponent from "./components/pages/HomeComponent";
import ContactComponent from "./components/pages/ContactComponent";
import PostComponent from "./components/pages/PostComponent";
import notFoundComponent from "./components/notFoundComponent";


const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeComponent
        },
        {
            path: "/contacts",
            name: "contacts",
            component: ContactComponent
        },
        {
            path: "/post",
            name: "post",
            component: PostComponent
        },
        {
            path: "/*",
            name: "notFound",
            component: notFoundComponent
        }
    ]
});

export default router;
