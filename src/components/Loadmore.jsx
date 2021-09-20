import React, { useState } from 'react';
import Image from './images/bags/Zha2jqwxzMY.png';
import Image0 from './images/bags/ZB4eQcNqVUs.png';
import Image1 from './images/bags/x2l1CSCbTSQ.png';
import Image2 from './images/bags/tcVH_BwHtrc.png';
import Image3 from './images/bags/qjyNCxmun3E.png';
import Image4 from './images/bags/K_nnOg6-vZ4.png';
import Image5 from './images/bags/1Pgq9ZpIatI.png';
import Image6 from './images/bags/CtOA9wbFAdQ.png';
import Image7 from './images/bags/APNnyM36puU.png';
import Image10 from './images/bags/_H0fjILH5Vw.png';
import Image8 from './star copy 2.png';
import Image9 from './star.png';
import Image11 from './overlay.png';
import { Link, link } from 'react-router-dom';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Image15 from './images/XZ3EmAIWuz0.png';
import LittleNav4 from './LittleNav4';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Modals from 'react-modal';


const arrowdown = <FontAwesomeIcon icon={faCaretDown} />
const Cart = <FontAwesomeIcon icon={faShoppingCart} />
const heart = <FontAwesomeIcon icon={faHeart} />
console.log(Image, Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image10, Image15)

const Loadmore = (moreIsOpen) => {
    // const [moreIsOpen, setloadmoreIsOpen] = useState(false)
    return (
        <div className="numberOne" isOpen={moreIsOpen}>
            <Link to="/Nike Air Max 270 React">
                <img src={Image6} alt="" />
                <h5 className="Productname">Nike Air Max 270 React</h5>
                <div className="stars">
                    <img src={Image9} alt="" />
                    <img src={Image9} alt="" />
                    <img src={Image9} alt="" />
                    <img src={Image9} alt="" />
                    <img src={Image8} alt="" />
                </div>
                <div className="pricetag">
                    <p className="price">$299.43</p>
                    <p className="former"> $534.33</p>
                    <div className="off">24% Off</div>
                </div>
                <div className="overlay">
                    <img src={Image11} alt="" />
                    <div className="overlaylink">
                        {heart}{Cart}
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Loadmore
