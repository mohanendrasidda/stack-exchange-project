<template>
   <div>
       <div v-for="i in answersdata.items" :key="i.answer_key">
          <div v-html="i.body"></div>   
          ----------------------------------------    
    </div>
   </div>
</template>

<script>
import {getanswers} from '@/services/answers'
export default{
    name: 'answers',
    props:{
        id:{
            type:  [Number, String]
        }
    },
    data(){
        return{
            answersdata: {

            },
            order: "",
            sort: ""
        }
    },
        async created(){
            try{
                const data= await getanswers(this.order, this.sort, this.id)
                    this.answersdata= data;         
            }catch(error){
                console.log(error)
              }
        }
}

</script>

<style scoped>

</style>
