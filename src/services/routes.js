// Import router
import Router from 'vue-router';

// Import each page component
import questions from '@/components/questions.vue';
import answers from '@/components/answers.vue'
import cart from '@/components/cart.vue'
import login from '@/components/Login.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'questions',
      path: '/',
      component: questions,
    },
    {
        name: 'answers',
        path: '/questions/:id',
        props: true, 
        component: answers
    },
    {
      name: 'cart',
      path: '/cart',
      props: true, 
      component: cart
  }
   
  ],
});



export default router;
