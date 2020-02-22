<template>
  <div>
    <Navbar />
    <div class="background">
      <Search class="search" />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import Navbar from "../layout/Navbar"

export default {
  components: {
    Search, 
    Navbar
  }
};
</script>

<style lang="scss">
.background {
  width: 100%;
  height: 650px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

</style>
