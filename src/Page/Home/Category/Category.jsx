import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {

    return (
        <section >
            <SectionTitle 
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            >
            
            </SectionTitle>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://i.ibb.co/5TTRqfR/slide1.jpg" alt="" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/NL4J1mL/slide2.jpg" alt="" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Pizza</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/KxBL7TH/slide3.jpg" alt="" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Soup</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/sJ3hy9x/slide4.jpg" alt="" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Dessert</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/5TTRqfR/slide1.jpg" alt="" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Salads</h3>
            </SwiperSlide>
        </Swiper>
        </section>
    );
};

export default Category;