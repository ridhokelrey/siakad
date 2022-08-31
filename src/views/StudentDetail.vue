<template>
  <div class="content">
    <Header />
    <div class="container">
      <div class="back-button btn">
        <img src="../assets/icons/left-arrow.svg" />
        <router-link to="/data-mahasiswa"> Back</router-link>
      </div>
      <StudentDetailItem v-show="!loading" :student="student" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import StudentDetailItem from "../components/StudentDetailItem.vue";

export default {
  name: "StudentDetail",
  props: ["id"],
  components: {
    Header,
    Footer,
    StudentDetailItem,
  },
  data() {
    return {
      student: {},
    };
  },
  methods: {
    // method to fetch single data student by ID
    async fetchStudent(id) {
      const res = await fetch(
        `https://afternoon-garden-05625.herokuapp.com/api/students/${id}`
      );

      const data = await res.json();

      return data.data;
    },
  },
  async created() {
    // check there is token or not, if nothing, go forward to login page
    if (!this.$cookies.isKey("token")) {
      this.$router.push("/auth/sign-in");
    }

    // run fetch single student data and store in student
    this.student = await this.fetchStudent(this.id);
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
