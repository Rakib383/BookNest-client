
export const NewBookCard = ({book}) => {
    const {image,name,author,category} = book

    return (
        <div className="card h-auto shrink-0 w-auto  py-7">
            <figure className=" h-60 mx-auto">
                <img
                    src={image}

                    className="rounded-xl h-full w-full object-cover" />
            </figure>
            <div className="card-body p-4 pb-0 gap-0 items-center  grow-0  text-center">
                <h2 className="text-lg font-bold">{name}</h2>
                <p>{author}</p>
                <p>{category}</p>
                <div className="card-actions">
                    <button className="btn mt-1 bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">See Details</button>
                </div>
            </div>
        </div>
    )
}
