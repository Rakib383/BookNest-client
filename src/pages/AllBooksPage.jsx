import { useLoaderData } from "react-router-dom"
import { BookCard } from "../components/BookCard";
import { Helmet } from "react-helmet-async";


export const AllBooksPage = () => {
    const data = useLoaderData();
    return (
        <div className="text-center py-3 pt-7 sm:pt-10  bg-[#EEEEEE] pb-10 lg:pb-16">
            <Helmet>
                <title>AllBooks</title>
            </Helmet>
            <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Explore the World of <span className="bg-secondaryColor rounded-full text-white px-3"> Knowledge</span></h3>
            <p className="text-gray-600 font-semibold mt-2 md:text-[17px] px-3 w-96 md:w-[420px] mx-auto">Dive Into Our Diverse Library of Knowledge.Explore Books That Shape Minds and Transform Lives.  </p>
            <div className="flex flex-wrap gap-5 md:gap-8 justify-center py-10  px-3">


                {
                    data.map((book, idx) => <BookCard book={book} key={idx} />)
                }

            </div>
        </div>
    )
}
