<template>
  <div class="not-found-page">
    <h1>Oops!</h1>
    <p>404 - Page Not Found!</p>
    <router-link class="btn" to="/">
      <img src="../assets/icons/home.svg" />
      Back To Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found-page {
  margin: 50px 0;
  text-align: center;
  width: 100%;
}
.not-found-page h1 {
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.not-found-page p {
  font-size: 3rem;
  margin-bottom: 2rem;
}
.btn {
  text-align: center;
}
.not-found-page img {
  width: 30px;
  height: 30px;
}
</style>
