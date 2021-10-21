// Import router
import Router from 'vue-router';

// Import each page component
import answers from '@/components/answers.vue';


const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'answers',
      path: '/',
      component: answers,
    },
   
  ],
});



export default router;
