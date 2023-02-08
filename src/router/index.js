import {createRouter, createWebHistory} from 'vue-router';
import DogDetails from '../views/DogDetails.vue';


const routes = [
    {
      path: '/dog-details/:index',
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


