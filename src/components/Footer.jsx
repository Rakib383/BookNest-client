import { FaBookOpen } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
export const Footer = () => {
    return (
        <div className="bg-base-200 pb-5">
            <footer className="footer justify-between  text-base-content p-8 pb-3 max-w-6xl mx-auto">
                <aside>
                    <div className=" flex gap-1 justify-center items-center">
                        <FaBookOpen className="text-2xl sm:text-3xl text-primaryColor" />

                        <div>
                            <Link to="/" className="font-bold sm:text-lg  text-[#ce7852] ">BookNest</Link>

                        </div>


                    </div>
                    <p className="text-gray-500 font-semibold    ">
                        Your Haven for Knowledge
                    </p>

                    <div className="flex  gap-1 items-center"><FaEnvelope /> BookNest@gmail.com</div>
                    <div className="flex  gap-1 items-center"><FaLocationDot /> Bir Uttam Shawkat Sarak, Dhaka 1208</div>

                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link to="/allBooks" className="link link-hover">All Books</Link>
                    <Link to="/membership" className="link link-hover">Membership</Link>
                    <Link to="/addBooks" className="link link-hover">Add Books</Link>
                    <Link to="/borrowedBooks" className="link link-hover">Borrowed Books</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Categories</h6>
                    <Link to="/books/Biography" className="link link-hover">Biography</Link>
                    <Link to="/books/Science & Technology" className="link link-hover">Science & technology</Link>
                    <Link to="/books/History" className="link link-hover">History</Link>
                    <Link to="/books/Business & Economics" className="link link-hover">Business & Economics</Link>
                </nav>
               
            </footer>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500  dark:text-gray-400 text-center">
               &copy; {new Date().getFullYear()} 
                <span >
                   {''} BookNest™
                </span>
                . All Rights Reserved.
            </span>

        </div>


    )
}
