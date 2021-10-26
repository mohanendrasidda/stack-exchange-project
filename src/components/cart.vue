<template>

<div>
    <div v-for="i in finalsavedanswers" :key="i._id">
        {{body}}
    </div>
    
</div>
    
</template>

<script>
import savedanswers from '@/services/cart.js'
export default{
    name: 'cart',
    data(){
        return{
            finalsavedanswers: {

            }
        }
    },
   async created(){
       try{
         const data= await savedanswers()
         this.finalsavedanswers= data;
       }catch(error){
           console.log('unable to get data')
       }

   }
}
</script>

<style scoped>

</style>
