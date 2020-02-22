<template>
  <div>
    <div v-if="loading" class="loading">Aguardando</div>
    <div v-if="movie">
      <Navbar />
      <section class="background">
        <div v-if="movie.backdrop_path" class="figure">
          <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" />
        </div>
        <div class="genre text">
          <h2>Gener:</h2>
          <p v-for="genre in listGenre" :key="genre.id">{{ genre, }}</p>
        </div>
        <div class="content">
          <div class="title text">
            <h1>{{ movie.title }}</h1>
          </div>

          <div class="sinopsys text">
            <p>{{ movie.overview }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../layout/Navbar";
export default {
  components: {
    Navbar
  },
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
        .catch(error => {
          console.log(error);
          if (error.response.status == 404) {
            alert(this.errorMessage);
          }
        })
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Archivo&display=swap");
$font-stack: "Archivo";

div {
  display: block;
  font-family: $font-stack;
}

.figure {
  justify-content: center;
}

.figure img {
  box-shadow: 0px 0px 37px -8px rgba(0, 0, 0, 0.75);
}

.content {
  display: block;
  margin-top: 0;
}

.text {
  max-width: 800px;
  margin-left: 50px;
}

.title {
  font-size: 35px;
  margin-top: 0;
  padding-top: 0;
  line-height: 0.5;
}

.sinopsys {
  font-size: 22px;
  line-height: 1.4;
}

.genre {
  line-height: 1.5;
}

.genre h2 {
  color: #f05e5c;
}

.genre p {
  font-size: 18px;
  font-weight: bold;
  line-height: 0.5;
}
</style>