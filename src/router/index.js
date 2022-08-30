import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DataMahasiswa from '../views/DataMahasiswa.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue'
import StudentDetail from '../views/StudentDetail.vue'
import AddStudent from '../views/AddStudentItem.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'

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
    name: 'StudentDetail',
    component: StudentDetail,
    props: true,
  },
  {
    path: '/data-mahasiswa/tambah-mahasiswa',
    name: 'AddStudent',
    component: AddStudent,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/auth/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/auth/sign-in',
    name: 'SignIn',
    component: SignIn,
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
