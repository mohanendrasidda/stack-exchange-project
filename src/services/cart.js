import axios from "axios";


const savedanswers= async ()=>{
    try{
        const response= await axios.post('http://localhost:3000');
        console.log('data recieved')
        return response.data;
    }
    
    catch(error){
        console.log(error.message)
    }
}


export default{
    savedanswers
}