<template>
  <div>
    <h1>Search</h1>
    <input type="text" v-model="inputMovie" @keyup="getResult(inputMovie)" />
    <div v-for="movie in listMovies" :key="movie.id">
      <p>{{movie.title}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    inputMovie: {
      get() {
        return this.$store.state.inputMovie;
      },
      set(payload) {
        this.$store.commit("setInputMovie", payload);
      }
    },
    listMovies: {
      get() {
        return this.$store.state.listMovies;
      },
      set(payload) {
        this.$store.commit("setListMovies", payload);
      }
    }
  },
  methods: {
    getResult() {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=69f81ecbaec99746aae10a311d0878e8&query=" +
            this.inputMovie
        )
        .then(response => {
          this.listMovies = response.data.results;
        })
        .catch(error => console.log(error));
      console.log(this.listMovies);
    }
  }
};
</script>

<style scoped>
</style>