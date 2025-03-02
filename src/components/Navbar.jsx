
import { useContext, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Dropdown, Space } from 'antd';
import { HiOutlineMenu } from "react-icons/hi";
export const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isLight, setIsLight] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleDarkMode = () => {
        setIsLight(!isLight)
        const htmlTag = document.documentElement
        if (!isLight) {
            return htmlTag.classList.remove('dark')
        }
        htmlTag.classList.add('dark')
    }

    const items = [
        {
          label: <NavLink to="/"  className={` ${location.pathname === "/" ? "active" : ""} px-2.5 py-1.5 rounded-md `}>Home</NavLink>
        },
        {
          label: <NavLink to="/allBooks" className={` ${location.pathname === "/allBooks" ? "active" : ""} px-2.5 py-1.5    rounded-md `}>All Books</NavLink>
        },
        {
          label: <NavLink to="/membership" className={` ${location.pathname === "/membership" ? "active" : ""} px-2.5 py-1.5   rounded-md`}>Membership</NavLink>

        },
        {
          label: <NavLink to="/addBook" className={` ${location.pathname === "/addBook" ? "active" : ""} px-2.5 py-1.5  rounded-md`}>Add Book</NavLink>
        },
        {
          label: <NavLink to="/borrowedBooks" className={`${location.pathname === "/borrowedBooks" ? "active" : ""}  px-2.5 py-1.5 text-nowrap  rounded-md`}>Borrowed Books</NavLink>
        },
    
      ];

    return (


        <div className="navbar w-full   md:h-[72px]  max-w-7xl mx-auto px-5 ">
            <div className="navbar-start w-[40%] sm:w-[50%]  ">
                <div className="lg:hidden ">

                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                        onOpenChange={(value) => setIsMenuOpen(value)}
                        overlayClassName="custom-dropdown"
                        dropdownRender={(menu) => (
                            <div style={{ marginTop: '7px' }}>
                              {menu}
                            </div>
                          )}

                    >
                        <a className="cursor-pointer" onClick={(e) => {
                            e.preventDefault()
                        }}>
                            <Space>
                                {
                                    isMenuOpen ? <RxCross1 className="text-xl " /> : <HiOutlineMenu className="text-xl " />
                                }
                            </Space>
                        </a>
                    </Dropdown>
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

                    <span to="/" className="font-bold sm:text-lg  text-[#ce7852] mr-3 text-base">BookNest</span>
                </Link>
            </div>


            <div className="navbar-end">

                {
                    isLight ? <div ><a className="tooltip"><CiLight onClick={handleDarkMode} className="text-xl sm:text-2xl shrink-0  mr-1.5  sm:mr-6 hover:cursor-pointer" /></a>
                        <Tooltip globalCloseEvents={{ clickOutsideAnchor: true }} className="z-50" anchorSelect=".tooltip" place="bottom" offset={20}>
                            Light
                        </Tooltip>
                    </div> : <div>
                        <a className="tooltip2">
                            <MdDarkMode onClick={handleDarkMode} className="text-xl hover:cursor-pointer sm:text-2xl shrink-0  mr-1.5 sm:mr-6 " />
                        </a>
                        <Tooltip globalCloseEvents={{ clickOutsideAnchor: true }} className="z-50" anchorSelect=".tooltip2" place="bottom" offset={20}>
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
                        <button onClick={logOut} className="px-3.5 py-2.5 text-white rounded-lg bg-secondaryColor hover:bg-[#40916c] font-bold
              ">Logout</button>
                    </div> : <div className="flex gap-2 sm:gap-4 items-center">
                        <Link to="/login" className="px-3.5 ml-1.5 py-2.5 text-white rounded-lg bg-secondaryColor hover:bg-[#40916c] font-bold
              ">
                            Login
                        </Link>

                    </div>
                }


            </div>

        </div>


    )
}
