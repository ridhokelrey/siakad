<template>
  <div class="container">
    <div class="container-content">
      <div class="student-detail-attribute">
        <img src="../assets/icons/profile.svg" />
      </div>
      <div class="student-detail-value">
        <h1>{{ student.attributes.name }}</h1>
        <h3>{{ student.attributes.prodi }} - {{ student.attributes.fakultas }}</h3>
        <p>{{ student.attributes.nim }}</p>
        <p>{{ student.attributes.jenisKelamin }}</p>
        <p>{{ student.attributes.tempatLahir }}</p>
        <p>{{ student.attributes.tglLahir }}</p>
        <p>{{ student.attributes.alamat }}</p>
        <p>{{ student.attributes.noTelepon }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentDetailItem",
  props: {
    student: Object,
  },
};
</script>

<style scoped>
.container-content {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
}
.student-detail-attribute {
  width: 50%;
  text-align: center;
}
.student-detail-attribute img {
  width: 70%;
}
.student-detail-value {
  width: 50%;
  margin-left: 10rem;
  padding: 20px;
}
.student-detail-value h1,
h3 {
  margin-bottom: 20px;
}
.student-detail-value p {
  margin-bottom: 15px;
}

@media screen and (max-width: 1024px) {
  .container-content {
    height: 100%;
    display: block;
  }
  .student-detail-attribute {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .student-detail-attribute img {
    width: 100px;
  }
  .student-detail-value {
    width: 100%;
    margin-left: 2rem;
    padding: 20px;
  }
}

@media screen and (max-width: 768px) {
  .container-content {
    height: 100%;
    display: block;
  }
  .student-detail-attribute {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .student-detail-attribute img {
    width: 100px;
  }
  .student-detail-value {
    width: 100%;
    margin-left: 2rem;
    padding: 20px;
  }
}
</style>
