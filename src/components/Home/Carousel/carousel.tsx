'use client'

import { useFetchReviews } from '@/hooks/queries'
import React, { useRef, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types'
import 'swiper/css';
import 'swiper/css/pagination';
import { QuoteIcon } from '@/components/Icons';
import classNames from 'classnames';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const { data: reviews, isLoading } = useFetchReviews();

    if (isLoading) return <span className="loader"></span>
    
    return (
        <div className='bg-brownLight sm:border-0 border border-primary'>
            <Swiper
                modules={[Autoplay]}
                className="mySwiper"
                autoplay={{ delay: 3000 }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                { reviews?.map(({ comment, name, id }: { comment: string; name: string; id: string }) => (
                    <SwiperSlide key={id}>
                        <div className='md:px-10 md:py-9 p-6'>
                            <div className="flex flex-col text-greyLight">
                                <QuoteIcon />
                                <p className='lg:text-[20px] mb-4 leading-[1.5]'>{comment}</p>
                                <p className='font-semibold md:text-lg md:text-greyLight text-primary'>- {name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )) }
                <div className="flex gap-3 items-center justify-center my-5">
                    { reviews?.map((_: {comment: string; name: string; id: string}, index: number) => (
                        <div
                            key={index} 
                            onClick={() => swiperRef.current?.slideTo(index)}
                            className={classNames('cursor-pointer h-[5.5px] w-[22px] transition-colors duration-300', activeIndex === index ? 'bg-primary' : 'bg-greyLight8')}
                        />
                    )) }
                </div>
            </Swiper>
        </div>
    )
}

export default Carousel