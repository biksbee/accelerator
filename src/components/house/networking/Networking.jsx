import cn from 'classnames'
import { house } from '../../content'
import { useTranslation} from 'react-i18next'
import Converter from '../../../hooks/Converter'

import networkingLine from '../../../assets/icon/NetworkingLine.svg'

const Networking = () => {
    const { t } = useTranslation()
    const content = house

    return (
        <div className='md:my-[200px] mb-[80px]'> 
            <div className="ms:flex justify-between">
                <div className="relative mb-[17px]">
                    <div className={cn(
                        "text-c_gray-regular md:text-[45px] md:leading-[45px] text-[22px] leading-[22px]",
                        "font-otf-semiBold not-italic"
                    )}>
                        {t('house.networking')}
                    </div>
                    <div className="md:mt-[8px] mt-[5px] md:w-[279px] w-[132px]">
                        <img src={networkingLine} alt="networkingLine" />
                    </div>
                </div>
                <div className='md:w-[472px]'>
                <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otf-book not-italic text-c_gray-regular'>
                        {t('house.networkingDescription')}
                    </div>
                </div>
            </div>
            <div className='ms:mt-[70px] mt-[40px]'>
                <div className='grid grid-cols-3 gap-[25px]'>
                    {
                        Converter(content.networking.length).map((item, index) => (
                            <div key={index} className={`flex justify-center items-center w-full hover:opacity-50 duration-500  ${index === 4 ? 'md:h-[90px]' : null}`}>
                                <a href={content.networking[index].networkingLinks} target="_blank" className='w-full h-full flex justify-center items-center'>
                                    <img 
                                        src={content.networking[index].networkingIcons} 
                                        alt={`${content.networking[index].networkingIcons}`} 
                                        className={`${index === 4 ? 'md:w-[286px] w-[260px]' : index === 5 ? 'ds:w-[120px] w-[64px]' : null}`} 
                                    />
                                </a>    
                            </div>
                        ))
                    }
                </div>
            </div> 
        </div>
    )
}

export default Networking