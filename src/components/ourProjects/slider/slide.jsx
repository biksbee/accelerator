import {useState, useRef} from 'react'
import cn from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import SwiperCore, { Navigation,Keyboard, Mousewheel } from "swiper/core";

import FadeEffect from '../FadeEffect';
import Next from '../../modules/Next';
import Converter from '../../../hooks/Converter';
import { useTranslation} from 'react-i18next'

SwiperCore.use([Keyboard, Mousewheel, Navigation]);


const Slider = ({setShow, active, setActive, setOpen, setLocation}) => {
    const { t } = useTranslation()

    const [fade0, setFade0] = useState(false)
    const [fade1, setFade1] = useState(false)
    const [fade2, setFade2] = useState(false)
    const [fade3, setFade3] = useState(false)
    const [fade4, setFade4] = useState(false)    
    const fade = [fade0, fade1, fade2, fade3, fade4]
    const setFade = [setFade0, setFade1, setFade2, setFade3, setFade4]
    
    const swiperRef = useRef(null)
    
    return(
        <div className='relative flex'>
            { active !== 0 ? 
                <div className='md:flex hidden absolute z-[10] top-[50%] left-0'>
                    <Next 
                        direction={"left"} 
                        onClickHandler={() => swiperRef.current.swiper.slidePrev()}
                    />
                </div>
            : null}
            { active !== t('ourProjects.projects.length')-1 ? 
                <div className='md:flex hidden absolute z-[10] top-[50%] right-0'>
                    <Next 
                        direction={"right"}
                        onClickHandler={() => swiperRef.current.swiper.slideNext()}
                    />
                </div>
            : null}    
            <Swiper
                ref={swiperRef}
                slidesPerView={"auto"} 
                spaceBetween={30}
                keyboard={true}
                className="mx-0 xl:px-[calc((100vw-1280px)/2+40px)] md:px-[40px] px-[15px] flex"
                onSlideChange={(swiper) => setActive(swiper.activeIndex)}
            >
                {Converter(t('ourProjects.projects.length')).map((item, index) => (
                    <SwiperSlide 
                        key={index}
                        className={cn(
                            'flex flex-col border-t-[2px] border-t-c_blue-dark', 
                            'xs:w-[977px] md:w-[650px] w-[320px] #{!important}',
                            'bg-c_blue-regular duration-500',
                        )}
                        onClick={() => setShow(true)}
                    >
                        <FadeEffect setOpen={setOpen} i={{item, index}} fade={fade[index]} setFade={setFade[index]} setLocation={setLocation} />                   
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider