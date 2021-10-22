import axios from "axios"
// ?order=desc&sort=activity&site=stackoverflow
// ?order=desc&sort=activity&site=stackoverflow
//?order=desc&sort=activity&site=stackoverflow&filter=withbody

// -----------------------------------------------------------------------------------------------//

/*to get questions
// https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow
*/

// -----------------------------------------------------------------------------------------------//

/*to get answers to the particular question id 
//https://api.stackexchange.com/2.2/questions/55177928/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody
*/

// ------------------------------------------------------------------------------------------------//

/* https://api.stackexchange.com/2.2/questions/?order=desc&sort=activity&site=stackoverflow&filter=withbody */

//--------------------------------------------------------------------------------------------------//

const getquestions = async (order,sort,tagged) => {
    try{
        const response = await axios.get(' https://api.stackexchange.com/2.2/questions/',
        {
            params:{
                order: order,
                sort: sort,
                site:'stackoverflow',
                filter: 'withbody',
                pazesize: '1',
                tagged: tagged
            }
        });
            return response.data;
    } catch(error){
        console.log(error)
    } 
}


export {
    getquestions
    
}