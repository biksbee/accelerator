import {useState} from 'react'
import close from "../../assets/icon/closePop.svg"
import closeW from "../../assets/icon/closePopWhite.svg"

const PopUp = ({setOpen, background, children, c}) => {
    
    const [fade, setFade] = useState(false)

    return (
        <div className={`${background} fixed top-0 z-[100] w-screen h-screen flex justify-center`}>
            <div>
                <div className="w-full flex justify-end items-center">
                    <div className={`${background} absolute cursor-pointer top-0 right-0 w-[60px] md:h-[60px] h-[53px] flex items-center justify-center`} onClick={() => setOpen(false)} onMouseEnter={() => setFade(true)} onMouseLeave={() => setFade(false)}>
                        <div 
                            className={`flex justify-center items-center ${!fade ? '' : 'scale-[.85]'} duration-500`}>
                            {
                            c === 0 ? 
                                <img className={!fade ? "flex" : 'flex filter grayscale'} src={close} alt="close" /> 
                            :
                                c === 1 ?
                                    <img className={!fade ? "flex" : 'flex filter grayscale'} src={closeW} alt="close" /> 
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
                <div className="xl:px-[140px] md:px-[50px] px-[15px] h-full w-screen customScroll flex justify-center mb-[100px] overflow-y-scroll">
                    {children}
                </div>
            </div>    
        </div>
    )
}

export default PopUp