import VueRouter from "vue-router";
import Index from "./Index";
import Vuex from 'vuex';
import router from "./routes";
import VueChatScroll from 'vue-chat-scroll';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueChatScroll)
const app = new Vue({
	el: '#app',
	router,
    components: {
        "Index": Index
    },
});
