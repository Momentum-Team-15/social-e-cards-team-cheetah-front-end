import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className='nav-bar'>
                <Link to="/create" path="" className='button-1'>Create a Card</Link>
                <Link to="/mycards" path="" className='button-1'>My Cards</Link>
                <Link to="/friends" path="" className='button-1'>My Friends</Link>
                <Link to="/" path="relative" className='button-1'>All Cards</Link>
        </nav>
    )
}
