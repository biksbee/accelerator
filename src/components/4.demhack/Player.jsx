import ReactPlayer from 'react-player/lazy'
import { deamhackHak } from '../content'

const Player = () => {
    const content = deamhackHak

    return ( 
            <ReactPlayer 
                className='xl:w-[1200px] w-[90vw] xl:h-[600px] ms:h-[500px] md:h-[400px] h-[300px] duration-500'
                url={content.youtube} 
                controls
            />        
    )
}

export default Player