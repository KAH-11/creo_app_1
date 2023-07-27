import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

const Footer = () => {

    return (  
        <footer>

            <div class="footer-pages-links">
                <Link href="/" class="a">Home</Link>
                <Link href="/about" class="a">About</Link>
                <Link href="/services" class="a">Services</Link>
                <Link href="/contact" class="a">Contact</Link>
            </div>

            <div class="footer-social-media">
                <Link href="/" class="a"><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link href="/" class="a"><FontAwesomeIcon icon={faTwitter} /></Link>
                <Link href="/" class="a"><FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link href="/" class="a"><FontAwesomeIcon icon={faYoutube} /></Link>
                <Link href="/" class="a"><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>

            <div class="footer-copyright">
                <p>Copyright 2023 by KAH. All Rights Reserved.</p>
            </div>

        </footer>
    );

}
 
export default Footer;