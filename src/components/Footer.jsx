import { FaBookOpen } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
export const Footer = () => {
    return (
        <div className="bg-base-200 dark:bg-gray-800 dark:text-gray-400 pb-5 flex flex-col ">
            <footer className=" gap-4 flex flex-col items-center justify-between md:flex-row w-full text-base-content p-8 md:px-12 pb-3 max-w-6xl mx-auto dark:text-gray-400">
                <div className="text-center space-y-1">
                    <Link to="/" className=" flex gap-1 justify-center items-center ">
                        <FaBookOpen className="text-2xl sm:text-3xl text-primaryColor" />

                        <span to="/" className="font-bold sm:text-lg text-base text-[#ce7852] ">BookNest</span>


                    </Link>
                    <p className="text-gray-500   font-semibold    ">
                        Your Haven for Knowledge
                    </p>

                    <div className="flex justify-center  gap-1 items-center"><FaEnvelope /> BookNest@gmail.com</div>
                    <div className="flex justify-center   gap-1 items-center"><FaLocationDot /> Bir Uttam Shawkat Sarak, Dhaka 1208</div>

                </div>
                <nav className="flex flex-col gap-1 text-center ">
                    <h6 className=" text-black dark:text-gray-300 font-bold text-base uppercase">Quick Links</h6>
                    <Link to="/allBooks" className="link link-hover">All Books</Link>
                    <Link to="/membership" className="link link-hover">Membership</Link>
                    <Link to="/addBooks" className="link link-hover">Add Books</Link>
                    <Link to="/borrowedBooks" className="link link-hover">Borrowed Books</Link>
                </nav>
                <nav className="flex flex-col gap-1 text-center">
                    <h6 className="text-black dark:text-gray-300 font-bold text-base uppercase">Categories</h6>
                    <Link to="/books/Biography" className="link link-hover">Biography</Link>
                    <Link to="/books/Science & Technology" className="link link-hover">Science & technology</Link>
                    <Link to="/books/History" className="link link-hover">History</Link>
                    <Link to="/books/Business & Economics" className="link link-hover">Business & Economics</Link>
                </nav>

            </footer>
           <hr className="mt-3"/>
            <span className="block text-sm text-gray-500  dark:text-gray-400 text-center mt-5">
                &copy; {new Date().getFullYear()}
                <span >
                    {''} BookNest™
                </span>
                . All Rights Reserved.
            </span>

        </div>


    )
}
