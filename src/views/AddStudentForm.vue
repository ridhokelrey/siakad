<template>
  <form @submit="onSubmit" class="form-add">
    <div class="form-control">
      <label>NIM</label>
      <input type="text" v-model="nim" name="nim" placeholder="NIM" />
    </div>

    <div class="form-control">
      <label>Nama Mahasiswa</label>
      <input
        type="text"
        v-model="name"
        name="name"
        placeholder="Nama Mahasiswa"
      />
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
        <option>Hukum</option>
        <option>Psikologi</option>
        <option>Kedokteran</option>
        <option>Kedokteran Gigi</option>
        <option>Teknik Sipil</option>
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
      <button class="btn" type="submit">Tambah Mahasiswa</button>
    </div>
  </form>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SidebarMenu from '../components/SidebarMenu.vue';
import StudentList from '../components/StudentList.vue';

export default {
  name: 'AddStudentForm',
  components: {
    Header,
    Footer,
    SidebarMenu,
    StudentList,
  },
  data() {
    return {
      nim: '',
      name: '',
      periodeMasuk: '',
      fakultas: '',
      prodi: '',
      // foto: '',
      tempatLahir: '',
      tglLahir: '',
      jenisKelamin: '',
      alamat: '',
      noTelepon: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.nim) {
        alert('Please add NIM');
        return;
      }

      const newStudent = {
        nim: this.nim,
        name: this.name,
        periodeMasuk: this.periodeMasuk,
        fakultas: this.fakultas,
        prodi: this.prodi,
        // foto: this.foto,
        tempatLahir: this.tempatLahir,
        tglLahir: this.tglLahir,
        jenisKelamin: this.jenisKelamin,
        alamat: this.alamat,
        noTelepon: this.noTelepon,
      };

      this.$emit('add-student', newStudent);

      (this.nim = ''),
        (this.name = ''),
        (this.periodeMasuk = ''),
        (this.fakultas = ''),
        (this.prodi = ''),
        // (this.foto = ''),
        (this.tempatLahir = ''),
        (this.tglLahir = ''),
        (this.jenisKelamin = ''),
        (this.alamat = '');
        (this.noTelepon = '');
    },
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
</style>