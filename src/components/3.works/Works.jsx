import ChapterNew from "../modules/ChapterNew"
import { workContent } from "../content"
import { useTranslation} from 'react-i18next'

const Works = ({lang}) => {
    const { t } = useTranslation()

    return (
        <div id="work" className="w-full flex justify-center bg-c_gray-regular">
            <div className="xl:w-[1280px] w-full relative overflow-hidden">
                <div className="ms:pt-[170px] pt-[90px]">
                    <div className="md:px-[40px] px-[15px]">
                        <div className='startPageText text-c_blue-dark xl:w-[1024px] md:w-[700px] s:w-[319px] w-[90vw] pb-[55px]'>
                            {t('workContent.mainTitle')}
                        </div>
                    </div>
                    <div>
                        {
                            workContent.icon.map((item, index) => (
                                <div key={index} className="w-[90vw] pt-[25px] xl:pb-[144px] pb-[45px] last:pb-[90px]">
                                    <div className="w-[90vw] md:mx-[40px] mx-[15px] border-t-[2px] border-t-c_blue-dark xl:pt-[25px]" />
                                    <ChapterNew i={{item, index}} lang={lang} />
                                </div>
                            ))
                        }       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works