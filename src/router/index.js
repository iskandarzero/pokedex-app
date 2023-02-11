import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PokemonDetails from '../views/PokemonDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/pokemon/:id',
    name: 'details',
    component: PokemonDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
