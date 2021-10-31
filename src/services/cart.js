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
    console.log('delete anwer called')
    console.log(removedataid)
    console.log(`http://localhost:3000/61782e482579e231e8c3be78`)
    try{
       // await axios.delete('http://localhost:3000/',removedataid)
       console.log('before 43')
      const response=  await axios.delete(`http://localhost:3000/${removedataid}`)
      console.log(response)
        return response;
        

    }catch(error){
        console.log('failed to pass id')
    }
}
export default{
    savedanswers,
    postanswers,
    deleteanswer
}