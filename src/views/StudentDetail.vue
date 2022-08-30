<template>
  <div class="content">
    <Header />
    <div class="container">
      <div class="back-button btn">
        <img src="../assets/icons/left-arrow.svg" />
        <router-link to="/data-mahasiswa"> Back</router-link>
      </div>
      <LoadingSpinner v-show="loading" />
      <StudentDetailItem v-show="!loading" :student="student" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import StudentDetailItem from "../components/StudentDetailItem.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "StudentDetail",
  props: ["id"],
  components: {
    Header,
    Footer,
    StudentDetailItem,
    LoadingSpinner,
  },
  data() {
    return {
      student: {},
      loading: true,
    };
  },
  methods: {
    async fetchStudent(id) {
      const res = await fetch(
        `https://afternoon-garden-05625.herokuapp.com/api/students/${id}`
      );

      const data = await res.json();

      return data.data;
    },
  },
  async created() {
    if (!this.$cookies.isKey("token")) {
      this.$router.push("/auth/sign-in");
    }
    this.loading = true;
    this.student = await this.fetchStudent(this.id);
    this.loading = false;
  },
};
</script>

<style scoped>
.content {
  height: 100vh;
}
.container {
  display: block;
}
.btn {
  height: 20px;
  font-size: 12px;
  padding: 0 10px;
}
.back-button a {
  text-decoration: none;
  color: #fff;
}
</style>
