import { Link, useLocation, useNavigate } from "react-router-dom"
import register from "../assets/images/registerPic2.svg"
import { useContext, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

export const RegisterPage = () => {
    const [error, setError] = useState(null)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const { createUser, updateUserProfile, setUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const successNotify = () => {
        toast.success("Signup successful!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const errorNotify = () => {
        toast.error("Please enter valid credentials!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries());
        const { email, password, photo, name } = data

        if (!passwordRegex.test(password)) {

            return setError("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.")
        }
        createUser(email, password)
            .then((res) => {
                const createdAt = res.user.metadata.creationTime
                const user = { name, email, createdAt }
                axios.post('http://localhost:5000/newUser', user)
                    .then(res => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "SignUp successful!",
                            showConfirmButton: false,
                            timer: 2000
                        });
                    })

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {

                        setUser(res.user)
                        navigate(location.state ? location.state : "/")


                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                errorNotify()
                console.log(err)
            })

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const createdAt = result.user.metadata.creationTime
                const name = result.user.displayName
                const email = result.user.email
                const user = { name, email, createdAt }
                axios.post('http://localhost:5000/newUser', user)
                    .then(res => console.log(res))
                setUser(result.user)
                navigate(location.state ? location.state : "/")
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SignUp successful!",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(err => {
                errorNotify()
                console.log(err)
            })
    }
    return (
        <div className="flex flex-col justify-center items-center mt-8 md:mt-12  pb-14 sm:pb-16">
            <Helmet>
                <title>Register</title>
            </Helmet>

            <h2 className="text-xl font-bold text-sky-400 mb-8 w-64 text-center font-charm ">Create Your Account & Get Started Today!</h2>
            <div className="md:flex items-center gap-16 lg:gap-20 md:mr-10 ">

                {/* register image */}
                <div>
                    <img src={register} className="w-80 lg:w-96 hidden md:block bg- rounded-md" alt="" />
                </div>


                {/* register form */}
                <div className="card bg-base-100 dark:bg-gray-800  w-80 rounded-lg md:w-[340px] shrink-0 shadow-2xl">

                    <form onSubmit={handleSubmit} className="card-body pb-1 ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-200">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input h-11 w-64 md:w-72 input-bordered dark:text-black" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text dark:text-gray-200">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo-URL" className="input h-11 w-64 md:w-72 input-bordered dark:text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-200">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input h-11 w-64 md:w-72 input-bordered dark:text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-200">Password</span>
                            </label>
                            <input onKeyDown={() => setError(null)} name="password" type="password" placeholder="password" className="input h-11 w-64 md:w-72 input-bordered dark:text-black" required />
                            {error && <p className="text-red-500 text-sm">{error}</p>}

                        </div>
                        <div className="form-control mt-2">
                            <button type="submit" className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Register</button>
                        </div>
                        <p className="text-center font-semibold my-0.5 text-sm ">OR</p>
                    </form>
                    <div className="w-64 md:w-72 mx-auto mb-3">
                        <button onClick={handleSignInWithGoogle} className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white w-full">Continue with Google</button>
                    </div>
                    <p className="text-center mb-4 ">Already have an account? <Link to="/login" className="text-primaryColor font-bold underline">Login</Link></p>

                </div>
            </div>

        </div>
    )
}
