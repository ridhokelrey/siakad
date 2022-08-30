<template>
  <div class="content">
    <div class="content-container">
      <h1>Login</h1>
      <form @submit="onLogin">
        <div class="form-control">
          <label>Email</label>
          <input type="email" v-model="email" name="email" />
        </div>
        <div class="form-control">
          <label>Password</label>
          <input type="password" v-model="password" name="password" />
        </div>
        <button class="btn btn-block" type="submit">Sign In</button>
      </form>
      <div class="register-link">
        <router-link to="/auth/sign-up">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onLogin(e) {
      e.preventDefault();

      const form = {
        identifier: this.email,
        password: this.password,
      };

      const req = await fetch(
        "https://afternoon-garden-05625.herokuapp.com/api/auth/local",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const res = await req.json();

      if (res.jwt) {
        this.$cookies.set("token", res.jwt, "7d");
      }

      this.$router.push("/data-mahasiswa");
    },
  },
};
</script>

<style scoped>
.content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-container {
  width: 30%;
  padding: 50px 100px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.content-container h1 {
  text-align: center;
  margin-bottom: 30px;
}
.form-control {
  margin: 10px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 3px 7px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #8f8f8f;
}
.register-link {
  margin-top: 2rem;
}
.register-link a {
  text-decoration: none;
  color: black;
  background-color: #fff;
  border: 1px solid #8f8f8f;
  border-radius: 5px;
  padding: 5px 10px;
}
.register-link a:hover {
  background-color: #565ce2;
  color: #fff;
}
</style>
