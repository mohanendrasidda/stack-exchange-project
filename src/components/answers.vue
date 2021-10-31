<template>
   <div class="body">
       <div class="heading">
           <h3>Results</h3>
       </div>
       <div v-for="(i,index) in answersdata.items" :key="i.answer_id">
         
          <div v-html="i.body"
          class="cart-answers"></div> 
           
          <button :data-id="index" @click="storeanswers">Add to cart</button> 
          <hr>
      </div>
      
   </div>
</template>

<script>
import {getanswers} from '@/services/answers'
import postanswers from '@/services/cart.js'
export default{
    name: 'Answers',
    props:{
        id:{
            type:  [Number, String]
        },
        title:{
            type: String
        }
    },
    data(){
        return{
            answersdata: {

            },
            // saveddata:{

            // },
            order: "",
            sort: ""
        }
    },
        async created(){
            try{
                const data= await getanswers(this.order, this.sort, this.id,this.title)
                    this.answersdata= data;         
            }catch(error){
                console.log(error)
              }
        },
    methods:{
        async storeanswers(event){
            console.log(event.target.dataset.id)
            console.log(this.answersdata.items[event.target.dataset.id])
            alert('your answer has been saved to cart')
            try{
                const saveddata= this.answersdata.items[event.target.dataset.id]
                const data= await postanswers.postanswers(saveddata)
                console.log(data)
                // this.$router.push({
                //     name: 'cart'
                // });
            }catch(error){
                console.log('adding data error')
            }
            
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
    background-color: rgb(255, 205, 111);
    flex-wrap: wrap;
    padding: 4em 0 0 2em;
    margin-bottom: 1em;
    border-radius: 1em;
    color: rgb(255, 255, 255); 
    position: relative;
    overflow: auto; 
}
.heading{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 2em 0 2em 0
}
hr{
    border-top: solid gray;
}
</style>
