import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        title: 'My Custom Title',
        links: [
            'http://google.com',
            'http://facebook.com',
            'http://twitter.com',    
            'http://instagram.com',
            'http://omegle.com'
        ]
    },
    getters: {
        countLinks: state => {
            return state.links.length
        }
    },
    mutations: {
        ADD_LINK: (state, link) => {
            state.links.push(link)
        }
    },
    actions: {

    }
})