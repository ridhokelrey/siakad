<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/icons/logo.png" alt="logo" />
    </div>
    <ul class="nav-link">
      <li><router-link to="/">Beranda</router-link></li>
      <li><router-link to="/contact">Kontak</router-link></li>
      <li v-show="!isAuthenticated">
        <router-link to="/auth/sign-in">Login</router-link>
      </li>
      <li v-show="isAuthenticated">
        <button @click="onLogout()">Logout</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    onLogout() {
      if (this.$cookies.isKey("token")) {
        this.$cookies.remove("token");
        this.$router.push("/auth/sign-in");
      }
    },
  },
  created() {
    if (this.$cookies.isKey("token")) {
      this.isAuthenticated = true;
    }
  },
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
  width: 400px;
}
.nav-link li {
  list-style: none;
  font-size: 18px;
  font-weight: 400;
}
.nav-link li a {
  text-decoration: none;
  color: #8c8c8c;
}
.nav-link li button {
  color: #8c8c8c;
  border: none;
  background: none;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
}
.btn {
  display: inline-block;
  background: #565ce2;
  color: #fff;
  border: none;
  padding: 10px 20px;
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
