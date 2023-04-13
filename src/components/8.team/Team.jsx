import {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

import Card from './Card';
import { useTranslation} from 'react-i18next'
import Converter from '../../hooks/Converter';

SwiperCore.use([Keyboard, Mousewheel]);

const Team = () => {
    const { t } = useTranslation()

    const [fade0, setFade0] = useState(false)
    const [fade1, setFade1] = useState(false)
    const [fade2, setFade2] = useState(false)
    const [fade3, setFade3] = useState(false)

    const fade = [fade0, fade1, fade2, fade3]
    const setFade = [setFade0, setFade1, setFade2, setFade3]

    return (
        <div id='team' className="w-full flex justify-center bg-c_blue-moreDark">
            <div className="xl:w-[1280px] w-full">
                <div className="w-full flex ms:justify-center md:px-[40px] px-[15px] md:py-[160px] py-0 pt-[90px] pb-[60px]">
                    <div className="startPageText ms:text-center text-c_gray-blur ms:w-[650px] w-[230px]">
                        {t('team.mainTitle')}
                    </div>
                </div>
                <div className='relative md:pb-[80px] pb-[50px] flex'>
                    <Swiper
                        slidesPerView={"auto"} 
                        spaceBetween={40}
                        keyboard={true}
                        className='flex md:px-[40px] px-[15px] m-0'
                    >
                        {
                            Converter(t(`team.experts.length`)).map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    className='flex flex-col border-t-c_gray-regular border-t-[2px] xl:w-[373px] md:w-[28vw] w-[270px] pt-[20px]'
                                > 
                                    <Card i={{item, index}} fade={fade[index]} setFade={setFade[index]} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='text-c_gray-blur font-otf-book md:px-[40px] px-[15px] md:pb-[189px] pb-[90px]'>
                    <div className='md:text-[48px] md:leading-[67px] text-[22px] leading-[30px] pb-[10px]'>
                        {t('team.title')}
                    </div>
                    <div className='md:columns-2 gap-[50px]'>
                        <div className='xl:w-[575px] md:w-[45vw] md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] md:mr-[20px]'>
                            <div className='pb-[20px]'>
                                {t(`team.about.${0}`)}     
                            </div>      
                        </div>
                        <div className='xl:w-[575px] md:w-[45vw] md:text-[22px] md:leading-[30px] text-[15px] leading-[21px]'>
                            <div className='pb-[20px]'>
                                {t(`team.about.${1}`)}
                                <a 
                                    className='md:ml-[7px] ml-[3px] border-b-[rgba(216,209,241,0.1)] border-b-[1px] duration-500 hover:border-b-[rgba(216,209,241,0.5)]' 
                                    href={t('team.href')}
                                >
                                    {t(`team.about.${2}`)}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team