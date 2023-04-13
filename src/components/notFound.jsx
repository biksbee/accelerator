import cn from 'classnames'

const NotFound = () => {

    return (
        <div className="h-[90vh] w-screen bg-c_purple-header flex justify-center">
            <div className="xl:w-[1280px] w-[90vw] h-full flex justify-center items-center">
                <div className="w-max text-center text-c_gray-regular">
                    <div className="font-otf-semiBold text-[120px] leading-[115px]">
                        404
                    </div>
                    <div className="font-otf-normal text-[26px] leading-[31px]">
                        Страницы с таким адресом нет
                    </div>
                    <a href="">
                        <div className="w-full flex justify-center mt-[50px]">
                            <div className={cn(
                                'w-[285px] h-[65px] flex items-center justify-center bg-c_orange-regular rounded-[10px]',
                                'bg-c_orange-regular hover:bg-c_orange-hover active:bg-c_orange-pressed',
                                'drop-shadow-default hover:drop-shadow-hover'
                            
                            )}>
                                <div className="text-c_gray-regular font-otf-semiBold text-[23px] leading-[32px]">
                                    Перейти на главную
                                </div>
                            </div>
                        </div>
                    </a>    
                </div>
            </div>
        </div>
    )
}

export default NotFound