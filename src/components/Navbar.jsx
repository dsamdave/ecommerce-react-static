// import React from 'react';
import { Link } from 'react-router-dom';
import Pictures from './Group525.png';
console.log(Pictures)

const Navbar = () => {
    return (
        <div className="Navbar">
                <p className="e-comm"><img src={Pictures} className="logo" /><pre><span>  E-Comm</span></pre></p>
                <Link to="/" className="home"><li >HOME</li></Link>
                <Link to="/Hot-deals"><li>HOT DEALS</li></Link>
                <Link to="/bags"><li>BAGS</li></Link>
                <Link to="/sneakers"><li>SNEAKERS</li></Link>
                <Link to="/heels"><li>HEELS</li></Link>
                <Link to="/sandals"><li className="contact">SANDALS</li></Link>
                {/* <li className="contact">CONTACT</li> */}
        </div>
    )
}

export default Navbar
