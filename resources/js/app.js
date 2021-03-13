import VueRouter from "vue-router";
import moment from "moment";
import ValidationErrors from "./shared/components/ValidationErrors";
import Index from "./Index";
import Vuex from 'vuex';
import router from "./routes";
import VueChatScroll from 'vue-chat-scroll';
import { store } from './store';
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(Toaster);
Vue.use(Toaster, {timeout: 5000});
Vue.use(Vuex);
Vue.use(VueChatScroll);
Vue.component("v-errors", ValidationErrors);

Vue.filter('formatDateAndTime', function (value) {
    if (value) {
        return moment(new Date(value)).locale("ru").format('DD.MM.YYYY LT')
    }
});

const app = new Vue({
    el: '#app',
    router,
    components: {
        "Index": Index
    },
    store

});
