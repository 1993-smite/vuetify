/**
 * store for page
 */
export default {
    state: {
        pageTitle: ''
    },
    getters: {
        getTitle: (state) => {
            return state.pageTitle;
        }
    },
    actions: {
        setPage: function(ctx, title) {
            ctx.commit('setPageTitle', title);
        }
    },
    mutations: {
        setPageTitle(state, title){
            state.pageTitle = title;
        },
    }
}