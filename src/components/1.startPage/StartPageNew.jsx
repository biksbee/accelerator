import cn from 'classnames'
import { useTranslation} from 'react-i18next'

const StartPageNew = () => {
    const { t } = useTranslation()

    return(
        <div id='startPage' className='w-full flex justify-center md:h-[1024px] h-[640px] bg-c_purple-header'>
            <div className={cn(
                'xl:w-[1280px] w-full relative overflow-hidden',
                'md:pt-[177px] pt-[100px]'
            )}>
                <div className='relative xl:w-[766px] xl:pl-[40px] xl:px-0 px-[15px]'>
                    <div className='absolute z-[50]'>
                        <div className='startPageText text-c_gray-regular'>
                            {t('startPageTitle').split(', ')[0]} 
                        </div>
                        <div className='startPageText text-c_gray-regular flex'>
                            {t('startPageTitle').split(', ')[1]}  
                        </div>
                        <div className='startPageText s:flex'>
                            <div className='text-c_gray-regular md:mr-[16px] mr-[8px]'>
                                {t('startPageTitle').split(', ')[2]}
                            </div>
                            <div className='text-c_orange-regular'>
                                {t('startPageTitle').split(', ')[3]}
                            </div>
                        </div>
                        <div className='startPageText text-c_orange-regular xl:flex md:block flex'>
                            {t('startPageTitle').split(', ')[4]}
                        </div>
                    </div>    
                </div>
                <div className="absolute bottom-0 right-0">
                    <div className='relative xl:w-[552px] xl:h-[661px] md:w-[475px] md:h-[590px] s:w-[252px] s:h-[302px] w-[150px] h-[200px]'>
                        <div className='trapezoidCorner'></div>
                        <div className='startProjects'></div>
                    </div>
                    <div className='startPageTheLoop'></div>
                </div>   
            </div>
        </div>
    )
}

export default StartPageNew