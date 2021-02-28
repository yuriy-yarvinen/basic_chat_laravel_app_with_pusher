import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './StoreModules/user';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user,
    }
});
