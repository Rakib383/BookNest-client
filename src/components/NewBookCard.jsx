import { Link } from "react-router-dom"

export const NewBookCard = ({book}) => {
    const {_id,image,name,author,category} = book

    return (
        <div className="card  rounded-md  h-auto dark:bg-gray-800 focus:outline-none  shrink-0 grow w-80 py-7">
            <figure className=" h-52 mx-auto rounded-none">
                <img
                    src={image}
                    className=" h-full w-full " />
            </figure>
            <div className="card-body p-4 pb-0 gap-0 items-center  grow-0  text-center">
                <h2 className="text-base font-bold">{name}</h2>
                <p>{author}</p>
                <p>{category}</p>
                <div className="card-actions">
                    <Link to={`/bookDetails/${_id}`} className="btn mt-2 bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">See Details</Link>
                </div>
            </div>
        </div>
    )
}
