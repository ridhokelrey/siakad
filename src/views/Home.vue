<template>
  <div class="home">
    <Header />
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Footer,
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
}
</style>
