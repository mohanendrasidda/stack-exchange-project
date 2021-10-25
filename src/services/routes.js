// Import router
import Router from 'vue-router';

// Import each page component
import questions from '@/components/questions.vue';
import answers from '@/components/answers.vue'
import cart from '@/components/cart.vue'


const router = new Router({
  mode: 'history',
  routes: [
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
