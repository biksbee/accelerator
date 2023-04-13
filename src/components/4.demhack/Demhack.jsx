import cn from 'classnames'
import { deamhackHak } from '../content'
import demhack from '../../assets/icon/Deamhack.svg'
import arrow from '../../assets/icon/deamhackArrow.svg'
import { useTranslation} from 'react-i18next'
import { useState } from 'react'

import Player from './Player'

const Demhack = () => {
    const { t } = useTranslation()
    const [show ,setShow] = useState(false)
    const content = deamhackHak

    return (
        <div className="w-full flex justify-center bg-c_black-dark">
            <div className="xl:w-[1280px] w-full md:pt-[100px] pt-[70px] pb-[111px] md:px-[40px] px-[15px]">
                <div className="ms:flex justify-between">
                    <div className="md:w-[539px] s:w-[290px] md:h-[112px] h-[60px]">
                        <img src={demhack} alt="demhack" />
                    </div>
                    <div className='ms:text-right ms:pb-0 pb-[25px]'>
                        <div className='md:text-[24px] text-[15px] md:leading-[23px] leading-[14px] text-c_gray-primary'>
                            {t('deamhack.hackathon')}           
                        </div>
                        <a href={content.deamhackRu} target={"_blank"}>
                            <div className='w-max flex md:text-[18px] text-[15px] md:leading-[25px] leading-[21px] font-otf-normal not-italic text-c_orange-regular duration-500 hover:text-c_orange-hover border-b-[1px] border-c_orange-link_op'>
                                {t('deamhack.href')}
                                <img src={arrow} alt="arrow" className='ml-[10px]' />
                            </div>
                        </a>    
                    </div>
                </div>
                <div className='border-t-[2px] border-t-c_gray-line pt-[40px]'>
                    <div className='ms:columns-2 gap-[50px]'>
                        <div className='xl:w-[580px] ms:w-[40vw] text-c_gray-demhack md:text-[18px] md:leading-[25px] text-[15px] leading-[21px] font-otf-book not-italic'>
                            <div className='pb-[20px]'>
                                {t(`deamhack.text.${0}`)}
                            </div>     
                            <div>
                                {t(`deamhack.text.${1}`)}
                            </div>
                        </div>
                        <div className='ms:pt-0 pt-[20px] xl:w-[580px] ms:w-[40vw] text-c_gray-demhack md:text-[18px] md:leading-[25px] text-[15px] leading-[21px] font-otf-book not-italic'>
                            <div className='pb-[20px]'>    
                                {t(`deamhack.text.${2}`)}
                            </div>
                            <div>
                                {t(`deamhack.text.${3}`)}
                                <a href={content.roskomSvoboda} className='w-max border-b-[1px] border-b-c_gray-light hover:opacity-50 duration-500'>
                                    {t(`deamhack.text.${4}`)}
                                </a>
                                {t(`deamhack.text.${5}`)}
                            </div>
                        </div>
                    </div>
                    <div 
                        className='flex justify-center pt-[51px] cursor-pointer ' 
                        onClick={() => setShow(true)}
                    >
                        {
                            !show ? 
                                <div className={cn(
                                    'xl:w-[1200px] w-[90vw] xl:h-[600px] ms:h-[500px] md:h-[400px] h-[300px]',
                                    `bg-poster bg-cover bg-no-repeat bg-bottom`,
                                    'relative duration-500 flex items-center justify-center'
                                )} >
                                    <div className={cn(
                                        'absolute bg-youtube w-full h-full bg-no-repeat bg-center',
                                        'hover:opacity-[1] opacity-[0.9] duration-500'
                                    )} />
                                </div> 
                            : 
                                <Player />                       
                        }
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Demhack