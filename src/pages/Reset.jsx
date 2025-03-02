
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"


export const Reset = () => {
    const { resetPassword } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleResetPassword = (e) => {
        e.preventDefault()
        setLoading(true)
        const email = e.target.email.value

        resetPassword(email)
            .then(() => {
                setTimeout(() => {

                    window.open("https://mail.google.com", "_blank")
                    navigate("/")
                    loading(false)
                }, 3000)
            })
            .catch((error) => {
                console.log(error)
                loading(false)

            });
    }
    return (
        <div>
            {
                !loading && <div className="flex flex-col justify-start mt-16 md:mt-28 items-center min-h-screen">

                    <h2 className="text-4xl  text-secondaryColor  w-64 text-center italic font-bold mb-2">Don't worry</h2>
                    <h4 className="text-2xl font-bold  dark:text-white mb-8 w-64 text-center">Reset your password</h4>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        <form onSubmit={handleResetPassword} className="card-body pb-0">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter Your Email" className="input text-black input-bordered" required />
                            </div>

                            <div className="form-control mt-2 pb-6">
                                <button className="btn bg-primaryColor text-white hover:bg-primaryColor  ">Reset Password</button>

                            </div>
                        </form>

                    </div>



                </div>
            }
            {loading &&  <div className="h-screen flex flex-col justify-start mt-20 md:mt-32 items-center gap-4 md:gap-8">
                <span className="loading loading-bars loading-xl w-10 sm:w-16"></span>
                <p className="text-lg px-3 font-semibold">"Sending password reset email. Please wait..."</p>
            </div>}
           
           
        </div>
    )
}
