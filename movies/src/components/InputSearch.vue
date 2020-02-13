<template>
  <div class="search-box">
    <div class="search-icon">
    </div>
    <input v-model="inputName" type="text" placeholder="digite sua busca" class="search-input" />
    <button :disabled="!inputName" @click="search" class="search-button" type="button">buscar</button>
  </div>
</template>

<script>
export default {
  computed: {
    inputName: {
      get() {
        return this.$store.state.inputName;
      },
      set(payload) {
        this.$store.commit("setInputName", payload);
      }
    }
  },

  methods: {
    search() {
      this.$store.state.searched = true;
    }
  },

  watch: {
    inputName() {
      this.$store.state.searched = false;
    }
  }
};
</script>

<style>

</style>