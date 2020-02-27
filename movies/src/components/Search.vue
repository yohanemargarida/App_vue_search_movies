<template>
  <section>
    <h1>Search Movie</h1>
    <div class="input">
      <input
        type="text"
        placeholder="enter the name of movie"
        v-model="inputMovie"
        @keyup.enter="getResult"
      />
      <button :disabled="!inputMovie" @click="getResult">
        <img src="../assets/img/procurar.svg" width="50%" />
      </button>
    </div>

    <div v-if="searched && listMovies.length" class="result-movies">
      <div v-for="movie in listMovies" :key="movie.id">
        <router-link :to="{ name: 'detalhes', query: {id: movie.id} }">
          <a class="film">
            <span>Film:</span>
            {{movie.title}} -
            <span>popularity:</span>
            {{movie.popularity}}
          </a>
        </router-link>
      </div>
    </div>
    <div v-else-if="searched && !listMovies.length">
      <p>Nenhum filme encontrado para a busca: {{ inputMovie }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searched: false,
      movies: ""
    };
  },
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
      this.$http
        .get(
          "search/movie?api_key=69f81ecbaec99746aae10a311d0878e8&query=" +
            this.inputMovie
        )
        .then(response => {
          this.listMovies = response.data.results;
          this.searched = true;
          this.movies = response.data.results;
        })
        .catch(error => console.log(error));
      console.log(this.listMovies);
    }
  },
  watch: {
    inputMovie() {
      this.searched = false;
    }
  }
};
</script>

<style scoped>
section{
  height: 70%;
  width: 100%;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
}
button {
  width: 50px;
  height: 48px;
  background: #f05e5c;
  border: none;
  color: #fff;
  margin-left: 2px;
}
button img {
  filter: invert(100%);
}
.input {
  margin: 24px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
button,
input {
  border-radius: 4px;
  font-size: 16px;
}
input {
  width: 300px;
  height: 34px;
  padding: 6px 12px;
  color: #555;
  border: 1px solid #f05e5c;
}
input:focus,
button:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
h1 {
  font-size: 42px;
  margin: 0 auto;
  color: hsl(1, 83%, 65%);
}
div{
  
}
div a {
  line-height: 1.4;
  font-size: 18px;
}
div a:link {
  text-decoration: none;
  color: #323232;
}
a:visited {
  color: #7f7f7f;
}
a:hover {
  text-decoration: underline;
  color: #f05e5c;
}
span {
  font-weight: bold;
}
.result-movies{
  height: 50%;
  margin: 0 auto;
  line-height: 1.2;
}
</style>