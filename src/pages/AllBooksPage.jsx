import { useLoaderData } from "react-router-dom"
import { BookCard } from "../components/BookCard";
import { Helmet } from "react-helmet-async";
import { useState } from "react";



export const AllBooksPage = () => {
    const data = useLoaderData();
    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState(data)

    const handleBooksData = (e) => {
        setLoading(true)
        setTimeout(() => {

            if (e.target.value === "Available") {
                const availableBooks = data.filter(book => book.quantity > 0)
                setBooks(availableBooks)
                

            }
            else {
                setBooks(data)
                

            }
            setLoading(false)

        }, 1500)


    }
    return (
        <div className="text-center py-3 pt-7 sm:pt-10  bg-[#EEEEEE] pb-10 lg:pb-16">
            <Helmet>
                <title>Books</title>
            </Helmet>
            <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Explore the World of <span className="bg-secondaryColor rounded-full text-white px-3"> Knowledge</span></h3>

            <p className="text-gray-600 font-semibold mt-2 md:text-[17px] px-3 w-96 md:w-[420px] mx-auto">Dive Into Our Diverse Library of Knowledge.Explore Books That Shape Minds and Transform Lives.  </p>
            <div>

                <select onChange={handleBooksData} name="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 mb-2 mx-auto mt-3 text-center">

                    <option value="All">All</option>
                    <option value="Available">Available Books</option>
                </select>

            </div>
            {
                loading && <div className="min-h-screen flex justify-center items-center bg-[#eee]">
                    <span className="loading loading-spinner w-12 sm:w-20"></span>
                </div>
            }

            {
                !loading && <div>

                    <div className="flex flex-wrap gap-5 md:gap-8 justify-center py-10  px-3">


                        {
                            books.map((book, idx) => <BookCard book={book} key={idx} />)
                        }

                    </div>
                </div>


            }


        </div>
    )
}

