import { useEffect, useState } from "react"
import { NewBookCard } from "./NewBookCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';


export const NewArrival = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])

    return (
        <div className="text-center py-3  bg-[#EEEEEE] pb-10 lg:pb-16">
            <h2 className="font-black font-charm text-xl md:text-2xl text-primaryColor">New Arrivals</h2>
            <p className="text-gray-600 font-semibold mt-2 md:text-[17px] px-3 w-96 mx-auto">Explore the latest books added to our collection.Stay ahead of the curve with our newest collection.</p>
            <div className="w-full max-w-[1200px] mx-auto px-7 mt-8">

                <Swiper
                    className="flex justify-center items-center h-auto  mySwiper "
                    style={{ height: "auto" }}
                    spaceBetween={40}
                    breakpoints={{
                        620: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}

                    >
                    {
                        books.map(book => <SwiperSlide className="rounded-xl" key={book.id}>
                            <NewBookCard book={book}  />
                        </SwiperSlide>)
                    }
                </Swiper>


            </div>
        </div>
    )
}
