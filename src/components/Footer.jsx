
import '../assets/styles/Navigation.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    return (
        <nav className='footer'>
            <NavLink  target='_blank' to='https://www.nwslsoccer.com/'>
                <img className='footer_item' src='https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/NWSL_logo.svg/1200px-NWSL_logo.svg.png'/>
            </NavLink>
        </nav>
    )
}

export default Footer