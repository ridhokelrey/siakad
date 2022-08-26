<template>
  <div class="content">
    <Header />
    <div class="container">
      <div class="container-content">
        <SidebarMenu />
        <div class="student-content">
          <form class="form-add">
            <div class="form-control">
              <label>NIM</label>
              <input type="text" name="nim" placeholder="NIM" />
            </div>
            <div class="form-control">
              <label>Nama Mahasiswa</label>
              <input type="text" name="name" placeholder="Nama Mahasiswa" />
            </div>

            <div class="form-control">
              <label>Periode Masuk</label>
              <select name="periodeMasuk">
                <option>2021/2022 Genap</option>
                <option>2021/2022 Ganjil</option>
                <option>2020/2021 Genap</option>
                <option>2020/2021 Ganjil</option>
              </select>
            </div>
            <div class="form-control">
              <label>Fakultas</label>
              <select name="fakultas">
                <option>FE</option>
                <option>FH</option>
                <option>FIB</option>
                <option>FISIP</option>
                <option>FK</option>
                <option>FKG</option>
                <option>FT</option>
                <option>FMIPA</option>
              </select>
            </div>
            <div class="form-control">
              <label>Program Studi</label>
              <select name="fakultas">
                <option>Akuntansi</option>
                <option>Hukum</option>
                <option>Psikologi</option>
                <option>Ilmu Komunikasi</option>
                <option>Kedokteran</option>
                <option>Kedokteran Gigi</option>
                <option>Teknik Sipil</option>
                <option>Informatika</option>
                <option>Biologi</option>
              </select>
            </div>
            <div class="form-control">
              <label>Pas Foto</label>
              <input type="file" name="foto"/>
            </div>
            <div class="form-control">
              <label>Tempat Lahir</label>
              <input type="text" name="name" placeholder="Tempat Lahir" />
            </div>
            <div class="form-control">
              <label>Tanggal Lahir</label>
              <input type="date" name="name" />
            </div>
            <div class="form-control">
              <label>Agama</label>
              <select name="agama">
                <option>Islam</option>
                <option>Kristen</option>
                <option>Katolik</option>
                <option>Hindu</option>
                <option>Buddha</option>
                <option>Konghucu</option>
              </select>
            </div>
            <div class="form-control">
              <label>Jenis Kelamin</label>
              <select name="jenisKelamin">
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </select>
            </div>
            <div class="form-control">
              <label>Golongan Darah</label>
              <select name="jenisKelamin">
                <option>O</option>
                <option>A</option>
                <option>B</option>
                <option>AB</option>
              </select>
            </div>
            <div class="form-control">
              <label>NIK / Paspor (Khusus WNA)</label>
              <input type="text" name="nik" placeholder="NIK" />
            </div>
            <div class="form-control">
              <label>Nomor Telepon Seluler</label>
              <input
                type="text"
                name="nomorTelepon"
                placeholder="Nomor Telepon Seluler"
              />
            </div>
            <div class="form-control">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div class="form-control">
              <label>Alamat Asal</label>
              <input type="text" name="alamatAsal" placeholder="Alamat Asal" />
            </div>
            <div class="form-control">
              <label>Alamat Domisili</label>
              <input
                type="text"
                name="alamatDomisili"
                placeholder="Alamat Domisili"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SidebarMenu from '../components/SidebarMenu.vue';
import StudentList from '../components/StudentList.vue';

export default {
  name: 'AddStudent',
  components: {
    Header,
    Footer,
    SidebarMenu,
    StudentList,
  },
};
</script>

<style scoped>
.content {
  height: 1100px;
}
.container-content {
  width: 100%;
  display: flex;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
}
.form-add {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input,
select {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>