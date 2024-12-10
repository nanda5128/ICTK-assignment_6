import axios from 'axios';
const adminAxios=axios.create({
baseURL:'http://localhost:3000'
})
adminAxios.interceptors.request.use((config)=>{
const accessToken=sessionStorage.getItem('admintoken');
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
export default  adminAxios;