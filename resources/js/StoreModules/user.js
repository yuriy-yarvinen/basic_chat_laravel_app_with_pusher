import axios from 'axios';
import { setClientData, logOut, isLoggedIn } from '../shared/utils/auth';
export const user = {
	state: {
		data: null
	},
	getters: {},
	mutations: {
		setUser(state, payload) {
			state.data = payload;
		}
	},
	actions: {
		async loadUser({ commit, dispatch }) {
			if (!isLoggedIn()) {
				try {
					const user = (await axios.get("/checker")).data;
					setClientData(user.data);
				} catch (error) {
					dispatch("logout");
				}
			}
		},
		logout({ commit }) {
			logOut();
			commit("setUser", null);
		},
		async setUser({ commit }, payload) {
			try {
				const response = (await axios.get("/api/user/" + payload)).data;
				commit("setUser", response[0]);

			} catch (error) {
				if(error.response.status == 404){
					window.location.href = document.location.origin + "/404";
				}			
			}

		},
	},
}