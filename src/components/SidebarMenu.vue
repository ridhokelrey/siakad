<template>
  <div class="sidebar-menu">
    <ul class="sidebar-nav">
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/id-card.svg" />
        <button @click="this.$emit('show-student-list-button')">
          Daftar Mahasiswa
        </button>
      </li>
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/add-user.svg" />
        <button @click="this.$emit('show-add-student-button')">
          Tambah Mahasiswa
        </button>
      </li>
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/table.svg" />
        <button to="/data-mahasiswa">Jadwal Kuliah</button>
      </li>
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/test-result.svg" />
        <button to="/data-mahasiswa">Nilai Mahasiswa</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
};
</script>

<style scoped>
.sidebar-nav li {
  list-style: none;
  font-size: 18px;
  color: black;
  padding: 15px 10px;
  border-bottom: 1px solid #c0c0c0;
}
.sidebar-nav a {
  text-decoration: none;
  color: inherit;
}
.sidebar-nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
}
.sidebar-nav-link button {
  border: none;
  background-color: inherit;
  font-size: 18px;
  cursor: pointer;
}
.sidebar-nav li:hover {
  background-color: #efefef;
}
.sidebar-icon {
  width: 30px;
  height: 30px;
}
</style>