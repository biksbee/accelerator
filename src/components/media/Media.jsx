import { useState, useEffect } from 'react'
import cn from 'classnames'
import { media } from '../content'

import turnUp from '../../assets/icon/turnUp.svg'
import turnDown from '../../assets/icon/turnDown.svg'

import Converter from '../../hooks/Converter'
import { useTranslation} from 'react-i18next'

const Media = () => {
    const { t } = useTranslation()
    const [show, setShow] = useState(false)
    const [check, setCheck] = useState(0)

    useEffect(() => {
        if(show === true)
            setCheck(media.cmi.length)
        else
            setCheck(5)
    }, [show])

    return (
        <div className="w-full flex justify-center bg-c_purple-media">
            <div className='xl:w-[1280px] w-full relative overflow-hidden md:py-[120px] py-[90px]'>
                <div className='w-full flex justify-center xl:pb-[70px] md:pb-[70px] pb-[40px]'>
                    <div className='startPageText text-c_gray-regular'>
                        {t('media.title')}
                    </div>
                </div>
                <div className='w-full flex justify-center duration-500'>
                    <div 
                        className={cn(
                            'xl:w-[1280px] w-[90vw] flex flex-col items-center justify-center duration-500',
                        )}
                    >
                        <div 
                            className={`xl:w-[1200px] md:w-[688px] w-[90vw] transition-all h-auto ${!show ? 'md:max-h-[200px] m:max-h-[150px] max-h-[120px]' : 'max-h-[1000px]'} overflow-hidden grid grid-cols-3 justify-between duration-700 md:gap-y-[70px] gap-y-[35px] mb-[60px]`}
                        >
                            {
                                Converter(media.cmi.length).map((item, index) => (
                                        <div className={`hover:opacity-60 duration-500 flex justify-center`} >
                                            <a className='w-full h-full' href={media.cmi[item].link} target='_blank'><img src={media.cmi[item].icon} alt="" /></a>
                                        </div>
                                ))
                            }
                        </div>
                        <div className='cursor-pointer hover:opacity-75 duration-700 relative' onClick={() => {setShow(!show)}} >
                            <input type="checkbox" class='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                            <div className='font-otf-bold text-[#f4440D]'>
                                {
                                    !show ? 
                                        <div className='flex gap-x-[10px] duration-700'>
                                            {t('mediaShow')}
                                            <img src={turnDown} alt="turnDown" />
                                        </div>
                                    : 
                                        <div className='flex gap-x-[10px] duration-700'>
                                            {t('mediaHide')}
                                            <img src={turnUp} alt="turnUp" />
                                        </div>            
                                }
                            </div>
                        </div>
                        {/* <div className='xs:w-[60%] flex justify-between xl:pb-0 xs:mb-0 mb-[40px]'>
                            <a href={links[0]} target="_blank" className='hover:opacity-60 active:hover-60 duration-500'>
                                <div className='iconMedia'>
                                    <img src={RBK} alt='RBK' />
                                </div>
                            </a>
                            <a href={links[1]} target="_blank" className='hover:opacity-60 duration-500'>
                                <div className='iconMedia md:w-[158px] md:h-[65px]  w-[48px] h-[35px]'>
                                    <img src={KO} alt="KO" />
                                </div>
                            </a>
                            <a href={links[2]} target="_blank" className='hover:opacity-60 duration-500'>
                                <div className='iconMedia'>
                                    <img src={TheBell} alt="TheBell" />
                                </div>    
                            </a>                        
                        </div>
                        <div className='xl:w-max xs:w-[40%] w-full flex justify-center '>
                            <div className='flex xl:justify-center justify-between xl:w-max md:w-[50vw] mds:w-[40vw] w-[55vw]'>
                                <a href={links[3]} target="_blank" className='w-[50%] flex justify-center hover:opacity-60 duration-500'>
                                    <div className='iconMedia md:w-[158px] md:h-[65px]  w-[48px] h-[35px]'>
                                        <img src={VcRu} alt="VcRu" />
                                    </div>
                                </a>
                                <a href={links[4]} target="_blank" className='w-[50%] flex justify-center hover:opacity-60 duration-500'>    
                                    <div className='iconMedia'>
                                        <img src={RbRu} alt="RbRu" />
                                    </div>
                                </a>    
                            </div>
                        </div>     */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Media