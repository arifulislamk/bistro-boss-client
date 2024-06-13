import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../components/SocialLogin/SocialLogin";

const SignUp = () => {

    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.phtoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log(' user added in the database')
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "user Updated Done",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    console.log(watch("example"))
    return (
        <>
            <Helmet>
                <title>Bistro | Signup</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} name="name" type="text" placeholder="name" className="input input-bordered" required />
                                {errors.name && <span className=" text-red-500">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("phtoURL", { required: true })} type="text" placeholder="name" className="input input-bordered" required />
                                {errors.phtoURL && <span className=" text-red-500">Photo URL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} name="email" type="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className=" text-red-500">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                })} name="password" type="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "required" && (
                                    <p role="alert">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className=" text-red-500">password must be 6 Charecter</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className=" text-red-500">password must be 20 Charecter</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className=" text-red-500">password must have one UpperCase, LowerCase, Special charecter and Number</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className=" px-6 py-3 "><small>Already have an account ? Please <Link to='/login'>Login</Link></small></p>

                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;