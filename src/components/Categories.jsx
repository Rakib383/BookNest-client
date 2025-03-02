import { Link } from 'react-router-dom'
import cover1 from '../assets/images/cover1.jpg'
import cover2 from '../assets/images/cover3.jpg'
import cover3 from '../assets/images/cover5.jpg'
import cover4 from '../assets/images/cover7.jpeg'
import { motion } from "motion/react"
export const Categories = () => {
    return (
        <div className="text-center py-3   pb-10 lg:pb-16">
            <h3 className="font-bold text-lg md:text-xl">Step Into Your Favorite <motion.span animate={{transition:{duration:7}}} whileInView={{scale:5}} className="font-charm text-3xl md:text-4xl text-primaryColor">Genre</motion.span></h3>
            <p className="text-gray-700 text-[15px] dark:text-gray-400 font-semibold mt-2 md:text-[17px] px-3">Find Books Tailored to Your Interests and Passions</p>
            <div className='mt-7 lg:mt-10 flex flex-wrap justify-center mx-auto max-w-4xl px-5  gap-8 xl:gap-10'>
                {/* category cards */}

                    {/* category-1 */}
                <div className="card rounded-lg bg-base-100 w-80 shadow-xl dark:bg-gray-800">
                    <figure className="px-4 pt-6">
                        <img
                            src={cover1}

                            className="rounded-lg h-56 w-52" />
                    </figure>
                    <div className="card-body pt-4 items-center text-center">
                        <h2 className="card-title  ">Biography </h2>
                        <p className='dark:text-gray-300'>Explore the inspiring stories of real lives and remarkable achievements.</p>
                        <div className="card-actions">
                            <Link to="/books/Biography" className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Explore Books</Link>
                        </div>
                    </div>
                </div>
                    {/* category-2 */}
                <div className="card bg-base-100 rounded-lg w-80 shadow-xl dark:bg-gray-800">
                    <figure className="px-4 pt-6">
                        <img
                            src={cover2}

                            className="rounded-lg h-56 w-52" />
                    </figure>
                    <div className="card-body pt-4 items-center text-center">
                        <h2 className="card-title  ">Business & Economics </h2>
                        <p className='dark:text-gray-300'>Unlock the secrets to success, strategy, and financial growth.</p>
                        <div className="card-actions">
                            <Link to="/books/Business & Economics" className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Explore Books</Link>
                        </div>
                    </div>
                </div>
                    {/* category-3 */}
                <div className="card bg-base-100 w-80 rounded-lg shadow-xl dark:bg-gray-800">
                    <figure className="px-4 pt-6">
                        <img
                            src={cover3}

                            className="rounded-lg h-56 w-52" />
                    </figure>
                    <div className="card-body pt-4 items-center text-center">
                        <h2 className="card-title  ">Science & Technology</h2>
                        <p className='dark:text-gray-300'>Discover the wonders of innovation, exploration, and the universe.</p>
                        <div className="card-actions">
                            <Link to="/books/Science & Technology" className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Explore Books</Link>
                        </div>
                    </div>
                </div>
                    {/* category-4 */}
                <div className="card bg-base-100 w-80 rounded-lg shadow-xl dark:bg-gray-800">
                    <figure className="px-4 pt-6">
                        <img
                            src={cover4}

                            className="rounded-lg h-56 w-52" />
                    </figure>
                    <div className="card-body pt-4 items-center text-center">
                        <h2 className="card-title  ">History</h2>
                        <p className='dark:text-gray-300'>Journey through the events and stories that shaped our world.</p>
                        <div className="card-actions">
                            <Link to="/books/History" className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Explore Books</Link>
                        </div>
                    </div>
                </div>
                 

            </div>
        </div>
    )
}
