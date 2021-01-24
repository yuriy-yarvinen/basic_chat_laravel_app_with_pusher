import VueRouter from "vue-router";

const routes = [
    {
        path: '/',
        component: require("./components/Home.vue").default,
        name: 'home',
        meta: {
            title: 'Chat'
        }
    },
    {
        path: "/chat",
        component: require("./components/Chat/Chat.vue").default,
        name: "chat",
        meta: {
            title: 'Chat page',
        }
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',// remove hash
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    next();
})

export default router;
