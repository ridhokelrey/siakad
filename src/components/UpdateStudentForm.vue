<template>
  <form @submit="onSubmit" class="form-add">
    <div class="form-control">
      <label>NIM</label>
      <input type="text" v-model="nim" name="nim" />
    </div>

    <div class="form-control">
      <label>Nama Mahasiswa</label>
      <input type="text" v-model="name" name="name" placeholder="Nama Mahasiswa" />
    </div>

    <div class="form-control">
      <label>Periode Masuk</label>
      <select v-model="periodeMasuk">
        <option value="" selected disabled>Please Select</option>
        <option>2021/2022 Genap</option>
        <option>2021/2022 Ganjil</option>
        <option>2020/2021 Genap</option>
        <option>2020/2021 Ganjil</option>
      </select>
    </div>

    <div class="form-control">
      <label>Fakultas</label>
      <select v-model="fakultas">
        <option value="" selected disabled>Please Select</option>
        <option>FE</option>
        <option>FH</option>
        <option>FIB</option>
        <option>FT</option>
        <option>FISIP</option>
        <option>FK</option>
        <option>FKG</option>
        <option>FMIPA</option>
      </select>
    </div>

    <div class="form-control">
      <label>Program Studi</label>
      <select v-model="prodi">
        <option value="" selected disabled>Please Select</option>
        <option>Akuntansi</option>
        <option>Manajemen</option>
        <option>Ekonomi Pembangunan</option>
        <option>Hukum</option>
        <option>Psikologi</option>
        <option>Ilmu Komunikasi</option>
        <option>Kedokteran Umum</option>
        <option>Kedokteran Gigi</option>
        <option>Teknik Sipil</option>
        <option>Arsitektur</option>
        <option>Informatika</option>
        <option>Biologi</option>
      </select>
    </div>

    <div class="form-control">
      <label>Tempat Lahir</label>
      <input
        type="text"
        v-model="tempatLahir"
        name="tempatLahir"
        placeholder="Tempat Lahir"
      />
    </div>

    <div class="form-control">
      <label>Tanggal Lahir</label>
      <input type="date" v-model="tglLahir" name="tglLahir" />
    </div>

    <div class="form-control">
      <label>Jenis Kelamin</label>
      <select v-model="jenisKelamin">
        <option value="" selected disabled>Please Select</option>
        <option>Laki-laki</option>
        <option>Perempuan</option>
      </select>
    </div>

    <div class="form-control">
      <label>Alamat</label>
      <input type="text" v-model="alamat" name="alamat" placeholder="Alamat" />
    </div>

    <div class="form-control">
      <label>Nomor Telepon Seluler</label>
      <input
        type="text"
        v-model="noTelepon"
        name="noTelepon"
        placeholder="Nomor Telepon Seluler"
      />
    </div>
    <div>
      <button class="btn" type="submit">Update Mahasiswa</button>
    </div>
  </form>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SidebarMenu from "./SidebarMenu.vue";
import StudentList from "./StudentList.vue";

export default {
  name: "UpdateStudentForm",
  components: {
    Header,
    Footer,
    SidebarMenu,
    StudentList,
  },
  props: {
    students: Object,
  },
  data() {
    return {
      student: {},
      nim: "",
      name: "",
      periodeMasuk: "",
      fakultas: "",
      prodi: "",
      tempatLahir: "",
      tglLahir: "",
      jenisKelamin: "",
      alamat: "",
      noTelepon: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.nim) {
        alert("Please add NIM");
        return;
      }

      // make form value to be an object
      const updStudent = {
        nim: this.nim,
        name: this.name,
        periodeMasuk: this.periodeMasuk,
        fakultas: this.fakultas,
        prodi: this.prodi,
        tempatLahir: this.tempatLahir,
        tglLahir: this.tglLahir,
        jenisKelamin: this.jenisKelamin,
        alamat: this.alamat,
        noTelepon: this.noTelepon,
      };

      // run updateStudent method with updStudent and id parameter
      this.$emit("update-student", updStudent, this.$route.params.id);

      // clear the form
      this.nim = "";
      this.name = "";
      this.periodeMasuk = "";
      this.fakultas = "";
      this.prodi = "";
      this.tempatLahir = "";
      this.tglLahir = "";
      this.jenisKelamin = "";
      this.alamat = "";
      this.noTelepon = "";
    },

    // method to fetch single student data by ID
    async fetchStudent(id) {
      const res = await fetch(
        `https://afternoon-garden-05625.herokuapp.com/api/students/${id}`
      );

      const data = await res.json();

      return data.data;
    },
  },

  async created() {
    // check there is token or not, if nothing, go forward to login page
    if (!this.$cookies.isKey("token")) {
      this.$router.push("/auth/sign-in");
    }

    // fetch student by id and then fill the value to the data
    this.student = await this.fetchStudent(this.$route.params.id);
    this.nim = this.student.attributes.nim;
    this.name = this.student.attributes.name;
    this.periodeMasuk = this.student.attributes.periodeMasuk;
    this.fakultas = this.student.attributes.fakultas;
    this.prodi = this.student.attributes.prodi;
    this.tempatLahir = this.student.attributes.tempatLahir;
    this.tglLahir = this.student.attributes.tglLahir;
    this.jenisKelamin = this.student.attributes.jenisKelamin;
    this.alamat = this.student.attributes.alamat;
    this.noTelepon = this.student.attributes.noTelepon;
  },
};
</script>

<style scoped>
.form-add {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}
.form-control {
  margin: 10px 0;
}
.form-control label {
  display: block;
}
.form-control input,
select {
  width: 90%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 16px;
}
.btn {
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .form-add {
    width: 350px;
    column-gap: 20px;
  }
  .form-control label {
    font-size: 12px;
  }
  .form-control input,
  select {
    width: 100%;
    margin: 0px;
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .form-add {
    width: 350px;
    column-gap: 20px;
  }
  .form-control label {
    font-size: 12px;
  }
  .form-control input,
  select {
    width: 100%;
    margin: 0px;
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
  }
}
</style>
