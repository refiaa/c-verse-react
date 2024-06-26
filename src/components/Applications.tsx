import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import main1 from '../assets/main1.png';
import main2 from '../assets/main2.png';
import comment from '../assets/comment.png';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';

const applications = [
    { img: main1, name: "メイン画面" },
    { img: main2, name: "メディア" },
    { img: comment, name: "コメント" },
    { img: event1, name: "イベント情報" },
    { img: event2, name: "イベント情報-アーティスト" },
];

const ApplicationCard = ({ img, name, isActive }: { img: string, name: string, isActive: boolean }) => (
    <div className={`h-fit md:w-full p-8 text-white bg-background rounded-xl overflow-hidden ${isActive ? 'text-highlight' : 'text-white'}`}>
        <img src={img} alt={name} className="w-full object-cover object-top" />
        <h3 className="text-xl md:text-2xl my-2 font-semibold">{name}</h3>
    </div>
);

const Applications = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
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
                        onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)}
                    >
                        {applications.map((app, i) => (
                            <SwiperSlide key={i}>
                                <ApplicationCard {...app} isActive={i === activeIndex} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Applications;
