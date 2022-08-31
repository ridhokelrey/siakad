<template>
  <div class="content">
    <Header />
    <div class="container">
      <div class="container-content">
        <SidebarMenu />
        <div class="student-content">
          <LoadingSpinner v-show="loading" />
          <StudentList
            v-show="!loading"
            :students="students"
            @delete-student="deleteStudent"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import StudentList from "../components/StudentList.vue";
import AddStudentForm from "../components/AddStudentForm.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "DataMahasiswa",
  components: {
    Header,
    Footer,
    SidebarMenu,
    AddStudentForm,
    StudentList,
    LoadingSpinner,
  },
  data() {
    return {
      students: [],
      loading: true,
    };
  },
  methods: {
    // method to delete single student data by ID
    async deleteStudent(id) {
      if (confirm("Are you sure?")) {
        const res = await fetch(
          `https://afternoon-garden-05625.herokuapp.com/api/students/${id}`,
          {
            method: "DELETE",
          }
        );

        if (res.status === 200) {
          this.students = this.students.filter((student) => student.id !== id);
        } else {
          alert("Gagal menghapus mahasiswa");
        }
      }
    },

    // method to fetch single student data by ID
    async fetchStudent(id) {
      const res = await fetch(
        `https://afternoon-garden-05625.herokuapp.com/api/students/${id}`
      );

      const data = await res.json();

      return data.data;
    },

    // method to fetch all students data
    async fetchStudents() {
      const res = await fetch(
        "https://afternoon-garden-05625.herokuapp.com/api/students"
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

    // fetch all students data and then set loading false after get all data completed
    this.loading = true;
    this.students = await this.fetchStudents();
    this.loading = false;
  },
  async mounted() {
    this.students = await this.fetchStudents();
  },
};
</script>

<style scoped>
.content {
  height: 100vh;
}
.container-content {
  width: 100%;
  min-height: 100%;
  display: flex;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
}
.sidebar-menu {
  width: 30%;
}
.student-content {
  width: 70%;
  padding-left: 20px;
}

@media screen and (max-width: 768px) {
  .container-content {
    display: block;
  }
}
</style>
