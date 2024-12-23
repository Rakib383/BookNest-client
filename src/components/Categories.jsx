import cover1 from '../assets/images/cover1.jpg'
import cover2 from '../assets/images/cover3.jpg'
import cover3 from '../assets/images/cover5.jpg'
import cover4 from '../assets/images/cover7.jpeg'
export const Categories = () => {
    return (
        <div className="text-center py-3  bg-[#EEEEEE] pb-10 lg:pb-16">
            <h3 className="font-bold text-lg md:text-xl">Step Into Your Favorite <span className="font-charm text-2xl md:text-3xl text-primaryColor">Genre</span></h3>
            <p className="text-gray-700 font-semibold mt-2 md:text-[17px]">Find Books Tailored to Your Interests and Passions</p>
            <div className='mt-7 lg:mt-10 flex flex-wrap justify-center mx-auto max-w-[650px] xl:max-w-[1340px]  px-5  gap-8 xl:gap-10'>
                {/* category cards */}

                    {/* category-1 */}
                <div className="card bg-base-100 w-72 shadow-xl">
                    <figure className="px-4 pt-6">
                        <img
                            src={cover1}

                            className="rounded-xl h-56 w-52" />
                    </figure>
                    <div className="card-body pt-4 items-center text-center">
                        <h2 className="card-title  ">Biography </h2>
                        <p>Explore the inspiring stories of real lives and remarkable achievements.</p>
                        <div className="card-actions">
                            <button className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Explore Books</button>
                        </div>
                    </div>
                </div>
                    {/* category-2 */}
                <div className="card bg-base-100 w-72 shadow-xl">
                    <figure className="px-4 pt-6">
                        <img
                            src={cover2}

                            className="rounded-xl h-56 w-52" />
                    </figure>
                    <div className="card-body pt-4 items-center text-center">
                        <h2 className="card-title  ">Business & Economics </h2>
                        <p>Unlock the secrets to success, strategy, and financial growth.</p>
                        <div className="card-actions">
                            <button className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Explore Books</button>
                        </div>
                    </div>
                </div>
                    {/* category-3 */}
                <div className="card bg-base-100 w-72 shadow-xl">
                    <figure className="px-4 pt-6">
                        <img
                            src={cover3}

                            className="rounded-xl h-56 w-52" />
                    </figure>
                    <div className="card-body pt-4 items-center text-center">
                        <h2 className="card-title  ">Science & Technology</h2>
                        <p>Discover the wonders of innovation, exploration, and the universe.</p>
                        <div className="card-actions">
                            <button className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Explore Books</button>
                        </div>
                    </div>
                </div>
                    {/* category-4 */}
                <div className="card bg-base-100 w-72 shadow-xl">
                    <figure className="px-4 pt-6">
                        <img
                            src={cover4}

                            className="rounded-xl h-56 w-52" />
                    </figure>
                    <div className="card-body pt-4 items-center text-center">
                        <h2 className="card-title  ">History</h2>
                        <p>Journey through the events and stories that shaped our world.</p>
                        <div className="card-actions">
                            <button className="btn bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">Explore Books</button>
                        </div>
                    </div>
                </div>
                 

            </div>
        </div>
    )
}
