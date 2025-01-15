'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from "swiper/modules";

import { slider_data, slider_item } from './data';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from './style.module.scss';

// delay before slide changing
const autoplay_delay = 5000;

/**
 * Slider on home page Карусель на главной странице
 * 
 * @extends swiper
 */

const Slider = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[
                Navigation,
                Autoplay,
                A11y
            ]}
            grabCursor={true}
            navigation
            loop={true}
            className='slider'
            autoplay={{
                delay: autoplay_delay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
        >
            {
                slider_data.map((slide: slider_item) => (
                    <SwiperSlide key={nanoid()}
                        className={`relative w-full ${styles.slide}`}>
                        {
                            slide.link ?
                            <Link href={slide.link}>
                                <Image src={slide.image}
                                    alt={slide.image_alt}
                                    fill={true} />
                            </Link> :
                            <div>
                                <Image src={slide.image}
                                    alt={slide.image_alt}
                                    fill={true} />
                            </div>
                        }
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
};

export default Slider;