import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSceure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
})
const useAxiosSceure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth() ;
    // requet interceptors to add authoriztion header for every secoure call to the api 
    axiosSceure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stop by intetceptor', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }), function (error) {
        return Promise.reject(error);
    }
    // intercepes for 401 and 403 
    axiosSceure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status 
        // console.log('status error in the interceptor', error, status)

        //  for 401 and 403 
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSceure;
};

export default useAxiosSceure;