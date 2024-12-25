import { FaBookOpen } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
export const Footer = () => {
    return (
        <div className="bg-base-200 pb-5">
            <footer className="footer   text-base-content p-10 max-w-6xl mx-auto">
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
                    <h6 className="footer-title">About Us</h6>
                    <a className="link link-hover">Our Purpose</a>
                    <a className="link link-hover">Our Team</a>
                    <a className="link link-hover">Library Program</a>
                    <a className="link link-hover">Upcoming Events</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Categories</h6>
                    <a className="link link-hover">Biography</a>
                    <a className="link link-hover">Science & technology</a>
                    <a className="link link-hover">History</a>
                    <a className="link link-hover">Business & Economics</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Return Policy</a>
                    <a className="link link-hover">Privacy policy</a>

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
