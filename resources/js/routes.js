import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComponent from "./components/pages/HomeComponent";
import ContactComponent from "./components/pages/ContactComponent";
import PostComponent from "./components/pages/PostComponent";
import notFoundComponent from "./components/notFoundComponent";
import PostDetailComponent from "./components/pages/PostDetailComp";
import CategoryComponent from "./components/pages/CategoryComponent";


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
            path: "/categories",
            name: "categories",
            component: CategoryComponent
        },
        {
            path: "/*",
            name: "notFound",
            component: notFoundComponent
        },
        {
            path: "/post/:slug",
            name: "postDetail",
            component: PostDetailComponent
        }
    ]
});

export default router;
