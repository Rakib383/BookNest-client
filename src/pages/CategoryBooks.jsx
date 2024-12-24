import { useLoaderData } from "react-router-dom"
import ReactStars from "react-rating-stars-component";

export const CategoryBooks = () => {
    const data = useLoaderData()
    return (
        
            <div className="text-center py-3 pt-7 sm:pt-10  bg-[#EEEEEE] pb-10 lg:pb-16">
                       <h3  className="font-black font-charm text-xl md:text-2xl text-primaryColor">Discover Your Next Favorite Book</h3>
                       <p className="text-gray-600 font-semibold mt-2 md:text-[17px] px-3 w-96 md:w-[420px] mx-auto">Explore captivating reads across diverse genres to ignite your mind and imagination.</p>
                       <div className="flex flex-wrap gap-5 md:gap-8 justify-center py-10  px-3">
           
           
                           {
                               data.map((book, idx) => (
                                  <div className="card  h-auto shrink-0 w-80 shadow-xl  py-6">
                                            <figure className=" h-56 mx-auto rounded-none">
                                                <img
                                                    src={book.image}
                                
                                                    className=" h-full w-full object-cover" />
                                            </figure>
                                            <div className="card-body p-3.5 pb-0 gap-0 items-center  grow-0  text-center">
                                                <h2 className="text-lg font-bold">{book.name}</h2>
                                                <p>{book.author}</p>
                                                <p>{book.category}</p>
                                                <p className="font-semibold">Quantity: {book.quantity}</p>
                                                <ReactStars
                                                    count={5}
                                                    value={book.rating}
                                                    size={24}
                                                    isHalf={true}
                                                    edit={false}
                                
                                                    activeColor="#40916c"
                                                />,
                                                <div className="card-actions">
                                                    <button className="btn  bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white px-7">Details</button>
                                                </div>
                                            </div>
                                        </div>
                               ))
                           }
           
                       </div>
                   </div>
            
       
    )
}
