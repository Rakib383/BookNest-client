
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { toast } from "react-toastify"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"


export const LoginPage = () => {
    const { signIn, setUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const successNotify = () => {
        toast.success("Login successful!", {
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

    const erroNotify = () => {
        toast.error('Invalid credentials!', {
            position: "top-center",
            autoClose: 5000,
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
                successNotify()
                setUser(user);
               
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
                successNotify()
                navigate(location.state ? location.state : "/")

            })
            .catch((error) => {
                console.log(error)
                erroNotify()
            })
    }
    return (
        <div className="flex flex-col justify-center items-center mt-8 md:mt-10 pb-14">
            <Helmet>
                <title>Login</title>
            </Helmet>

            <h2 className="text-xl md:text-2xl font-bold text-Pink text-center mb-4 font-charm"  >- Welcome Back -</h2>

            <div className="card bg-base-100  w-[320px] md:w-[340px] shrink-0 shadow-2xl">

                <form onSubmit={handleSubmit} className="card-body pb-0 p-6">
                    <h1 className="text-xl font-bold text-sky-400  text-center">Login</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to="" className="label-text-alt link link-hover text-[14px] underline mt-2">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-1">
                        <button type="submit" className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Login</button>
                        <p className="text-center font-semibold my-2 text-sm">OR</p>
                    </div>
                </form>
                <div className="w-[270px] md:w-[290px] mx-auto mb-3">
                    <button onClick={handleSignInWithGoogle} className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white w-full">Continue with Google</button>
                </div>
                <p className="text-center pl-8 pb-4 text-base ">Don’t Have An Account ? <Link className="text-red-500 font-bold underline" to="/register">Register</Link></p>
            </div>

        </div>
    )
}

