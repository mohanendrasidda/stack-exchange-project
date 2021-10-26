<template>

<div>
    <div v-for="i in finalsavedanswers" :key="i._id">
        <div v-html="i.body"></div>
        --------------------------------------------------
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
   async mounted(){
       console.log(savedanswers)
       try{
         const data= await savedanswers.savedanswers()
         this.finalsavedanswers= data;
       }catch(error){
           console.log('unable to get data')
       }

   }
}
</script>

<style scoped>

</style>
