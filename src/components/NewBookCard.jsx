import { Link } from "react-router-dom"

export const NewBookCard = ({book}) => {
    const {_id,image,name,author,category} = book

    return (
        <div className="card rounded-none h-auto dark:bg-gray-800  shrink-0 w-80  py-7">
            <figure className=" h-60 mx-auto">
                <img
                    src={image}
                    className=" h-full w-full object-cover" />
            </figure>
            <div className="card-body p-4 pb-0 gap-0 items-center  grow-0  text-center">
                <h2 className="text-base font-bold">{name}</h2>
                <p>{author}</p>
                <p>{category}</p>
                <div className="card-actions">
                    <Link to={`/bookDetails/${_id}`} className="btn mt-1 bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">See Details</Link>
                </div>
            </div>
        </div>
    )
}
