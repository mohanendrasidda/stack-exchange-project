// Import router
import Router from 'vue-router';

// Import each page component
import questions from '@/components/questions.vue';


const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'answers',
      path: '/',
      component: questions,
    },
   
  ],
});



export default router;
