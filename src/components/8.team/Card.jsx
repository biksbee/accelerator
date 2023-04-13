import cn from 'classnames'
import "swiper/css";
import { useTranslation} from 'react-i18next'


const Card = ({i, setFade, fade}) => {
    const { t } = useTranslation()


    return (
                        <div
                            onMouseEnter={() => setFade(true)}
                            onMouseLeave={() => setFade(false)} 
                            className='flex flex-col h-full md:justify-between'
                        >
                            <div className='md:hidden flex'>
                                <div className='md:hidden relative flex w-max h-max mb-[20px]'>
                                    <div className="absolute bg-c_blue-filterLayer w-full z-[40] h-full duration-500 cardRadius" />
                                    <div className={cn(
                                         !fade ? 'filter grayscale' :  'filter-none',
                                        'w-[150px] h-[150px] duration-500 bg-no-repeat bg-center bg-cover cardRadius', 
                                        t(`team.experts.${i.index}.photo`)
                                    )} />
                                </div>
                            </div>
                            <div className='md:flex_features'>
                                <div className='pb-[10px]'>
                                    <div className='text-c_gray-blur font-otf-semiBold text-[20px] leading-[20px] '>
                                        {t(`team.experts.${i.index}.name`)}
                                    </div>
                                </div>
                                <div className='mb-[20px]'>
                                    <div className='text-c_gray-blur opacity-50 font-otf-normal text-[16px] leading-[24px]'>
                                        {t(`team.experts.${i.index}.description`)}
                                    </div>
                                </div>
                            </div>    
                            <div className='relative flex w-max h-max '>
                                <div className="absolute bg-c_blue-filterLayer w-full z-[40] h-full duration-500 photoRadius" />
                                <div className={
                                        cn(
                                            !fade ? 'filter grayscale' :  'filter-none',
                                            'xl:w-[373px] md:w-[28vw] xs:h-[373px] md:h-[253px] w-[373px] h-[373px] md:block hidden duration-500 bg-no-repeat bg-cover bg-center photoRadius',
                                            t(`team.experts.${i.index}.photo`)
                                        )
                                } />
                            </div>    
                        </div>
    )
}

export default Card