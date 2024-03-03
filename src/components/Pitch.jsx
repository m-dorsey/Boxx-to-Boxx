
import pitch_img from '../assets/images/pitch.png'
import Formation from './Formation'
import '../assets/styles/Pitch.css'
import Player from './Player'

export const Pitch = () => {

    return (
        <div className='pitch'>
            <Formation className='pitch_formation' formation="4 4 2">
                <Player />
            </Formation>
        </div>
        // <>
        //     <div className='pitch'>
        //         <Formation className='pitch_formation' formation="1 4 4 2" />
        //         <div className='pitch_img'></div>
        //         {/* <img className='pitch_img' src={pitch_img} /> */}
        //     </div>
        // </>
    )
}

export default Pitch