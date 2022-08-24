<template>
  <div class="content">
    <Header />
    <div class="div container">
      <h1>Data Prodi</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'DataProdi',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.content {
  height: 100vh;
}
</style>
