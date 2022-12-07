import axios from "axios";
import {createStore} from "vuex";

export default createStore({
    state: {
        authenticated: false,
        user: null,
        token: null
    },
    mutations: {
        authenticateUser(state, data) {
            state.authenticated = true;
            state.token = data.token;
            state.user = data.user;
        }
    },
    actions: {
        async login({ commit }, credentials) {
            await axios.get('sanctum/csrf-cookie');
            const res = await axios.post('api/login', credentials); // error handling missing
            commit('authenticateUser', res.data)
            //router.push('/');
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.authenticated;
        },
        user(state) {
            return state.user;
        },
        userToken(state) {
            return state.token;
        }
    },
    modules: {}
})
