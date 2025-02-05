
import {  FaArrowAltCircleRight } from "react-icons/fa";
import { FaFaceSadTear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import errorPic from "../assets/images/ErrorPic.svg"
export const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-3 md:gap-5 items-center h-screen justify-center mx-4 text-center bg-white">
            <img className="w-48 sm:w-60" src={errorPic} alt="" />
            <h1 className="font-bold text-lg flex">We're sorry,<FaFaceSadTear className="text-2xl text-secondaryColor mx-2" /></h1>
            <h2 className="font-bold text-lg flex"> the page you're looking for can't be found.</h2>
            <div className="flex items-center gap-2">
                <div className="text-base flex items-center gap-1  ">Go back to the <FaArrowAltCircleRight className=" text-black" /></div>
                <Link to="/"><button className="  m:w-28 mx-auto w-full  py-2.5 text-center underline text-primaryColor font-semibold text-lg">HomePage </button></Link>
                
            </div>
        </div>
    )
}
