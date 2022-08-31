<template>
  <router-view></router-view>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  margin: 0 145px;
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

@media screen and (max-width: 1024px) {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    margin: 0 90px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    margin: 0 50px;
  }
}
</style>
