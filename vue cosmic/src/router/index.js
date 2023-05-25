import { createRouter, createWebHistory } from 'vue-router'
// import index from '../main'
import Home from '../components/rootFile/Home.vue'
import Shop from '../components/rootFile/Shop.vue'
import About from '../components/rootFile/About.vue'
import Login from '../components/rootFile/Login.vue'
import Contact from '../components/rootFile/Contact.vue'
import Registar from '../components/rootFile/Registar.vue'
import ProductPage from '../components/rootFile/product.vue'
import allProduct from '../components/rootFile/AllProducts.vue'
import Add from '../components/rootFile/Add.vue'

import Show from '../components/rootFile/Show.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path: '/Shop/:id',
      name: 'Shop',
      component:Shop
    },
     {
      path:'/About/:id',
      name:'About',
      component:About
    },
     {
      path:'/Login/:id',
      name:'Login',
      component:Login
    },
     {
      path:'/Registar/:id',
      name:'Registar',
      component:Registar
    },
    {
      path:'/Contact/:id',
      name:'Contact',
      component:Contact
    },
    {
      path:'/allProducts/:id',
      name:'allProduct',
      component:allProduct
    },
    // vue product page component
     {
      path:'/ProductPage/:id',
      name:'ProductPage',
      component:ProductPage
    },
    {
      path:'/Add/:id',
      name:'Add',
      component:Add
    },

    {
      path:'/Show/:id',
      name:'Show',
      component:Show
    },

   {
    path:'/:pathMatch(.*)*',
    name:'NotFound',
    component:NotFound
   }
    
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router
