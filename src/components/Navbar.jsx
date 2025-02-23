
import { useContext, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
export const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isLight, setIsLight] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const handleDarkMode = () => {
        setIsLight(!isLight)
        const htmlTag = document.documentElement
        if (!isLight) {
            return htmlTag.classList.remove('dark')
        }
        htmlTag.classList.add('dark')
    }
    const handleMenu = () => {
        setIsOpen(!isOpen)

    }

    return (


        <div className="navbar   md:h-[72px]  max-w-7xl mx-auto sm:px-5    ">
            <div className="navbar-start w-[40%] sm:w-[50%]  ">
                <div className="dropdown lg:hidden ">
                    <div onClick={handleMenu} tabIndex={0} role="button" className=" pl-1 pr-0.5  lg:hidden ">
                        {
                            isOpen ? <RxCross1 className="text-[24px] sm:text-3xl" /> : <IoMenu className="text-[24px] sm:text-3xl" />
                        }
                    </div>
                    {
                        isOpen && <ul onClick={handleMenu}
                            tabIndex={0}
                            className=" dark:bg-gray-800 bg-gray-100 menu z-10 menu-sm dropdown-content  rounded-box   w-52 p-2 shadow mt-3">
                            <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Home</NavLink>
                            <NavLink to="/allBooks" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">All Books</NavLink>
                            <NavLink to="/membership" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Membership</NavLink>
                            <NavLink to="/addBook" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Add Book</NavLink>
                            <NavLink to="/borrowedBooks" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Borrowed Books</NavLink>

                        </ul>
                    }
                </div>
                <Link to="/" className="hidden gap-1  lg:flex items-end">

                    <FaBookOpen className="text-3xl text-primaryColor" />

                    <span className="font-bold text-sm sm:text-lg text-[#ce7852] mr-3">BookNest</span>
                </Link>
            </div>

            <div className="navbar-center  ">
                <ul className=" hidden lg:flex gap-2 xl:gap-4 font-bold lg:text-[17px] ">
                    <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Home</NavLink>
                    <NavLink to="/allBooks" className="px-2.5 py-1.5  hover:text-white rounded-md hover:bg-gray-400">All Books</NavLink>
                    <NavLink to="/membership" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Membership</NavLink>
                    <NavLink to="/addBook" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Add Book</NavLink>

                    <NavLink to="/borrowedBooks" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Borrowed Books</NavLink>



                </ul>
                <Link to="/" className="lg:hidden flex gap-1 justify-center items-center">
                    <FaBookOpen className="text-2xl sm:text-3xl text-primaryColor" />

                    <span to="/" className="font-bold sm:text-lg  text-[#ce7852] mr-3">BookNest</span>
                </Link>
            </div>


            <div className="navbar-end">

                {
                    isLight ? <div><a className="tooltip"><CiLight onClick={handleDarkMode} className="text-lg sm:text-2xl shrink-0 mx-1 mr-2 sm:mr-6 hover:cursor-pointer" /></a>
                        <Tooltip className="z-50" anchorSelect=".tooltip" place="bottom" offset={20}>
                            Light
                        </Tooltip>
                    </div> : <div>
                        <a className="tooltip2">
                            <MdDarkMode onClick={handleDarkMode} className="text-lg hover:cursor-pointer sm:text-2xl shrink-0 mx-1 mr-2 sm:mr-6 " />
                        </a>
                        <Tooltip className="z-50" anchorSelect=".tooltip2" place="bottom" offset={20}>
                            Dark
                        </Tooltip>
                    </div>


                }

                {
                    user ? <div className="flex gap-2 sm:gap-4 items-center shrink-0 ">
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

                    </div>
                }


            </div>

        </div>


    )
}
