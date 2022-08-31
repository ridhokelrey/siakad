<template>
  <div class="student-list">
    <h1>Daftar Mahasiswa</h1>
    <table>
      <thead>
        <td>NIM</td>
        <td>Nama Mahasiswa</td>
        <td>Periode Masuk</td>
        <td>Fakultas</td>
        <td>Program Studi</td>
        <td>Details</td>
        <td>Action</td>
      </thead>
      <tbody :key="student.id" v-for="student in students">
        <td>{{ student.attributes.nim }}</td>
        <td>{{ student.attributes.name }}</td>
        <td>{{ student.attributes.periodeMasuk }}</td>
        <td>{{ student.attributes.fakultas }}</td>
        <td>{{ student.attributes.prodi }}</td>
        <td>
          <router-link :to="{ name: 'StudentDetail', params: { id: student.id } }"
            ><img src="../assets/icons/detail.svg"
          /></router-link>
        </td>
        <td>
          <router-link
            class="action"
            :to="{ name: 'StudentDetail', params: { id: student.id } }"
          >
            <img src="../assets/icons/edit.svg"
          /></router-link>
          <router-link :to="{ name: 'StudentDetail', params: { id: student.id } }">
            <img src="../assets/icons/remove.svg"
          /></router-link>
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StudentList",
  props: {
    students: Object,
  },
};
</script>

<style scoped>
.student-list {
  margin-left: 20px;
}
h1 {
  margin-bottom: 20px;
}
td {
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid #c0c0c0;
  border-left: 1px solid #c0c0c0;
}

.action {
  margin-right: 10px;
}

@media screen and (max-width: 1024px) {
  .student-list {
    margin-left: 0;
  }
  h1 {
    font-size: 18px;
    margin: 10px 0;
  }
  td {
    padding: 3px;
    font-size: 10px;
  }
  .action {
    margin-right: 0px;
  }
}
@media screen and (max-width: 768px) {
  .student-list {
    margin-left: 0;
  }
  h1 {
    font-size: 18px;
    margin: 10px 0;
  }
  td {
    padding: 3px;
    font-size: 10px;
  }
  .action {
    margin-right: 0px;
  }
}
</style>
