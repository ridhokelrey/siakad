<template>
  <div>
    <ul class="sidebar-nav">
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/id-card.svg" />
        <router-link to="/data-mahasiswa"> Daftar Mahasiswa </router-link>
      </li>
      <li class="sidebar-nav-link">
        <img class="sidebar-icon" src="../assets/icons/add-user.svg" />
        <router-link to="/data-mahasiswa/tambah-mahasiswa">Tambah Mahasiswa</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
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

@media screen and (max-width: 1024px) {
  .sidebar-nav li {
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .sidebar-nav {
    width: 350px;
    display: flex;
  }
  .sidebar-nav li {
    font-size: 12px;
  }
}
</style>
