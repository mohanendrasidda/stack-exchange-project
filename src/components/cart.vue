<template>

<div class="body">
    <div
   
     v-for="(i,index) in finalsavedanswers"
     :key="i._id">
        <div v-html="i.body"
        class="cart-answers"></div>
      <button :data-id="index" @click="removeanswer($event)">Remove</button>
      <hr>
        
    </div>
    
  
</div>
    
</template>

<script>
import savedanswers from '@/services/cart.js'
import deleteanswer from '@/services/cart.js'
export default{
    name: 'cart',
    data(){
        return{
            finalsavedanswers: {
                _id:''
            }
        }
    },
    methods:{
       async removeanswer(event){
        //   console.log(this.finalsavedanswers[event.target.dataset.id])
        console.log('remove once called')
           try{
            
               const removedata= this.finalsavedanswers[event.target.dataset.id]
               const removedataid= removedata._id
               console.log(removedataid)
               alert(`your answer is removed refresh to see the result`)
               const data= await deleteanswer.deleteanswer(removedataid)
               const data1= await savedanswers.savedanswers()
               this.finalsavedanswers= data1;
               this.$router.push( { name: 'cart' } )
               //savedanswers.savedanswers()
              // console.log(this.finalsavedanswers)
               console.log(data)
           }catch(error){
               console.log('not received data')
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
.body{
  background-color: rgb(32, 105, 150);
  width: 100%;
  padding: 4em 2em 0 2em; 
  border-radius: 5px;
}

.cart-answers{
     display: flex;
    background-color:rgb(240, 192, 90);
    flex-wrap: wrap;
    padding: 4em 0 0 2em;
    margin-bottom: 1em;
    border-radius: 1em;
    color: rgb(255, 255, 255); 
    position: relative;
    overflow: auto; 
    
    /* flex-grow: inherit;
    flex-shrink: inherit; */
}
@media(max-width: 320px){
    .cart-answers{
        display: flex;
        align-items: center;
        
        
    }
}

</style>
