<template>
  <div>
    <div v-if="loader" class="loader-box">
      <div class="loader"></div>
    </div>
    <div v-if="movie">
      <Navbar />
      <section class="background">
        <div v-if="movie.backdrop_path" class="figure">
          <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" />
        </div>
        <div class="genre text">
          <h2>Genre:</h2>
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
      loader: false,
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
      this.loader = true;
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
          this.loader = false;
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
div {
  display: block;
}
.figure {
  justify-content: center;
  display: flex;
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
  line-height: 1.2;
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
.loader {
  border: 16px solid #f05e5c; /* Light grey */
  border-top: 16px solid #f3f3f3; /* Blue */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}
.loader-box {
  width: 100%;
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>