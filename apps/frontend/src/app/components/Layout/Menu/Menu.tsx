import { Link } from 'react-router-dom'
import { ROUTE } from '../../../routes'


export const Menu = () => {
    return (
        <nav>
            <ul className="flex list-none">
                <li className="mx-2"><Link to={ROUTE.HOME}>Home </Link></li>
                <li className="mx-2"><Link to={ROUTE.EMPLOYEES}>employees </Link></li>
                <li className="mx-2"><Link to={ROUTE.CONTACT}>contact </Link></li>
                <li className="mx-2"><Link to={ROUTE.ABOUT}>about</Link></li>
                <li className="mx-2"><Link to={ROUTE.REGISTRATION}> registration</Link></li>
            </ul>
        </nav>
    )
}


