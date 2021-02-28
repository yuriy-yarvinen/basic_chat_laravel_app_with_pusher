import VueRouter from "vue-router";
import ValidationErrors from "./shared/components/ValidationErrors";
import Index from "./Index";
import Vuex from 'vuex';
import router from "./routes";
import VueChatScroll from 'vue-chat-scroll';
import { store } from './store';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueChatScroll);
Vue.component("v-errors", ValidationErrors);
const app = new Vue({
	el: '#app',
	router,
    components: {
        "Index": Index
    },
    store, //vuex
});
