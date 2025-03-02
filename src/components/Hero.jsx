import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import '../styles/CarouselStyles.css'
import library1 from '../assets/images/library9.jpg'
import library2 from '../assets/images/library8.jpg'
import library3 from '../assets/images/library5.jpg'
import library4 from '../assets/images/library6.jpg'

export const Hero = () => {
    return (
        <div className='relative'>
            <Swiper

                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                slidesPerView={1}
                

            >
                <SwiperSlide>
                    <img src={library1} className='h-[300px] sm:h-[400px] md:h-[550px] lg:h-[620px] ' alt="" />
                </SwiperSlide>
                <SwiperSlide><img className='h-[300px] sm:h-[400px] md:h-[550px] lg:h-[620px] ' src={library2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px] sm:h-[400px] md:h-[550px] lg:h-[620px] ' src={library3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px] sm:h-[400px] md:h-[550px] lg:h-[620px] ' src={library4} alt="" /></SwiperSlide>

            </Swiper>
            <div 
                 className='absolute left-3 bottom-8 sm:bottom-[120px] md:bottom-[200px] lg:bottom-[230px] xl:bottom-[260px] text- bg-white/70 z-20 w-60 sm:w-72 sm:py-7 sm:px-5 md:w-[350px] px-3 py-5 rounded-md sm:left-5 lg:left-14 '>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-charm text-primaryColor  font-black '>Unlock the World of Books</h2>
                <p className='md:text-lg text-gray-700 pr-2 mt-1'>Streamline Your Reading Journey with Ease and Accessibility</p>
            </div>

        </div>
    )
}

