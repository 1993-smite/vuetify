/**
 * store for tests
 */
export default {
    state: {
        user: {
            Id: 0
        }
    },
    getters: {
        getTestUser: (state) => {
            return state.user;
        }
    },
    actions: {
        setTestUser: function(ctx, user) {
            ctx.commit('setTestUser', user);
        }
    },
    mutations: {
        setTestUser(state, user){
            state.user = user;
        },
    }
}