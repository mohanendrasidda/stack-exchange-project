import { getquestions } from "@/services/questions";
console.log('modulegetquestions',getquestions)

const questiondata= {
    state: {
        questionsobject: []
    },
    getters:{
        getitems: state =>{
            return state.questionsobject.forEach(item=>item.title)
        }
    },

    mutations:{
        setquestions(state, items){
            console.log(items)
            state.questionsobject= items
        }
    },

    actions: {
        // questionsAsync: async ({commit})=>{
        //     try{
        //           const question= await getquestions()
        //           console.log('questioninstore:',question)
        //           commit('setquestions',question)
               
        //     }catch(error){
        //         console.log('couldnt fetch questions data in store')
        //     }
        // },
         getquestions: async ( { commit }, q )=> {
             console.log('getquestions in actions block',getquestions)
             try{
                const data= await getquestions( q )
                console.log('getquestions in actions block',getquestions)
                        
                console.log('after:',data)
                const { items } = data
                // const ititle= (items)=>{
                //     let i;
                //     for (let i=0; i<items.length; i++) {
                //         // Runs 5 times, with values of step 0 through
                //         console.log('Walking east one step');
                //         // console.log('after2:',title)
                //         return i.title
                //       }
                //       return i.title
                      
                // }
                
                
                console.log('after1:',data)
              // console.log('after3:',ititle)

               
                commit( 'setquestions', items );

                // return email;
             }catch(error){
                 console.log('error in getting module getquestions')
             }
           
            
        },
    }
}

export default questiondata