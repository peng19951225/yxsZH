import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userTokens: '',
        cart: []
    },
    mutations: {
        dlcomponent(state, data) {
            state.userTokens = data
            localStorage.setItem('usersToke', JSON.stringify(state.userTokens))
        }, 
        tuiUser(state) {
            state.userTokens = ''
            localStorage.setItem('usersToke', JSON.stringify(state.userTokens))
        },
        dlcomponents(state) {
            state.userTokens = JSON.parse(localStorage.getItem("usersToke")) || []
            console.log(localStorage.usersToke, 123)
        },

    }
})
export default store