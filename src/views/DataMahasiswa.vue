<template>
  <div class="content">
    <Header />
    <div class="container">
      <div class="container-content">
        <!-- sidebar menu -->
        <SidebarMenu
          @show-student-list-button="showStudentListButton"
          @show-add-student-button="showAddStudentButton"
        />
        <div class="student-content">
          <LoadingSpinner v-show="loading" />
          <StudentList v-show="showStudentList" :students="students" />
          <AddStudentForm v-show="showAddStudent" @add-student="addStudent" />
        </div>
      </div>
    </div>
    <Footer />
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
      showStudentList: false,
      showAddStudent: false,
    };
  },
  methods: {
    async addStudent(student) {
      const res = await fetch(
        "https://afternoon-garden-05625.herokuapp.com/api/students/",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ data: student }),
        }
      );

      const data = await res.json();

      this.students = [...this.students, data];
    },
    showStudentListButton() {
      this.showStudentList = !this.showStudentList;
      this.showAddStudent = false;
    },
    showAddStudentButton() {
      this.showAddStudent = !this.showAddStudent;
      this.showStudentList = false;
    },
    async fetchStudents() {
      const res = await fetch(
        "https://afternoon-garden-05625.herokuapp.com/api/students"
      );
      const data = await res.json();

      return data.data;
    },
  },
  async created() {
    this.loading = true;
    this.students = await this.fetchStudents();
    this.loading = false;
  },
};
</script>

<style scoped>
.content {
  height: 100vh;
}
.container-content {
  width: 100%;
  height: 100%;
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
</style>
