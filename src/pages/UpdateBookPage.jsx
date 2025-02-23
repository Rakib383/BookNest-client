import axios from "axios"
import { Helmet } from "react-helmet-async"
import { useLoaderData, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

export const UpdateBookPage = () => {
    const book = useLoaderData()
    const { _id, image, name, author, category, rating } = book
    const navigate = useNavigate()

    const handleBookUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const updateData = Object.fromEntries(formData.entries())

        axios.patch(`http://localhost:5000/updateBook/${_id}`, updateData)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Book details updated successfully",
                    icon: "success"
                });
                navigate("/allBooks")
            })
            .catch(err => console.log(err))


    }

    return (
        <div className="px-6 py-9 sm:pb-20 ">
            <Helmet>
                <title>Update Book</title>
            </Helmet>

            <h2 className="font-black font-charm text-xl md:text-2xl text-primaryColor underline mb-3 sm:mb-6 text-center">Update Book Details</h2>


            <form onSubmit={handleBookUpdate} className="sm:max-w-xl max-w-sm mx-auto pt-10 shadow-lg  px-6 py-8 rounded-xl dark:bg-gray-800">
                <div className="grid gap-6 mb-6 sm:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Book Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

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
                            defaultValue={author}
                            required
                        />
                    </div>
                    <div>

                        <label

                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select Category
                        </label>
                        <select name="category" defaultValue={`${category}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

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
                            defaultValue={rating}
                            min="1"
                            max="5"
                            step="0.1"

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1-5"
                            required
                        />
                    </div>


                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Image
                    </label>
                    <input
                        type="url"
                        name="image"

                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={image}
                        required
                    />
                </div>


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
