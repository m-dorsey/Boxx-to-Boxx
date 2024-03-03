
import {Team} from '../components/Team'
import '../assets/styles/Fixtures.css'

export const PickTeam = () => {

    return (
        <>
            <h1 style={{ marginLeft: '5rem' }} className='fixtures_header'>Select your Starting Eleven</h1>
            <Team/>
        </>
    )
}

export default PickTeam