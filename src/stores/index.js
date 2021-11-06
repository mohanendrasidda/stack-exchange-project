import Vuex from 'vuex';
import auth from './modules/auth';
import questiondata from './modules/questions';


const store = new Vuex.Store({
    modules: {
        auth: auth,
        questiondata: questiondata
    }
});

export default store;