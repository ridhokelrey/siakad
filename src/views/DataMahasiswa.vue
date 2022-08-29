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
          <StudentList v-show="showStudentList" :students="students" />
          <AddStudentForm v-show="showAddStudent" @add-student="addStudent" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SidebarMenu from '../components/SidebarMenu.vue';
import StudentList from '../components/StudentList.vue';
import AddStudentForm from './AddStudentForm.vue';

export default {
  name: 'DataMahasiswa',
  components: {
    Header,
    Footer,
    SidebarMenu,
    AddStudentForm,
    StudentList,
  },
  data() {
    return {
      students: [],
      showStudentList: false,
      showAddStudent: false,
    };
  },
  methods: {
    addStudent(student) {
      this.students = [...this.students, student];
    },
    showStudentListButton() {
      this.showStudentList = !this.showStudentList;
      this.showAddStudent = false;
    },
    showAddStudentButton() {
      this.showAddStudent = !this.showAddStudent;
      this.showStudentList = false;
    },
  },
  created() {
    this.students = [
      {
        nim: '12345',
        name: 'Bambang',
        periodeMasuk: '2020/2021 Ganjil',
        fakultas: 'FT',
        prodi: 'Teknik Sipil',
        tempatLahir: 'Jakarta',
        tglLahir: '02/08/2000',
        jenisKelamin: 'Laki-laki',
        alamat: 'Jl. Merdeka',
        noTelepon: '0812345678',
      },
    ];
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