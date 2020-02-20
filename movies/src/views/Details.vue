<template>
  <div>
    <div v-if="loading">Aguardando</div>
    <div v-if="movie">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.overview }}</p>
      
      <h1>Geners: </h1>
      <p v-for="genre in listGenre" :key="genre.id">{{ genre }}</p>
      
      <div v-if="movie.backdrop_path">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" />
      </div>
       
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      movie: "",
      errorMessage: "Não foi possível conectar na API"
    };
  },
   computed: {
     listGenre() {
       let list = this.movie.genres.map(genre => {
         return genre.name;
       });
       return list;
     }
   },
  methods: {
    getMovie(id) {
      this.loading = true;
      this.$http
        .get("movie/" + id + "?api_key=69f81ecbaec99746aae10a311d0878e8")
        .then(response => {
          this.movie = response.data;
        })
        .catch(error => console.log(error))
        .then(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    if (!this.$route.query.id) {
      alert("Por favor, informe o id do filme na url");
    } else {
      this.getMovie(this.$route.query.id);
    }
  }
};
</script>