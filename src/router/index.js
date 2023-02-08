import {createRouter, createWebHistory} from 'vue-router';
import DogDetails from '../views/DogDetails.vue';
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Home,
    props: true
  },
    {
      path: '/:breed',
      name: 'dog-details',
      component: DogDetails,
      props: true
    },
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })

  export default router


