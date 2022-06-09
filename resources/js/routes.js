import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComponent from "./components/pages/HomeComponent";
import ContactComponent from "./components/pages/ContactComponent";


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
        }
    ]
});

export default router;
