
import '../assets/styles/Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav>
            <ul className='navbar'>
                <Link className='navbar-item' to='/'>Home</Link>
                <Link className='navbar-item' to='points'>Points</Link>
                <Link className='navbar-item' to='pick-team'>Pick Team</Link>
                <Link className='navbar-item' to='transfers'>Transfers</Link>
                <Link className='navbar-item' to='fixtures'>Fixtures</Link>
                <Link className='navbar-item' to='statistics'>Stats</Link>
            </ul>
        </nav>
    )
}

export default Navigation