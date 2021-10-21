<template>
  <div id="app">
<AppNavbar/>
 <div class="container my-3">
            <!-- placeholder for ROuter to show the matching component -->
            <router-view></router-view>
        </div>

   
  </div>
</template>

<script>
import AppNavbar from './components/Navbar'
//import Home from '@/components/Home.vue'
//import workshopslist from '@/components/workshopslist.vue'

export default {
  name:'app',
  components:{
    AppNavbar,
    //AppHome:Home,
    //WorkshopsList:workshopslist
  }
  
  
}
</script>

<style>

</style>
