<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <ul class="nav-link">
      <li><router-link to="/" class="active-link">Beranda</router-link></li>
      <li><router-link to="/data-mahasiswa">Data Mahasiswa</router-link></li>
      <li><router-link to="/data-prodi">Data Program Studi</router-link></li>
      <li><router-link to="/contact">Kontak</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.navbar {
  margin: 0 145px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
}
.logo {
  font-size: 25px;
  font-weight: bold;
}
.nav-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
}
.nav-link li {
  list-style: none;
  font-size: 18px;
  font-weight: 400;
  /* line-height: 23px; */
}
.nav-link li a {
  text-decoration: none;
  color: #8c8c8c;
}
.nav-link li a.active-link {
  /* text-decoration: none; */
  color: #000000;
}
.btn {
  display: inline-block;
  background: #565ce2;
  color: #fff;
  border: none;
  padding: 10px 20px;
  /* margin: 5px; */
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>