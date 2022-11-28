import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className='nav-bar'>
                <Link className='button-1'>My Cards</Link>
                <Link className='button-1'>My Friends Cards</Link>
                <Link className='button-1'>Liked Cards</Link>
                <Link className='button-1'>All Cards</Link>
            {/* <button className='button-1'>My Friends Cards</button>
            <button className='button-1'>Liked Cards</button>
            <button className='button-1'>All Cards</button> */}
        </nav>
    )
}
