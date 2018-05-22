import axios from 'axios'

export const state = () => ({
    visits: [],
    authUser: null
})

export const mutations = {
    ADD_VISIT(state, path) {
        state.visits.push({
            path,
            date: new Date().toJSON()
        })
    },
    SET_USER: function(state, user) {
        state.authUser = user
    }
}

export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    nuxtServerInit({ commit }, { req }) {
        // console.log('init:'+ JSON.stringify(req.sessionID));

        if (req && req.session && req.session.authUser) {
            commit('SET_USER', req.session.authUser)
        }
    },
    async login({ commit }, { username, password }) {
        try {
            const { data } = await axios.post('http://localhost:3000/api/login', { username, password })
            commit('SET_USER', data)
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Bad credentials')
            }
            throw error
        }
    },

    async logout({ commit }) {
        await axios.post('http://localhost:3000/logout')
        commit('SET_USER', null)
    }

}
