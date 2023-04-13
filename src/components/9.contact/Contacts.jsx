import { useTranslation} from 'react-i18next'

const Contacts = () => {
    const { t } = useTranslation()


    return (
        <div id="cont" className="w-full flex justify-center bg-c_blue-footer">
            <div className="xl:w-[1280px] w-full md:pt-[85px] pt-[90px] md:pb-[127px] pb-[90px] md:px-[40px] px-[15px]">
                <div className="md:pb-[98px] pb-[75px]">
                    <div className="startPageText text-c_blue-dark">
                        {t('contact.mainTitle')}
                    </div>
                </div>
                <div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[12px]">
                        <div className="contactText">
                            {t('contact.blocks').split('* ')[0]}
                            <a href={t('contact.here')} className="contactLink md:ml-[10px] ml-[7px]" target="_blank">
                                {t('contact.value').split(', ')[0]}
                            </a>
                        </div>
                    </div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[21px]">
                        <div className="contactText">
                            <div>{t('contact.blocks').split('* ')[1]}</div>
                            <div className="xss:flex">
                                <div>
                                    <a href={t('contact.mail')} className="contactLink" target="_blank">
                                        {t('contact.value').split(', ')[1]}
                                    </a>,
                                    <a href={t('contact.telegram')} className="contactLink ml-[10px]" target="_blank">
                                        {t('contact.value').split(', ')[2]}
                                    </a>
                                </div>
                            </div>
                                                        
                        </div>
                    </div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[14px]">
                        <div className="contactText pb-0">
                            <div>{t('contact.blocks').split('* ')[2]}</div>
                            <div className="sq:flex">
                                <a href={t('contact.habr')} className="contactLink md:text-[48px] text-[23px]" target="_blank">
                                    {t('contact.value').split(', ')[4]}
                                </a>,
                                <a href={t('contact.telegramChanel')} className="contactLink ml-[10px]" target="_blank">
                                    <div className="m:hidden"></div>
                                    {t('contact.value').split(', ')[5]}
                                </a>,
                            </div>  
                            <div className="flex">
                                <div>
                                    <a href={t('contact.facebook')} className="contactLink" target="_blank">
                                        {t('contact.value').split(', ')[6]}
                                    </a>,
                                </div>
                                <div>
                                    <a href={t('contact.linkedIn')} className="contactLink s:ml-[10px]" target="_blank">
                                        {t('contact.value').split(', ')[7]}
                                    </a>    
                                </div>                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts