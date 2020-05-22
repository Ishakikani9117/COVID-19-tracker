import Axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try{
       const res = await Axios.get(url);
       return res;
    }
    catch(error){
        console.log(error);
    }
}