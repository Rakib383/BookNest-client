
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Authors = () => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/authors")
            .then(res => setAuthors(res.data))

    })


    return (
        <div className="text-center py-3  pb-10 lg:pb-16">
            <h3 className="font-black font-charm text-2xl md:text-3xl text-primaryColor">Voices That Inspire</h3>
            <p className="text-gray-600 dark:text-gray-400 font-semibold mt-2 md:text-[17px] px-3 md:px-8">Explore the journeys, works, and wisdom of remarkable authors.

            </p>
            <div className="w-80   sm:w-[500px] md:w-[700px] lg:w-[890px] rounded-md  mx-auto  mt-8 sm:mt-14 pb-14 ">

                <Swiper
                    modules={[Navigation, Autoplay]} // Add modules here
                    centeredSlides={true} // Centers the active slide
                    // slidesPerView={1.5} // Number of slides to show
                    spaceBetween={20} // Space between slides
                    breakpoints={{
                        1024: {
                            slidesPerView: 2.5, // For large screens
                            spaceBetween: 50,
                            centeredSlides: false
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 40,
                        },
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    navigation
                >
                    {
                        authors.map((writer, ind) => <SwiperSlide className="rounded-md  " key={ind}>
                            <div className="card rounded-none h-auto  shrink-0 w-80 dark:bg-gray-800 grow py-7">
                                <figure className=" w-48 h-60 mx-auto">
                                    <img
                                        src={writer.image}
                                        className=" h-full w-full object-cover" />
                                </figure>
                                <div className="card-body p-4 pb-0 gap-0 items-center  grow-0  text-center">
                                    <h2 className="text-base font-bold">{writer.name}</h2>
                                    <p className='truncate w-full text-sm px-5'>{writer.description}</p>


                                    <div className="card-actions">
                                        <Link to={`/authors/${writer._id}`} className="btn mt-2 bg-primaryColor text-white hover:outline outline-primaryColor hover:text-primaryColor hover:bg-white">See Details</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>


            </div>

        </div>
    )
}
