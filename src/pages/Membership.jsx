import { useContext } from "react";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Membership = () => {

    const {user} = useContext(AuthContext)


    const handleSubmit = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for subscribing to our membership! ",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div className="px-5 text-center  pb-10">

            <h2 className="text-2xl md:text-3xl  font-bold font-charm mt-7 md:mt-10">Become a Library Member</h2>
            <p className=" mt-2 w-[340px] mx-auto md:text-base text-gray-700 dark:text-gray-400">Unlock exclusive resources, events, and a community of passionate readers.</p>

            {/* container */}
            <div className="flex flex-col justify-center md:flex-row flex-wrap items-center gap-7 md:gap-9  my-7">
                {/* card-1 */}
                <div className="card w-80 bg-base-100 h-[434px] dark:bg-gray-800  shadow-sm relative py-2">

                    <div className="card-body text-start">

                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-primaryColor">Basic <br /> Membership</h2>
                            <span className="text-xl">Free</span>
                        </div>
                        <p className="mb-2 ">Enjoy access to essential library resources with limited book borrowing per month.</p>

                        <ul className="flex flex-col gap-2  text-xs   ">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Borrow limited books per month.</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access general library resources.</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Limited online catalog access.</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Free access to community library events.</span>
                            </li>
                            <li>
                                <span className="text-lg mr-1 pl-1 text-primaryColor">*</span>
                                <span>Register to get the service</span>
                            </li>
                        </ul>
                       {user ?  <button disabled className="btn bg-secondaryColor disabled:bg-gray-400  hover:bg-[#40916c] text-white btn-block">Register</button> : <Link to="/register" className="mt-2">
                            <button className="btn bg-secondaryColor disabled:bg-gray-400  hover:bg-[#40916c] text-white btn-block">Register</button>
                        </Link> 
                       }

                    </div>
                </div>
                {/* card-2 */}
                <div className="card w-80 bg-base-100 h-[434px] shadow-sm relative py-2 dark:bg-gray-800 ">

                    <div className="card-body text-start">

                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-primaryColor">Premium Membership</h2>
                            <span className="text-xl">$15/mo</span>
                        </div>
                        <p className="mb-2 ">Unlock extended borrowing limits, digital resources, and exclusive access to events, workshops, and book clubs.</p>

                        <ul className="flex flex-col gap-2  text-xs   ">
                            <li className="flex ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="text-start">Borrow more books with extended return periods.</span>
                            </li>
                            <li className="flex ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 shrink-0 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access digital resources (eBooks, audiobooks, research papers).</span>
                            </li>
                            <li className="flex ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4  shrink-0 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Participate in exclusive events, workshops, or book clubs.</span>
                            </li>

                            <li className="flex ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support services.</span>
                            </li>

                        </ul>
                        <div className="mt-2">
                            <button onClick={handleSubmit} className="btn bg-secondaryColor  hover:bg-[#40916c] text-white btn-block">Join Premium</button>
                        </div>

                    </div>
                </div>
                 {/* card-3 */}
                <div className="card w-80 bg-base-100 dark:bg-gray-800  h-[434px]  shadow-sm relative py-2">

                    <div className="card-body text-start">

                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-primaryColor">Lifetime Membership</h2>
                            <span className="text-xl">$300</span>
                        </div>
                        <p className="mb-2 ">Enjoy unlimited access to library resources with a one-time payment. Get exclusive privileges, early book reservations, and personalized reading recommendations for life.</p>

                        <ul className="flex flex-col gap-2  text-xs   ">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Special privileges like early book reservations.</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Personalized reading recommendations.</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Lifetime discounts on library merchandise.</span>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>VIP event invitations.</span>
                            </li>

                        </ul>
                        <div className="mt-2">
                            <button onClick={handleSubmit} className="btn bg-secondaryColor  hover:bg-[#40916c] text-white btn-block">Get Lifetime Access</button>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Membership
