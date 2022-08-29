import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DataMahasiswa from '../views/DataMahasiswa.vue';
import DataProdi from '../views/DataProdi.vue';
import Contact from '../views/Contact.vue';
// import AddStudent from '../views/AddStudent.vue';
// import StudentList from '../components/StudentList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/data-mahasiswa',
    name: 'DataMahasiswa',
    component: DataMahasiswa,
    // children: [
    //   { path: 'daftar-mahasiswa', component: StudentList },
    //   { path: 'tambah-mahasiswa', component: AddStudent },
    // ],
  },
  {
    path: '/data-prodi',
    name: 'DataProdi',
    component: DataProdi,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
