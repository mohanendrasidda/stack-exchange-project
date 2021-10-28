<template>
   <div>
       <div v-for="(i,index) in answersdata.items" :key="i.answer_id">
         
          <div v-html="i.body"></div> 
           
          <button :data-id="index" @click="storeanswers">Add to cart</button> 
          ----------------------------------------    
    </div>
   </div>
</template>

<script>
import {getanswers} from '@/services/answers'
import postanswers from '@/services/cart.js'
export default{
    name: 'answers',
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
                this.$router.push({
                    name: 'cart'
                });
            }catch(error){
                console.log('adding data error')
            }
            
        }

    }
}

</script>

<style scoped>

</style>
