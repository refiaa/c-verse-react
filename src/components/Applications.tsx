import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import forex from '../assets/App_example1.png';
import pin from '../assets/App_example2.png';
import ip from '../assets/App_example3.png';
import url from '../assets/App_example4.png';
import pic from '../assets/App_example5.png';

const applications = [
    { img: pin, name: "App_example1" },
    { img: forex, name: "App_example2" },
    { img: pic, name: "App_example3" },
    { img: ip, name: "App_example4" },
    { img: url, name: "App_example5" },
];

const ApplicationCard = ({ img, name }: { img: string, name: string }) => (
    <div className="h-fit md:w-full p-8 text-white bg-background rounded-xl overflow-hidden">
        <img src={img} alt={name} className="w-full object-cover object-top" />
        <h3 className="text-xl md:text-2xl my-2 font-semibold">{name}</h3>
    </div>
);

const Applications = () => (
    <section id='applications' className='md:py-32 py-20 border-y border-gray-700'>
        <div className="text-center">
            <h3 className="text-4xl font-semibold text-highlight">
                Our <span className='text-highlight'>Applications</span>
            </h3>
        </div>
        <br />
        <div className="flex max-w-6xl justify-evenly px-5 mx-auto items-center relative">
            <div className="md:w-[70%] w-[90%] mx-auto">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={20}
                    breakpoints={{ 768: { slidesPerView: 2 } }}
                    loop={true}
                    autoplay={{ delay: 6000 }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                >
                    {applications.map((app, i) => (
                        <SwiperSlide key={i}>
                            <ApplicationCard {...app} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
);

export default Applications;
