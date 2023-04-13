import {useState} from 'react'

import home from '../../assets/icon/House.svg'
import { useTranslation} from 'react-i18next'

import Consultation from './consultation/consultation'
import Networking from './networking/Networking'
import Steps from './networking/Steps'
import PopUp from '../modules/popUp'
import Experts from './Experts'

const back ='bg-[#404864]'

const House = () => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full flex justify-center gradientBackGround">
            <div className="xl:w-[1280px] w-full md:py-[120px] py-[90px] ">
                <div className='w-full flex justify-center xl:py-[200px] py-[100px] md:px-[40px] px-[15px]'>
                    <div className='startPageText text-c_gray-regular md:w-[645px] w-[296px]'>
                            <div className='w-full flex'>
                                <div className='h-max'>{t(`house.mainTitle.${0}`)}</div>
                                <div className='relative md:mx-[20px] mx-[10px] md:w-[44px] w-[25px] md:h-[55px] h-[30px]'>
                                    <img className='absolute top-[-7px]' src={home} alt="home" />
                                </div>
                                <div className='h-max'>{t(`house.mainTitle.${1}`)}</div>
                            </div>    
                            <div className='w-full text-center'>{t(`house.mainTitle.${2}`)}</div>
                    </div>
                </div>
                <div>
                    <Consultation setOpen={setOpen}/>
                </div>
                <div className='w-full justify-center md:px-[40px] px-[15px]'>
                    <div className='ms:mt-[200px] mt-[87px] pt-[30px] border-t-[2px] border-t-c_gray-regular' />
                </div>
                <div className='xl:w-[1200px] w-full md:px-[40px] px-[15px]'>
                    <Networking />
                    <div className='xl:block flex justify-center w-full'>
                        <Steps />
                    </div>
                </div>
            </div>
            {open ? 
                <PopUp setOpen={setOpen} background={back} c={1}>
                    <Experts />
                </PopUp>
                : 
            null}
        </div>
    )
}

export default House