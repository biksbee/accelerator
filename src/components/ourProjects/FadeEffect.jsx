import { ourProjects } from '../content'
import cn from 'classnames'
import { useTranslation} from 'react-i18next'


const FadeEffect = ({i, fade, setFade, setOpen, setLocation}) => {    
    const { t } = useTranslation()
    const content = ourProjects

    const openFunc = () => {
        setOpen(true)
        setLocation(t(`ourProjects.projects.${i.index}.title`))
    }

    return (
            <div
                className='cursor-pointer w-full flex flex-col justify-between h-full'
                onClick={openFunc}
                onMouseEnter={() => setFade(true)}
                onMouseLeave={() => setFade(false)} 
            >
                <div 
                    className="md:flex justify-between pt-[20px] pb-[26px] cursor-pointer"  
                >
                    <div className="ourProjectStyleTitle">
                        {t(`ourProjects.projects.${i.index}.title`)}
                    </div>
                    <div 
                        id="subTitle" 
                        className={cn(
                            "ourProjectStyleSubTitle relative last_letter flex_features",
                        )}
                    >
                            {t(`ourProjects.projects.${i.index}.subtitle`)}
                    </div>
                </div>
                <div 
                    className={ `${fade ? 'opacity-[0.9]' : 'opacity-[1]'} bg-white rounded-[15px] duration-500` }
                >
                    <div 
                        className={cn(
                            content.slide[i.index],
                            'w-full bg-center bg-contain bg-repeat-round rounded-[15px]',
                            'xs:h-[510px] md:h-[332px] h-[162px]'
                        )}
                    />  
                </div>
            </div>    
    )

}

export default FadeEffect