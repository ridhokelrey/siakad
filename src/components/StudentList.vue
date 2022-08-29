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
      <tbody :key="student.nim" v-for="student in students">
        <td>{{ student.nim }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.periodeMasuk }}</td>
        <td>{{ student.fakultas }}</td>
        <td>{{ student.prodi }}</td>
        <td><a href="/data-mahasiswa">More...</a></td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'StudentList',
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
