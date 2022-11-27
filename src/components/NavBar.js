import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <ul>
                <Link to="./cards/me" />
                    <li><button className='button-1'>My Cards</button></li>
                </Link>
                <Link>
                    <li><button className='button-1'>My Friends' Cards</button></li>
                </Link>
                <Link>
                    <li><button className='button-1'>Liked Cards</button></li>
                </Link>
                <Link>
                    <li><button className='button-1'>All Cards</button></li>
                </Link>
            </ul>
        </nav>
    )
}
