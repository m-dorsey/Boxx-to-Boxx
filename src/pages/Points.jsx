import Team from "../components/Team"
import '../assets/styles/Fixtures.css'

import {useLocation} from 'react-router-dom'

export const Points = () => {

    const location = useLocation()
    // console.log(location)

    return (
        <>
            <h1 style={{marginLeft:'5rem'}} className='fixtures_header'>Points</h1>
            <Team />
        </>
    )
}

export default Points