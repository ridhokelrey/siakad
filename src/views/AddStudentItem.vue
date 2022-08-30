<template>
  <div class="content">
    <Header />
    <div class="container">
      <div class="container-content">
        <SidebarMenu
          @show-student-list-button="showStudentListButton"
          @show-add-student-button="showAddStudentButton"
        />
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
