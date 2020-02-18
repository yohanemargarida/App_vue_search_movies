<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.overview}}</p>
    <p>{{ genres }}</p>

    <p v-for="genre in genres" :key="genre.id"></p>
    <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      genres: "",
      movieId: "",
      list: ""
    };
  },
  computed: {
    listMovies() {
      return this.$store.state.listMovies;
    },
    movie: {
      get() {
        let idFiltered = this.$store.state.listMovies.find(movie => {
          return movie.id == this.$route.query.id;
        });
        return idFiltered;
      },
      set(idFiltered) {
        return (this.movieId = idFiltered);
      }
    }
  },
  methods: {
    getResult() {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=69f81ecbaec99746aae10a311d0878e8&id=" +
            this.movieId
        )
        .then(response => {
          this.list = response.data.results;
        })
        .catch(error => console.log(error));
      console.log(this.listMovies);
    },
    getGenres() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie?api_key=69f81ecbaec99746aae10a311d0878e8"
        )
        .then(response => {
          this.genres = response.data.results;
          console.log(this.genres);
        })
        .catch(error => console.log(error));
      console.log(this.genres);
    }
  }
};
</script>