import { useLoaderData, } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import moment from "moment";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
import { Loading } from "../components/Loading";


export const DetailsPage = () => {
    const { user } = useContext(AuthContext)
    const [isBorrowed, setIsBorrowed] = useState(false)
    const data = useLoaderData()
    const [loading, setloading] = useState(true)

    const { _id, image, name, author, category, quantity, rating, ShortDescription, BookContent } = data



    useEffect(() => {

        const email = user.email
        axios.post('http://localhost:5000/search', { email, _id })
            .then(res => {
                if (res.data) {
                    setloading(false)
                    setIsBorrowed(true)
                }
                else {
                    setloading(false)
                }

            })

    }, [user])


    const handleFormSubmit = (e) => {
        setIsBorrowed(true)
        e.preventDefault()
        const BorrowedDate = moment().format('D/M/YYYY')
        const form = e.target
        const returnDate = e.target.returnDate.value
        const data = {
            Borrower: user.displayName,
            Borrower_email: user.email,
            Book_id: _id,
            image, name, author, category, rating, ShortDescription, BookContent, BorrowedDate, returnDate
        }

        axios.patch(`http://localhost:5000/books/${_id}/decrease`, {})
            .then(res => {
                axios.post('http://localhost:5000/borrowedBooks', data)
                    .then(res => {
                        Swal.fire({
                            title: "Success!",
                            text: "Apply successful",
                            icon: "success"
                        });

                        form.reset()
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))

        form.reset()
        document.getElementById('modal_1').close()


    }

    return (
        <>
            {
                loading ? <Loading /> : <div className="pt-10 sm:pt-16 pb-20 md:pb-28 ">
                    <Helmet>
                        <title>DetailsPage</title>
                    </Helmet>
                    <h2 className="font-black font-charm text-xl md:text-2xl text-primaryColor text-center mb-8 sm:mb-10 underline">Book Details</h2>

                    <div className="w-80 sm:w-[510px] mx-auto flex flex-col sm:flex-row items-center card shadow-lg px-6 gap-3 py-6 justify-center bg-white dark:bg-gray-800">
                        <div className="w-36 h-44 sm:w-3/5 relative">
                            <img src={image} className=" w-full h-full pb-2" alt="" />
                            {
                                isBorrowed && <p className="text-white text-base font-bold font-charm absolute -rotate-[37deg] -right-3 sm: bottom-0.5 bg-secondaryColor px-2 py-0.5 ">Borrowed</p>
                            }
                        </div>
                        <div className="text-center pt-1">
                            <h3 className="font-semibold">{name}</h3>
                            <p>By {author}</p>
                            <p>Category: {category}</p>
                            <p>Quantity: {quantity}</p>

                            <div className="w-28 mx-auto"> <ReactStars
                                count={5}
                                value={+rating}
                                size={24}
                                isHalf={true}
                                edit={false}
                                activeColor="#40916c"
                            /></div>
                            <p className="text-center ">Description: {ShortDescription}</p>
                            <p>{BookContent}</p>
                            {
                                <button disabled={!quantity || isBorrowed} onClick={() => {
                                    document.getElementById('modal_1').showModal()

                                }} className={`btn  bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white px-7 disabled:dark:text-gray-400 sm:mt-3 mt-2`}>Borrow</button>
                            }


                        </div>

                    </div>
                </div>
            }

            {/* modal for Borrow */}

            <dialog id="modal_1" className="modal modal-middle">

                <form onSubmit={handleFormSubmit} className="modal-box flex flex-col items-center">
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" value={user?.displayName} placeholder="name" className="input dark:text-black input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" value={user?.email} placeholder="email" className="input input-bordered dark:text-black" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Return Date</span>
                        </label>
                        <input name="returnDate" type="date" className="input w-56 input-bordered dark:text-black" required />

                    </div>
                    <div className="modal-action justify-center">
                        <button type="submit" className="btn  bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white px-7 ">Submit</button>
                    </div>
                </form>

            </dialog>


        </>
    )
}
