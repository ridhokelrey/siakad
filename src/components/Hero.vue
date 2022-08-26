<template>
  <div class="container">
    <div class="hero-section">
      <h1>SISTEM AKADEMIK TERPADU</h1>
      <h2>Universitas Maju Jaya</h2>
      <div class="hero-article">
        <p>
          Sistem Akademik Terpadu ini memberikan kemudahan perguruan tinggi
          untuk menghadapi industri 4.0
        </p>
      </div>
      <button class="btn">Explore</button>
    </div>
    <img src="../assets/images/hero-img.png" />
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>
img {
  height: 500px;
}
.hero-section {
  max-width: 550px;
}
.hero-article {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
