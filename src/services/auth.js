import axios from 'axios';
// import config from '@/config';
// import { successHandler, errorHandler } from './helper';

export const login = ( credentials ) => {
    console.log(credentials)
    return axios.post(
                `http://localhost:3000/auth/login`,
                credentials,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            
                // .then( successHandler )
                .catch( console.log('error in services auth') );
};

//  "email": "d@gmail.com",
// "password": "Bbacdef2#"
const signupcredentials= async (credentialstosend)=>{
    console.log(credentialstosend)
    try{
        const response= await axios.post('http://localhost:3000/auth/register',
        credentialstosend,
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


export default{
    login,
    signupcredentials
}
//Ggem@123#