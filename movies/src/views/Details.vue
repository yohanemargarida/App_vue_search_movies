<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.overview }}</p>
    

    
    <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: "",
      list: ""
    };
  },
  computed: {
    listMovies() {
      return this.$store.state.listMovies;
    }
  },
  methods: {
    getMovie(id) {
      this.$http
        .get(
          "movie/" + id + "?api_key=69f81ecbaec99746aae10a311d0878e8" 
        )
        .then(response => { console.log(response.data);
          this.movie = response.data;
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {console.log('to aqui no mounted');
    
      this.getMovie(this.$route.query.id)
   
  }
};
</script>