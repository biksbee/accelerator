import turnLeft from '../../assets/icon/turnLeft.svg'
import turnRight from '../../assets/icon/turnRight.svg'


const Next = ({direction, onClickHandler}) => {

    return (
        <div className='w-[90px] h-[90px] flex items-center justify-center cursor-pointer'>
            <div 
                onClick={onClickHandler}
                className="w-[70px] h-[70px] flex justify-center items-center rounded-full border-[2px] border-[#fff] hover:bg-[rgba(0,0,0,0.85)] bg-[rgba(0,0,0,0.7)] duration-500"
            >
                {
                    direction === 'left' ? 
                        <img src={turnLeft}  alt="left" />
                    : direction === 'right' ?
                        <img src={turnRight} alt="right" />
                    : null 
                } 
            </div>
        </div>        
    )
}

export default Next