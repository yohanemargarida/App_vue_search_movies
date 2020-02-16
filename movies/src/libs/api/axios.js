import axios from 'axios'

const axiosURL = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=69f81ecbaec99746aae10a311d0878e8&query='
})

export default axiosURL