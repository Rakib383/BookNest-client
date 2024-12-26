import { Link, useLocation, useNavigate } from "react-router-dom"
import register from "../assets/images/registerPic2.svg"
import { useContext, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Helmet } from "react-helmet-async";

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
                axios.post('https://book-nest-server-zeta.vercel.app/newUser', user)
                    .then(res => console.log(res))

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        successNotify()
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
                axios.post('https://book-nest-server-zeta.vercel.app/newUser', user)
                    .then(res => console.log(res))
                setUser(result.user)
                navigate(location.state ? location.state : "/")
                successNotify()
            })
            .catch(err => {
                errorNotify()
                console.log(err)
            })
    }
    return (
        <div className="flex flex-col justify-center items-center mt-8 md:mt-12 bg-[#eee] pb-14 sm:pb-16">
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
                <div className="card bg-base-100  max-w-[330px] md:max-w-[350px] shrink-0 shadow-2xl">

                    <form onSubmit={handleSubmit} className="card-body pb-1">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input h-11 w-64 md:w-72 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo-URL" className="input h-11 w-64 md:w-72 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input h-11 w-64 md:w-72 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onKeyDown={() => setError(null)} name="password" type="password" placeholder="password" className="input h-11 w-64 md:w-72 input-bordered" required />
                            {error && <p className="text-red-500 text-sm">{error}</p>}

                        </div>
                        <div className="form-control mt-2">
                            <button type="submit" className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Register</button>
                        </div>
                        <p className="text-center font-semibold my-0.5 text-sm dark:text-black">OR</p>
                    </form>
                    <div className="w-64 md:w-72 mx-auto mb-3">
                        <button onClick={handleSignInWithGoogle} className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white w-full">Continue with Google</button>
                    </div>
                    <p className="text-center mb-4 dark:text-black">Already have an account? <Link to="/login" className="text-red-500 font-bold underline">Login</Link></p>

                </div>
            </div>

        </div>
    )
}
