import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
       list:''
    },
    mutations:{
        dlcomponent(state,data){
            state.list = data
            
        }
    }
})
export default store