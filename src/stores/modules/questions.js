import { getquestions } from "@/services/questions";

const questiondata= {
    state: {
        questionsobject: {

        }
    },

    mutations:{
        setquestions(state, payload){
            console.log(payload)
            state.questionsobject= payload.items
        }
    },

    actions: {
        questionsAsync: async ({commit})=>{
            try{
                return await getquestions((data)=>{
                    //console.log(data)
                    console.log('Respose:', data)
                    commit('setquestions',data)
                    console.log('hi')
                })
               // const {title}= data
               //console.log('data')
               // console.log(title)
               // commit('setquestions',data)
            }catch(error){
                console.log('couldnt fetch questions data in store')
            }
        }
    }
}

export default questiondata