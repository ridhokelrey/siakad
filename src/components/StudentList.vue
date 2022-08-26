<template>
  <h1>Data Mahasiswa</h1>
  <table>
    <thead>
      <td>NIM</td>
      <td>Nama Mahasiswa</td>
      <td>Periode Masuk</td>
      <td>Fakultas</td>
      <td>Program Studi</td>
      <td>Details</td>
    </thead>
    <tbody>
      <td>123456</td>
      <td>Bambang</td>
      <td>2021/2022 ganjil</td>
      <td>Teknik</td>
      <td>Arsitektur</td>
      <td><a href="/data-mahasiswa">More...</a></td>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'StudentList',
};
</script>

<style scoped>
td {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #c0c0c0;
  border-left: 1px solid #c0c0c0;
}
</style>