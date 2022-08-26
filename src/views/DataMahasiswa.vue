<template>
  <div class="content">
    <Header />
    <div class="container">
      <div class="container-content">
        <!-- sidebar menu -->
        <SidebarMenu/>
        <div class="student-content">
          <StudentList />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SidebarMenu from '../components/SidebarMenu.vue'
import StudentList from '../components/StudentList.vue';

export default {
  name: 'DataMahasiswa',
  components: {
    Header,
    Footer,
    SidebarMenu,
    StudentList,
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
</style>