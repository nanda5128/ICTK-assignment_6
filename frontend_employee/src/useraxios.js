import axios from 'axios';
const userAxios=axios.create({
baseURL:'http://localhost:3000'
})
userAxios.interceptors.request.use((config)=>{
const accessToken=sessionStorage.getItem('token');
if(accessToken){

    if(config){
        config.headers.token=accessToken;
    }
}
return config;
},(error)=>{

    return Promise.reject(error);
}

)
export default  userAxios;