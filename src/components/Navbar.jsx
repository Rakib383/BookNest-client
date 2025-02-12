
import { useContext } from "react";
import { FaBookOpen } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
export const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    return (


        <div className="navbar  md:h-[72px]  max-w-7xl mx-auto sm:px-5    ">
            <div className="navbar-start ">
                <div className="dropdown lg:hidden ">
                    <div tabIndex={0} role="button" className="btn pl-1 pr-0.5 btn-ghost lg:hidden hover:bg-white dark:hover:bg-black">
                        <IoMenu className="text-[26px] sm:text-3xl" />
                    </div>
                    <ul
                        tabIndex={0}
                        className=" dark:bg-gray-800 bg-gray-100 menu z-10 menu-sm dropdown-content  rounded-box  mt-1 w-52 p-2 shadow">
                        <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Home</NavLink>
                        <NavLink to="/allBooks" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">All Books</NavLink>
                        <NavLink to="/membership" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Membership</NavLink>
                        <NavLink to="/addBook" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Add Book</NavLink>
                        <NavLink to="/borrowedBooks" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Borrowed Books</NavLink>



                    </ul>
                </div>
                <div className="hidden gap-1  lg:flex items-end">

                    <FaBookOpen className="text-3xl text-primaryColor" />

                    <Link className="font-bold text-sm sm:text-lg text-[#ce7852] mr-3">BookNest</Link>
                </div>
            </div>

            <div className="navbar-center ">
                <ul className=" hidden lg:flex gap-2 xl:gap-4 font-bold lg:text-[17px] ">
                    <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Home</NavLink>
                    <NavLink to="/allBooks" className="px-2.5 py-1.5  hover:text-white rounded-md hover:bg-gray-400">All Books</NavLink>
                    <NavLink to="/membership" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Membership</NavLink>
                    <NavLink to="/addBook" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Add Book</NavLink>

                    <NavLink to="/borrowedBooks" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Borrowed Books</NavLink>



                </ul>
                <div className="lg:hidden flex gap-1 justify-center items-center">
                    <FaBookOpen className="text-2xl sm:text-3xl text-primaryColor" />

                    <Link to="/" className="font-bold sm:text-lg  text-[#ce7852] mr-3">BookNest</Link>
                </div>
            </div>


            <div className="navbar-end">


                {
                    user ? <div className="flex gap-2 sm:gap-4 items-center">
                        <div>
                            <a className="displayName">
                                <img className="w-8 sm:w-10 rounded-full h-8 sm:h-10 cursor-pointer" src={user?.photoURL} alt="" />
                            </a>
                            <Tooltip className="z-50" anchorSelect=".displayName" place="bottom" offset={20}>
                                {user?.displayName}
                            </Tooltip>
                        </div>
                        <button onClick={logOut} className="px-3.5 py-2 text-white rounded-lg bg-secondaryColor hover:bg-[#40916c] font-bold
              ">Logout</button>
                    </div> : <div className="flex gap-2 sm:gap-4 items-center">
                        <Link to="/login" className="px-3.5 py-2 text-white rounded-lg bg-secondaryColor hover:bg-[#40916c] font-bold
              ">
                            Login
                        </Link>
                        <Link to="/register" className="px-3.5 py-2 text-white rounded-lg bg-secondaryColor hover:bg-[#40916c] font-bold
              ">
                            Register
                        </Link>
                    </div>
                }


            </div>

        </div>


    )
}
