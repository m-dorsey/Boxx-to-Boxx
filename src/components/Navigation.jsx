
import '../assets/styles/Navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav className='navbar'>
            <NavLink className='navbar-item' to='/'>Home</NavLink>
            <NavLink className='navbar-item' to='points'>Points</NavLink>
            <NavLink className='navbar-item' to='pick-team'>Pick Team</NavLink>
            <NavLink className='navbar-item' to='transfers'>Transfers</NavLink>
            <NavLink className='navbar-item' to='fixtures'>Fixtures</NavLink>
            <NavLink className='navbar-item' to='statistics'>Stats</NavLink>
        </nav>
    )
}

export default Navigation