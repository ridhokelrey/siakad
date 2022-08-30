<template>
  <div>
    <h1>Daftar Mahasiswa</h1>
    <table>
      <thead>
        <td>NIM</td>
        <td>Nama Mahasiswa</td>
        <td>Periode Masuk</td>
        <td>Fakultas</td>
        <td>Program Studi</td>
        <td>Details</td>
      </thead>
      <tbody :key="student.id" v-for="student in students">
        <td>{{ student.attributes.nim }}</td>
        <td>{{ student.attributes.name }}</td>
        <td>{{ student.attributes.periodeMasuk }}</td>
        <td>{{ student.attributes.fakultas }}</td>
        <td>{{ student.attributes.prodi }}</td>
        <td>
          <router-link :to="{ name: 'StudentDetail', params: { id: student.id } }"
            >More...</router-link
          >
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
td {
  text-align: center;
  padding: 5px 5px;
  border-bottom: 1px solid #c0c0c0;
  border-left: 1px solid #c0c0c0;
}
</style>
