import { useContext, useEffect, useState } from "react"
import { NewBookCard } from "./NewBookCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";


export const NewArrival = () => {
    const { user } = useContext(AuthContext)
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get("https://book-nest-server-zeta.vercel.app/latestBooks")
            .then(res => setBooks(res.data))

    })

    return (
        <div className="text-center py-3  bg-[#EEEEEE] pb-10 lg:pb-16">
            <h2 className="font-black font-charm text-xl md:text-2xl text-primaryColor">New Arrivals</h2>
            <p className="text-gray-600 font-semibold mt-2 md:text-[17px] px-3 w-96 mx-auto">Explore the latest books added to our collection.Stay ahead of the curve with our newest collection.</p>
            <div className="w-[400px] sm:w-[600px] md:w-[700px] lg:w-[890px]  mx-auto px-7 mt-8 sm:mt-14 pb-14 ">

                <Swiper
                    modules={[Navigation, Autoplay]} // Add modules here
                    centeredSlides={true} // Centers the active slide
                    // slidesPerView={1.5} // Number of slides to show
                    spaceBetween={20} // Space between slides
                    breakpoints={{
                        1024: {
                            slidesPerView: 2.5, // For large screens
                            spaceBetween: 50,
                            centeredSlides:false
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
                        books.map((book, ind) => <SwiperSlide className="rounded-xl  " key={ind}>
                            <NewBookCard book={book} />
                        </SwiperSlide>)
                    }
                </Swiper>


            </div>
        </div>
    )
}
