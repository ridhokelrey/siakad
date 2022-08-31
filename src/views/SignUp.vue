<template>
  <div class="content">
    <div class="content-container">
      <h1>Register</h1>
      <form @submit="onRegister">
        <div class="form-control">
          <label>Username</label>
          <input type="text" v-model="username" name="username" />
        </div>
        <div class="form-control">
          <label>Email</label>
          <input type="email" v-model="email" name="email" />
        </div>
        <div class="form-control">
          <label>Password</label>
          <input type="password" v-model="password" name="password" />
        </div>
        <button class="btn btn-block" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async onRegister(e) {
      e.preventDefault();

      const form = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      const req = await fetch(
        "https://afternoon-garden-05625.herokuapp.com/api/auth/local/register",
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
        this.username = "";
        this.email = "";
        this.password = "";
      }

      this.$router.push("/auth/sign-in");
    },
  },
  created() {
    if (this.$cookies.isKey("token")) {
      this.$router.push("/data-mahasiswa");
    }
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

@media screen and (max-width: 768px) {
  .content-container {
    width: 70%;
    padding: 50px 50px;
  }
}
</style>
