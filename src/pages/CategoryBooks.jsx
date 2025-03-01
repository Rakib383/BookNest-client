import { Link, useLoaderData } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";

export const CategoryBooks = () => {
    const data = useLoaderData()
    return (

        <div className="text-center py-3 pt-7 sm:pt-10   pb-10 lg:pb-16">
            <Helmet>
                <title>CategoryBooks</title>
            </Helmet>
            <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Discover Your Next Favorite Book</h3>
            <p className="text-gray-600 dark:text-gray-400 font-semibold mt-2 md:text-[17px] px-3 w-96 md:w-[420px] mx-auto">Explore captivating reads across diverse genres to ignite your mind and imagination.</p>
            <div className="flex flex-wrap gap-8 md:gap-10 justify-center py-10 md:pt-16  px-3">


                {
                    data.map((book, idx) => (
                        <div key={idx} className="card h-auto bg-base-100 dark:bg-gray-800 shrink-0 w-80 py-4 pt-6 shadow-xl">
                            <figure className=" h-44 mx-auto rounded-none">
                                <img
                                    src={book.image}

                                    className=" h-full w-full object-cover" />
                            </figure>
                            <div className="card-body p-3 pb-0 gap-0 items-center  grow-0  text-center">
                                <h2 className="text-lg font-bold">{book.name}</h2>
                                <p>{book.author}</p>
                                <p>{book.category}</p>
                                <p className="font-semibold">Quantity: {book.quantity}</p>
                                <ReactStars
                                    count={5}
                                    value={+book.rating}
                                    size={24}
                                    isHalf={true}
                                    edit={false}

                                    activeColor="#40916c"
                                />
                                <div className="card-actions pt-2 pb-2 ">
                                    <Link to={`/bookDetails/${book._id}`} className="btn  bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white px-7">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>


    )
}
