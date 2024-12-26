
import { BookCard } from "../components/BookCard";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { TfiViewGrid, TfiViewList } from "react-icons/tfi";
import { TableView } from "../components/TableView";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";



export const AllBooksPage = () => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    const [allBooks, setAllBooks] = useState(null)
    const [tableView, setTableView] = useState(false)


    useEffect(() => {
        axios.get(`https://book-nest-server-zeta.vercel.app/allBooks?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setBooks(res.data)
                setAllBooks(res.data)
            })
    }, [])

    const handleBooksData = (e) => {
        setLoading(true)
        setTimeout(() => {

            if (e.target.value === "Available") {
                const availableBooks = allBooks.filter(book => book.quantity > 0)
                setBooks(availableBooks)

            }
            else {
                setBooks(allBooks)

            }
            setLoading(false)

        }, 1000)
    }




    return (
        <div className="text-center py-3 pt-7 sm:pt-10  bg-[#EEEEEE] pb-16  md:pb-32 ">
            <Helmet>
                <title>Books</title>
            </Helmet>
            <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Explore the World of <span className="bg-secondaryColor rounded-full text-white px-3"> Knowledge</span></h3>

            <p className="text-gray-600 font-semibold mt-2 md:text-[17px] px-3 w-96 md:w-[420px] mx-auto">Dive Into Our Diverse Library of Knowledge.Explore Books That Shape Minds and Transform Lives.  </p>
            <div >

                <select onChange={handleBooksData} name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40 mb-2 mx-auto mt-3 text-center">

                    <option value="All">All Books</option>
                    <option value="Available">Available Books</option>
                </select>


            </div>

            <div className="flex justify-end gap-3 mr-2 sm:pr-0 mt-6 ">
                <div onClick={() => setTableView(false)} className={`px-2 py-2 flex items-center gap-1 ${!tableView ? "bg-secondaryColor" : "bg-gray-300"} rounded-md hover:cursor-pointer`}>
                    <TfiViewGrid className="text-lg " /> Card View
                </div>
                <div onClick={() => setTableView(true)} className={`px-2 py-2 flex items-center gap-1 ${tableView ? "bg-secondaryColor" : "bg-gray-300"} mr-1 sm:mr-4 rounded-md hover:cursor-pointer `} >
                    <TfiViewList className="text-lg " />Table View

                </div>
            </div>
            {
                loading && <div className="min-h-screen flex justify-center items-center bg-[#eee]">
                    <span className="loading loading-spinner w-12 sm:w-20"></span>
                </div>
            }

            {
                !loading && !tableView && <div className="flex flex-wrap gap-5 md:gap-8 justify-center py-10  px-3">

                    {
                        books.map((book, idx) => <BookCard book={book} key={idx} />)
                    }

                </div>

            }

            {
                !loading && tableView && <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-9 md:mt-14 max-w-6xl px-5 mx-auto ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <span >Book</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span >Action</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((book, idx) => <TableView book={book} key={idx} />)
                            }

                        </tbody>

                    </table>
                </div>
            }



        </div >
    )
}

