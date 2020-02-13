<template>
  <div>
    <h1>Search</h1>
    <input type="text" v-model="query" @keyup="getResult(query)"/>
    <div v-for="movie in results" :key="movie.id">
      <p>{{movie.title}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      query: '',
      results: ''
    };
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=69f81ecbaec99746aae10a311d0878e8&query=" + query
        )
        .then(response => {
          this.results = response.data.results;
        })
        .catch(error => console.log(error))
        console.log(this.results)
    }
  }
};
</script>

<style scoped>
</style>