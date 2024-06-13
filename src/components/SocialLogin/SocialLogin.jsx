import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        navigate('/')
                        console.log(res.data)
                        
                    })
            })
    }
    return (
        <div className=" px-8 py-4">
            <div className=" divider"></div>
            <button onClick={handleGoogleLogin} className="btn">
                <FaGoogle className=" mr-2" />
                Google
            </button>
        </div>
    );
};

export default SocialLogin;