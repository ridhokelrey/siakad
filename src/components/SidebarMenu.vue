<template>
  <div class="sidebar-menu">
    <ul class="sidebar-nav">
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/id-card.svg" />
        <router-link to="/data-mahasiswa">Daftar Mahasiswa</router-link>
      </li>
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/add-user.svg" />
        <router-link to="/data-mahasiswa/add-student"
          >Tambah Mahasiswa</router-link
        >
      </li>
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/table.svg" />
        <router-link to="/data-mahasiswa">Jadwal Kuliah</router-link>
      </li>
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/test-result.svg" />
        <router-link to="/data-mahasiswa">Nilai Mahasiswa</router-link>
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
.sidebar-menu {
  width: 30%;
  margin-right: 20px;
}
.student-content {
  width: 80%;
}
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
.sidebar-nav li:hover {
  background-color: #efefef;
}
.sidebar-icon {
  width: 30px;
  height: 30px;
}
</style>