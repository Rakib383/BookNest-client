
import { BookCard } from "../components/BookCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { TfiViewGrid, TfiViewList } from "react-icons/tfi";
import { TableView } from "../components/TableView";
import axios from "axios";
import { IoFilter } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";




export const AllBooksPage = () => {

    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([])
    const [tableView, setTableView] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState([])


    useEffect(() => {
        setLoading(true)

        const timerId = setTimeout(() => {
            let url = "http://localhost:5000/books"
            if (selectedCategories.length > 0) {
                const queryParam = selectedCategories.join(",")
                url += `?categories=${encodeURIComponent(queryParam)}`
            }

            axios.get(url)
                .then(res => {
                    setBooks(res.data)

                    setLoading(false)
                })
        }, 1000)

        return () => clearTimeout(timerId)
    }, [selectedCategories])


    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen)

    }

    const handleCheckboxChange = (e) => {
        const category = e.target.value
        if (e.target.checked) {
            setSelectedCategories([...selectedCategories, category])
        }
        else {
            setSelectedCategories(selectedCategories.filter((cat => cat !== category)))
        }

    }



    return (
        <div className="text-center py-3 pt-7 sm:pt-10   pb-16  md:pb-32">
            <Helmet>
                <title>Books</title>
            </Helmet>
            <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Explore the World of <span className="bg-secondaryColor rounded-full text-white px-3"> Knowledge</span></h3>

            <p className="text-gray-600 dark:text-gray-400 font-semibold mt-2 md:text-[17px] px-3 w-96 md:w-[420px] mx-auto">Dive Into Our Diverse Library of Knowledge.Explore Books That Shape Minds and Transform Lives.  </p>
            <div onClick={toggleSideBar} className=" flex items-center justify-center gap-1 px-4 py-2.5 font-semibold w-fit bg-white dark:bg-gray-500 mt-3 rounded-md mx-auto lg:hidden hover:cursor-pointer outline-1 min-h-12 h-12 btn"><IoFilter className="text-lg" />Filter</div>
            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50  z-40"
                    onClick={toggleSideBar}
                >


                </div>
            )}



            {/* view tab */}
            <div className="flex justify-center  gap-3   mt-6 lg:max-w-7xl  lg:justif mx-auto ">
                <div onClick={() => setTableView(false)} className={`px-2 py-2 flex items-center gap-1 ${!tableView ? "bg-secondaryColor" : "bg-gray-300 dark:bg-gray-500"} rounded-md hover:cursor-pointer`}>
                    <TfiViewGrid className="text-lg " /> Card View
                </div>
                <div onClick={() => setTableView(true)} className={`px-2 py-2 flex items-center gap-1 ${tableView ? "bg-secondaryColor" : "bg-gray-300 dark:bg-gray-500"} mr-1 sm:mr-4 rounded-md hover:cursor-pointer `} >
                    <TfiViewList className="text-lg " />Table View

                </div>
            </div>



            {/* container */}

            <div className="flex gap-5   mx-auto  max-w-5xl xl:max-w-7xl  px-8">

                {/* filterBar */}
                <div className={`w-60 lg:w-72 md:w-64 min-h-screen lg:min-h-96 lg:h-96 absolute lg:static top-16 lg:mt-8 z-50 bg-white dark:bg-gray-800 transition-all duration-700 ease-in-out text-start lg:rounded-md  ${isSidebarOpen ? "right-0" : "-right-64"}`}>

                    <div className=" flex justify-start ml-2 mt-3 lg:hidden">
                        <RxCross1 onClick={toggleSideBar} className="text-xl hover:cursor-pointer" />
                    </div>
                    <h2 className="font-bold text-xl mt-4 text-primaryColor pl-5 mb-2">Genre <span className="text-sm text-black font-normal dark:text-gray-300">(Filter By Category)</span></h2>
                    <hr />
                    <div className="pl-5 pt-3 space-y-2 ">

                        <div className="flex  items-center gap-1  "> <input value="Biography" onChange={handleCheckboxChange} className=" focus:ring-0 checked:bg-secondaryColor hover:cursor-pointer" type="checkbox" id="biography" /> <label htmlFor="biography" className="hover:cursor-pointer hover:font-bold">Biography</label></div>

                        <div className="flex items-center gap-1 "> <input value="Business & Economics" onChange={handleCheckboxChange} className=" focus:ring-0 checked:bg-secondaryColor hover:cursor-pointer" type="checkbox" id="business_economics" /> <label htmlFor="business_economics" className="hover:cursor-pointer hover:font-bold">Business & Economics</label></div>

                        <div className="flex items-center gap-1 "> <input value="Science & Technology" onChange={handleCheckboxChange} className=" focus:ring-0 checked:bg-secondaryColor hover:cursor-pointer" type="checkbox" id="science_technology" /> <label htmlFor="science_technology" className="hover:cursor-pointer hover:font-bold">Science & Technology</label></div>

                        <div className="flex items-center gap-1 "> <input value="History" onChange={handleCheckboxChange} className=" focus:ring-0 checked:bg-secondaryColor hover:cursor-pointer" type="checkbox" id="history" /> <label htmlFor="history" className="hover:cursor-pointer hover:font-bold">History</label></div>


                    </div>
                </div>



                {
                    !loading && !tableView && <div className="flex flex-wrap gap-5 md:gap-7 justify-center w-full lg:justify-start py-10 pt-8 px-3">

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

                {/* loading spinner */}

                {
                    loading && <div className=" flex justify-center  items-center w-full h-[300px] ">

                        <div className="loading loading-bars loading-lg md:w-16"></div>
                    </div>
                }

            </div>





        </div >
    )
}

