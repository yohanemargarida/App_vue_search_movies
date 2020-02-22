<template>
  <div>
    <h1>Search</h1>
    <Input />
    <input type="text" v-model="inputMovie" @keyup.enter="getResult"/>

    <div v-if="searched && listMovies.length">
      <div v-for="movie in listMovies" :key="movie.id">
        <router-link :to="{ name: 'detalhes', query: {id: movie.id} }">
          <p>Film: {{movie.title}} - popularity: {{movie.popularity}}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="searched && !listMovies.length">
      <p>Nenhum filme encontrado para a busca: {{ inputMovie }}</p>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input"
export default {
  components: {
    Input,
  },
  data() {
    return {
      searched: false
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
        .get("search/movie?api_key=69f81ecbaec99746aae10a311d0878e8&query=" +
            this.inputMovie
        )
        .then(response => {
          this.listMovies = response.data.results;
          this.searched = true;
        })
        .catch(error => console.log(error));
      console.log(this.listMovies);
    }
  }
};
</script>

<style scoped>
</style>