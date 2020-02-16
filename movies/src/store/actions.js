export default {
    setInputMovie(context, payload) {
        context.commit('setInputMovie', payload)
    },
    setListMovies(context, payload) {
        context.commit('setListMovies', payload)
    }
}