import Vuex from 'vuex'
import Vue from 'vue'
import getquestions from './modules/getquestions.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        getquestions
    }
})