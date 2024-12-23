import { FaBook } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaPeopleGroup } from "react-icons/fa6";
export const Mission = () => {
    return (
        <div className="text-center mt-9 pb-8 bg-[#eeeeee]">
            <h2 className="font-black font-charm text-xl  md:text-2xl lg:text-3xl text-primaryColor md:pt-8 lg:pt-10">Our Mission</h2>
            <p className="text-gray-600 font-semibold mt-2 md:text-[17px] lg:text-lg px-3 w-96 mx-auto">Empowering knowledge, inspiring growth, and fostering a love for learning.</p>
                {/* container  */}
            <div className=" mt-8 sm:mt-12  flex flex-wrap items-center justify-center gap-5 max-w-[700px] mx-auto">
                        {/* card-1 */}
                <div className="bg-white w-[340px] flex flex-col items-start px-6 py-8 rounded-lg gap-2 ">
                    <FaBook className="text-5xl text-secondaryColor " />
                    <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Empower Student Learning</h3>
                    <p className="text-wrap text-start text-gray-600">Provide students with seamless access to a vast collection of books and resources, fostering academic and personal growth.</p>
                

                </div>
                    {/* card-2 */}
                <div className="bg-white w-[340px] flex flex-col items-start px-4 py-8 rounded-lg gap-2 text-start ">
                    
                    <FaTabletAlt  className="text-5xl text-secondaryColor "/>
                    <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Enhance Educational Experiences</h3>
                    <p className="text-wrap text-start text-gray-600">Create a digital platform that simplifies resource discovery, enabling students to focus on learning and exploration.</p>
                

                </div>
                    {/* card-3 */}
                <div className="bg-white w-[340px] flex flex-col items-start px-6 py-8 rounded-lg gap-2 ">
                <FcReading className="text-5xl text-secondaryColor "  />
                    
                    <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Promote Reading Habits</h3>
                    <p className="text-wrap text-start text-gray-600">Inspire a love for reading among students by offering a well-organized, accessible, and engaging digital library experience.</p>

                </div>
                    {/* card-4 */}
                <div className="bg-white w-[340px] flex flex-col items-start px-6 py-8 rounded-lg gap-2 ">
                    
                    <FaPeopleGroup className="text-5xl text-secondaryColor " />
                    <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Ensure Accessibility for All</h3>
                    <p className="text-wrap text-start text-gray-600">Design a user-friendly system that caters to students of all ages and technical abilities, making library resources available anytime.</p>
                

                </div>
            </div>
        </div>
    )
}
