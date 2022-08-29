import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DataMahasiswa from '../views/DataMahasiswa.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue'
import StudentDetail from '../views/StudentDetail.vue'
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
  },
  {
    path: '/data-mahasiswa/:id',
    name: 'Mahasiswa',
    component: StudentDetail,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
