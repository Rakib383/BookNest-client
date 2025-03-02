import { FaBook } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaPeopleGroup } from "react-icons/fa6";
import { motion, useInView } from "motion/react"
import { useRef } from "react";

export const Mission = () => {

    const containerRef = useRef()
    const isInView = useInView(containerRef,{margin:"-200px"})
    return (
        <div className="text-center mt-9 pb-8 ">

            <h2 className="font-black font-charm text-2xl  md:text-3xl  text-primaryColor ">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 font-semibold mt-2 md:text-[17px] lg:text-lg px-3 ">Empowering knowledge, inspiring growth, and fostering a love for learning.</p>
            {/* container  */}
            <motion.div ref={containerRef} className=" mt-8 sm:mt-12  flex flex-wrap items-center justify-center gap-5 md:gap-8  max-w-[760px] mx-auto">
                {/* card-1 */}
                <motion.div initial={{ x: -300,y:0,opacity:0 }} whileInView={isInView && {x:0, y: 0,opacity:1,transition:{duration:1.5}}}  className=" dark:bg-gray-800 bg-white dark:text-white w-[320px] sm:w-[340px] flex flex-col items-start px-6 py-8 rounded-lg gap-2 ">
                    <FaBook className="text-5xl text-secondaryColor " />
                    <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Empower Student Learning</h3>
                    <p className="text-wrap text-start text-gray-600 dark:text-gray-300">Provide students with seamless access to a vast collection of books and resources, fostering academic and personal growth.</p>
                </motion.div>

                {/* card-2 */}
                <motion.div initial={{ x: 300,y:0,opacity:0 }} whileInView={isInView && {x:0, y: 0,opacity:1,transition:{duration:1.5}}} className="bg-white dark:bg-gray-800  w-[320px] sm:w-[340px] flex flex-col items-start px-4 py-8 rounded-lg gap-2 text-start ">

                    <FaTabletAlt className="text-5xl text-secondaryColor " />
                    <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Enhance Educational Experiences</h3>
                    <p className="text-wrap text-start text-gray-600 dark:text-gray-300">Create a digital platform that simplifies resource discovery, enabling students to focus on learning and exploration.</p>
                </motion.div>

                {/* card-3 */}
                <motion.div initial={{ x: -300,y:0,opacity:0 }} whileInView={isInView && {x:0, y: 0,opacity:1,transition:{duration:1.5}}}  className="bg-white dark:bg-gray-800 w-[320px] sm:w-[340px] flex flex-col items-start px-6 py-8 rounded-lg gap-2 ">
                    <FcReading className="text-5xl  " />

                    <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Promote Reading Habits</h3>
                    <p className="text-wrap text-start text-gray-600 dark:text-gray-300">Inspire a love for reading among students by offering a well-organized, accessible, and engaging digital library experience.</p>

                </motion.div>
                {/* card-4 */}
                <motion.div initial={{ x: 300,y:0,opacity:0 }} whileInView={isInView && {x:0, y: 0,opacity:1,transition:{duration:1.5}}}  className="bg-white dark:bg-gray-800 w-[320px] sm:w-[340px] flex flex-col items-start px-6 py-8 rounded-lg gap-2 ">

                    <FaPeopleGroup className="text-5xl text-secondaryColor " />
                    <h3 className="font-black font-charm text-xl md:text-2xl text-primaryColor">Ensure Accessibility for All</h3>
                    <p className="text-wrap text-start text-gray-600 dark:text-gray-300">Design a user-friendly system that caters to students of all ages and technical abilities, making library resources available anytime.</p>


                </motion.div>
            </motion.div>
        </div>
    )
}
