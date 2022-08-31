<template>
  <div class="container">
    <div class="hero-section">
      <h1>SISTEM AKADEMIK TERPADU</h1>
      <h2>Universitas Maju Jaya</h2>
      <div class="hero-article">
        <p>
          Sistem Akademik Terpadu ini memberikan kemudahan perguruan tinggi untuk
          menghadapi industri 4.0
        </p>
      </div>
      <router-link to="/data-mahasiswa" class="btn">Explore</router-link>
    </div>
    <img src="../assets/images/hero-img.png" />
  </div>
</template>

<script>
export default {
  name: "Hero",
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

@media screen and (max-width: 1024px) {
  .hero-article {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  img {
    height: 300px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    display: block;
  }
  .hero-section {
    padding-top: 25%;
  }
  img {
    visibility: hidden;
    height: 5px;
  }
}
</style>
