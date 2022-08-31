<template>
  <div class="content">
    <Header />
    <div class="container">
      <div>
        <h1>Hubungi Kami</h1>
        <ul class="contact-list">
          <li><img src="../assets/icons/phone.svg" /> 021-123123</li>
          <li><img src="../assets/icons/email.svg" /> info@unimaja.ac.id</li>
          <li><img src="../assets/icons/fb.svg" /> Universitas Maju Jaya</li>
          <li><img src="../assets/icons/ig.svg" /> Universitas Maju Jaya</li>
          <li><img src="../assets/icons/twitter.svg" /> Universitas Maju Jaya</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Contact",
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
.contact-list {
  list-style: none;
  margin-top: 20px;
}
.contact-list li {
  margin-bottom: 10px;
}
</style>
