
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { toast } from "react-toastify"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import axios from "axios"
import loginPic from "../assets/images/login.png"
import Swal from "sweetalert2"


export const LoginPage = () => {
    const { signIn, setUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const erroNotify = () => {
        toast.error('Invalid credentials!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const { email, password } = data
        signIn(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successful!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                setUser(user);

                const email = result.user.email
                axios.post('http://localhost:5000/jwt', { email }, { withCredentials: true })
                    .then(res => {
                        // console.log(res.data)
                    })

                navigate(location.state ? location.state : "/")


            })
            .catch((error) => {
                console.log(error)
                erroNotify()

            })

    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successful!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(location.state ? location.state : "/")

            })
            .catch((error) => {
                console.log(error)
                erroNotify()
            })
    }
    return (
        <div className="flex flex-col justify-center items-center mt-8 md:mt-10 pb-14 md:pb-40">
            <Helmet>
                <title>Login</title>
            </Helmet>

            <h2 className="text-xl md:text-2xl font-bold text-Pink text-center mb-4 font-charm"  >- Welcome Back -</h2>
            <div className="flex items-center gap-7 mt-4">
                <div className="w-80 hidden md:block">
                    <img src={loginPic} className="" alt="" />
                </div>

                <div className="card bg-base-100 dark:bg-gray-800   w-[320px]  shrink-0 shadow-2xl">

                    <form onSubmit={handleSubmit} className="card-body pb-0 p-6">
                        <h1 className="text-xl font-bold text-sky-400  text-center">Login</h1>

                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text dark:text-gray-200">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered dark:text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-200">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered dark:text-black" required />

                        </div>
                        <div className="form-control mt-4">
                            <button type="submit" className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Login</button>
                            <p className="text-center font-semibold my-2 text-sm">OR</p>
                        </div>
                    </form>
                    <div className="w-[270px]  mx-auto mb-3">
                        <button onClick={handleSignInWithGoogle} className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white w-full">Continue with Google</button>
                    </div>
                    <p className="text-center pl-8 pb-4 text-sm ">Don’t Have An Account ? <Link className="text-primaryColor font-bold underline" to="/register">Register</Link></p>
                </div>
            </div>

        </div>
    )
}

