<template>
  <div>
    <div >
      <form>
        <input type="search">
      </form>
      <div class="list-group" v-for=" item in allanswers.items" :key="item.creation_date">
       
                 
                 
                 <div v-html="item.body"></div>


        </div>
      

    </div>
      
  </div>
</template>

<script>
import { getanswers } from "@/services/answers";
export default {
  name: "answers",
  data() {
     return{
       allanswers: {
       items: [
         {},
         {owner: {}},
         {tags:[]}
       ],
      
       
       },
       order: '',
       sort: ''
     }

  },
  async created() {
    try {
      const data = await getanswers(this.order, this.sort);
      this.allanswers=data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
</style>

