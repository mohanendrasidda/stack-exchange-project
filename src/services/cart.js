import axios from "axios";


const savedanswers= async ()=>{
    console.log('just check')
    try{
        const response= await axios.get('http://localhost:3000/');
        console.log('data recieved')
        return response.data;
    }
    
    catch(error){
        console.log(error.message)
    }
}

const postanswers= async (saveddata)=>{
    console.log(saveddata)
    try{
        const response= await axios.post('http://localhost:3000/savedanswers',
        saveddata,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        

        console.log(response)
        return response.data;
    }
    catch(error){
        console.log(error.message)
    }
}

const deleteanswer= async(removedataid)=>{
    try{
        await axios.delete(`http://localhost:3000/savedanswers/${removedataid}`
        ,{
            params:{
                removedataid:removedataid
            }
        }
        )

    }catch(error){
        console.log('failed to pass id')
    }
}
export default{
    savedanswers,
    postanswers,
    deleteanswer
}