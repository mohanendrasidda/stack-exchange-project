// Import router
import Router from 'vue-router';

// Import each page component
import questions from '@/components/questions.vue';
import answers from '@/components/answers.vue'
import cart from '@/components/cart.vue'
import login from '@/components/Login.vue'
import signup from '@/components/signup.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      name:'signup',
      path:'/register',
      component: signup
    },
    {
      //name: 'login',
      name: 'questions',
      path: '/home',
     // component: login
     component: questions
    },
    {
     // name: 'questions',
     name: 'login',
      path: '/',
      //component: questions,
      component: login
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
   },
  
   
  ],
});



export default router;
// hello@gmail.com
// Hello@123#