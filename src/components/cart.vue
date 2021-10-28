<template>

<div>
    <div
   
     v-for="i in finalsavedanswers"
     :key="i._id">
     <button>Remove</button>
        <div v-html="i.body"
        class="cart-answers"></div>
        
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
.cart-answers{
    display: flex;
    background-color: teal;
    flex-wrap: wrap;
    padding: 2em;
    margin-bottom: 1em;
    border-radius: 1em;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    
    /* flex-grow: inherit;
    flex-shrink: inherit; */
}
@media(max-width: 320px){
    .cart-answers{
        display: flex;
        align-items: center;
        
        
    }
}
button{
    border-radius: 1em;
    background-color: gray;
}
</style>
