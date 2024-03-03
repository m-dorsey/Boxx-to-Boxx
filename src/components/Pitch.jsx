
import pitch_img from '../assets/images/pitch.png'
import Formation from './Formation'
import '../assets/styles/Pitch.css'
import Player from './Players'
import {useLocation} from 'react-router-dom'

export const Pitch = () => {

    const location = useLocation()
    console.log(location)

    const formation = [
        ["SUB", 4],
        ["GK", 1],
        ["DEF", 4],
        ["MID", 4],
        ["FWD", 2],
    ]

    // console.log(formation)

    return (
        <div className='pitch'>
            <Formation className='pitch_formation' formation={formation}>
                {/* <Player team="NON" /> */}
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