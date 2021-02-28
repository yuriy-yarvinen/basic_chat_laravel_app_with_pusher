import VueRouter from "vue-router";
import { isLoggedIn, userRedirectTo } from "./shared/utils/auth";

const routes = [
    {
        path: '/',
        component: require("./Index.vue").default,
        name: 'home',
        meta: {
            title: 'Chat',
            redirect: userRedirectTo()
        }
    },
    {
        path: "/login",
        component: require("./auth/Login.vue").default,
        name: "login",
        meta: {
            title: 'Вход в личный кабинет',
            redirect: userRedirectTo()
        }
    },
    {
        path: "/registration",
        component: require("./auth/Registration.vue").default,
        name: "registration",
        meta: {
            title: 'Регистрация',
            redirect: userRedirectTo()
        }
    },
    {
        path: "/restore_password",
        component: require("./auth/RestorePassword.vue").default,
        name: "restore_password",
        meta: {
            title: 'Восстановить пароль',
            redirect: userRedirectTo()
        }
    },
    {
        path: "/chat/:user_id",
        component: require("./components/Chat/Chat.vue").default,
        name: "chat",
        meta: {
            auth: true,
            title: 'Chat page',
        }
    },
    {
        path: "*",
        component: require("./components/NotFound").default,
        meta: {
            title: 'Страница не существует',
        },
    }
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

    if (to.meta.auth) {
        if (!isLoggedIn()) {
            next({ name: "login" });
            // router.push({ name: "login" });
        }
    }
    if (to.meta.redirect) {
        if (isLoggedIn()) {
            window.location.href = document.location.origin + to.meta.redirect.path;
        }
    }

    next();
});

export default router;
