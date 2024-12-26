import { Link } from "react-router-dom"


export const TableView = ({ book }) => {
    const { _id, image, name, author, category, rating } = book


    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                <img
                    src={image}
                    className="w-12 "
                    alt="Apple Watch"
                />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{name}</td>
            <td className="px-6 py-4">
                {author}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white"> {category}</td>
            <td className="px-6 py-4">
                {rating}
            </td>
            <td className="px-6 py-4">
                <Link to={`/updateBook/${_id}`} className="btn  bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white px-7">Update</Link>
            </td>
        </tr>


    )
}

{/* */ }
