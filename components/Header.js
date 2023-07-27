import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';


const Header = () => {
    return ( 

        <header>

            <div class="logo"><Link href="/" class="a">Logo</Link></div>
            <div class="dropdown-menu">
                <ul>
                    <li><Link href="/" class="a">Home</Link></li>
                    <li><Link href="/about" class="a">About</Link></li>
                    <li><Link href="/services" class="a">Services</Link></li>
                    <li><Link href="/contact" class="a">Contact</Link></li>
                </ul>
            </div>
            <div class="toggle-btn">
                <i><FontAwesomeIcon icon={faBars} /></i>
            </div>
            <div class="links">
                <ul>
                    <li> <Link href="/" class="a">Home</Link> </li>
                    <li> <Link href="/about" class="a">About</Link> </li>
                    <li> <Link href="/services" class="a">Services</Link> </li>
                    <li> <Link href="/contact" class="a">Contact</Link> </li>
                </ul>
            </div>

        </header>
    );
}
export default Header;