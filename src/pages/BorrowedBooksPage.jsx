import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import axios from "axios";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

export const BorrowedBooksPage = () => {
    const { user,setLoading } = useContext(AuthContext);

    const [books, setbooks] = useState([])

    
    useEffect(() => {
       
        if(!user) {
            setLoading(true)
        }
        else {
            
            axios.post('http://localhost:5000/myBorrowedBooks', { email: user.email })
                .then(res => {
                    setbooks(res.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))

        }

    }, [user])

    const handleReturnBook = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Return it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`http://localhost:5000/books/${id}/increase`)
                    .then((res) => {
                        axios.delete(`http://localhost:5000/borrowedBooks/${id}`)
                            .then(res => {
                                // console.log(res.data)
                            })
                        // console.log(res.data)
                        const filteredBooks = books.filter(book => book.Book_id !== id)
                        setbooks(filteredBooks)

                    })
                    .catch(err => {
                        console.log(err)
                    })

                Swal.fire({
                    title: "Returned!",
                    text: "Book has been returned Successfully.",
                    icon: "success"
                });
            }
        })

    }
    return (
        <div className="bg-[#eee] mt-5 sm:pb-24">
            <Helmet>
                <title>Your Borrowed Books</title>
            </Helmet>
            <h2 className="font-black font-charm text-xl md:text-2xl text-primaryColor underline mb-3 sm:mb-4 text-center">Borrowed Book List</h2>
            <p className="text-gray-600 font-semibold  md:text-[17px] px-3 w-96 md:w-[420px] mx-auto text-center">Review your borrowed books and keep track of the return dates.</p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-9 mt-7 sm:mt-12 pb-14 px-3">

                {
                    books.length === 0 && <div className="flex flex-col items-center pb-24">

                        <img className="w-48 sm:w-72" src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg" alt="" />
                        <h2 className="text-lg sm:text-xl text-secondaryColor ">No Data Found</h2> </div>
                }
                {
                    books.map((book, idx) => (
                        <div key={idx} className=" ">

                            <div className="w-80 h-96 mx-auto flex flex-col  items-center card shadow-lg px-6 gap-3 py-6 justify-center bg-white">
                                <div className="w-36 h-44 sm:w-3/5">
                                    <img src={book.image} className=" w-full h-full" alt="" />
                                </div>
                                <div className="text-center ">
                                    <h3 className="font-semibold">{book.name}</h3>
                                    <p>Category: {book.category}</p>
                                    <p>Borrowed Date: {book.BorrowedDate}</p>
                                    <p>Return Date: {book.returnDate}</p>
                                    <button onClick={() => handleReturnBook(book.Book_id)} className="btn  bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white px-7 sm:mt-3 mt-2">Return</button>

                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
