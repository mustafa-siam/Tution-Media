import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const axiosinstance = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials:true

});

const useAxiosSecure=()=>{
    const {signout}=useAuth()
    const navigate=useNavigate();
    useEffect(()=>{axiosinstance.interceptors.response.use(response=>{
        return response;
    },error=>{
        console.log("error in interceptor",error)
        if(error.status==401 || error.status==403){
            console.log('need to log out the user')
            signout()
            .then(()=>{
                console.log('logged out user')
                navigate('/login')
            })
            .catch(error=>{
                console.log(error)
            })
        }
         return Promise.reject(error);
    })},[])
    return axiosinstance;
}
export default useAxiosSecure;