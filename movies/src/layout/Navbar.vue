<template>
  <section class="navbar">
    <router-link :to="{ name: 'home'}" class="logo">
      <img src="../assets/img/icon-camera-de-video.svg" width="30%" />
    </router-link>
    <a class="menu">
      <img src="../assets/img/icon-menu-hamburguer.svg" width="20%" />
    </a>
  </section>
</template>

<script>
export default {
   
};
</script>

<style>
.navbar {
  height: 100px;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 37px -8px rgba(0, 0, 0, 0.75);
  background: #f05e5c;
}
.navbar > .logo {
  float: left;
  display: flex;
  justify-content: center;
  width: 10%;
  height: 100%;
}
.navbar > .menu {
  float: right;
  display: flex;
  justify-content: center;
  width: 10%;
  height: 100%;
}
.navbar > .logo img {
  float: left;
  margin: 0 auto;
}
.navbar > .menu img {
  float: right;
}
</style>