import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=69f81ecbaec99746aae10a311d0878e8&'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})