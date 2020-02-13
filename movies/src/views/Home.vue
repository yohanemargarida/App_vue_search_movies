<template>
  <div class>
    <div class="home-page container center">
      <Search class="search-box" />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";


export default {
  components: {
    Search
  }
};
</script>

<style lang="scss">
.home-page {
  background: #fff;
}
.search-box {
  text-align: center;
  
}
.container {
  max-width: 1600px;
  height: 1200px;
  margin: 0 auto;
  display: flex;
}
.center {
  justify-content: center;
  align-items: center;
  height: 800px;

}
</style>
