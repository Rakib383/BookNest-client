import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
export const BookCard = ({ book }) => {
    const {_id, image, name, author, category, rating } = book
    return (
        <div className="card dark:bg-gray-800 bg-white  h-auto shrink-0 w-80 shadow-lg  py-6">
            <figure className=" h-56 mx-auto rounded-none">
                <img
                    src={image}

                    className=" h-full w-full object-cover" />
            </figure>
            <div className="card-body p-3.5 pb-0 gap-0 items-center  grow-0  text-center">
                <h2 className="text-lg font-bold">{name}</h2>
                <p>{author}</p>
                <p>{category}</p>
                <ReactStars
                    count={5}
                    value={+rating}
                    size={24}
                    isHalf={true}
                    edit={false}

                    activeColor="#40916c"
                />
                <div className="card-actions mt-2">
                    <Link to={`/updateBook/${_id}`} className="btn  bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white px-7">Update</Link>
                </div>
            </div>
        </div>
    )
}
