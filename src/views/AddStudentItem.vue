<template>
  <div class="content">
    <Header />
    <div class="container">
      <div class="container-content">
        <SidebarMenu />
        <div class="student-content">
          <AddStudentForm @add-student="addStudent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import AddStudentForm from "../components/AddStudentForm.vue";

export default {
  name: "AddStudentItem",
  components: {
    Header,
    Footer,
    SidebarMenu,
    AddStudentForm,
  },
  methods: {
    // method to create a student data
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

@media screen and (max-width: 768px) {
  .container-content {
    display: block;
  }
}
</style>
