import axios from "axios"
import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import Swal from 'sweetalert2'
import { AuthContext } from "../provider/AuthProvider"

export const AddBookPage = () => {
    const { user } = useContext(AuthContext)

    const handleAddBook = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        data.rating= +data.rating,
        data.quantity= +data.quantity
        axios.post(`https://book-nest-server-zeta.vercel.app/addBook?email=${user?.email}`,data,{ withCredentials: true })
        .then(() => {
             Swal.fire({
                            title: "Success!",
                            text: "Book Added successfully",
                            icon: "success"
                          });
                          form.reset()
            
        })
        .catch(err => console.log(err))
        
    }
    return (
        <div className="px-6 pt-6 md:pt-10 sm:pb-20  ">
            <Helmet>
                <title>AddBook</title>
            </Helmet>

            <h2 className="font-black font-charm text-xl md:text-2xl text-primaryColor underline mb-3 sm:mb-6 text-center">Add a New Book</h2>
            <p className="text-gray-600 dark:text-gray-400 font-semibold mb-5 md:text-[17px] px-3 w-80 sm:w-[420px] mx-auto text-center">Fill out the details below to add a new book to the collection.</p>


            <form onSubmit={handleAddBook} className="sm:max-w-xl max-w-sm mx-auto pt-10 shadow-lg  px-6 py-8 rounded-xl bg-gray-300 dark:bg-gray-800 mb-20 md:mb-24">
                <div className="grid gap-6 mb-6 sm:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Book Name
                        </label>
                        <input
                            type="text"
                            name="name"

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Book Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Author Name
                        </label>
                        <input
                            type="text"
                            name="author"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="author"
                            required
                        />
                    </div>
                    <div>

                        <label

                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select Category
                        </label>
                        <select required name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option value="Biography">Biography</option>
                            <option value="Business & Economics">Business & Economics</option>
                            <option value="Science & Technology">Science & Technology</option>
                            <option value="History">History</option>
                        </select>

                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Rating
                        </label>
                        <input
                            type="number"
                            name="rating"

                            min="1"
                            max="5"
                            step="0.1"

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1-5"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Image
                        </label>
                        <input
                            type="url"
                            name="image"

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Image URL"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name="quantity"

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Available Quantity"
                            required
                        />
                    </div>

                </div>

                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                <textarea  name="ShortDescription" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>

                <label  className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white">Book Content</label>
                <textarea  name="BookContent" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter detailed description of the book's content."></textarea>


                <div className="sm:flex">
                    <button
                        type="submit"
                        className="btn  bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white  sm:w-28 mx-auto w-full  mt-7 px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </div>
            </form>


        </div>
    )
}
