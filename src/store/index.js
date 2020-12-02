import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * modules
 */
import page from './modules/page'
import holidays from './modules/holidays'
import test from './modules/test'

export default 
new Vuex.Store({
    modules: {
        page,
        holidays,
        test
    }
});