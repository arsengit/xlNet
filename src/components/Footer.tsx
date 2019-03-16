import * as React from 'react';
import { Link } from "gatsby"
export interface FooterProps {
    
}
 
const Footer: React.FunctionComponent<FooterProps> = () => {
    return ( 
        <footer>
            <ul>
                <Link to="/">Pricing</Link>
                <Link to="/">Career</Link>
                <Link to="/">Contact</Link>
            </ul>
            <div><ul>
                <a href="#"><i></i></a>
                <a href="#"><i></i></a>
                <a href="#"><i></i></a>
            </ul>
            <a href="#">get started</a>
            </div>
            <div><span>2019 XLENT Technologies. All rights reserved.</span><span>Tel: (650) 337-7781
Email: info@xlent.tech</span></div>
        </footer>
     );
}
 
export default Footer;