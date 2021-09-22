import React, {useState} from 'react';
import Image from './images/heels/b4Xk6bzgQWU.png';
import Image0 from './images/heels/GN3Kw9HABd0.png';
import Image1 from './images/heels/lY3d_sIzBXg.png';
import Image2 from './images/heels/pEzLon__DfM.png';
import Image3 from './images/heels/sl963NLr3bI.png';
import Image4 from './images/heels/uianIkmhuvk.png';
import Image5 from './images/heels/UR-0lB0sDTA.png';
import Image6 from './images/heels/Zx76sbAndc0.png';
import Image7 from './images/heels/ndpX28miBtE.png';
import Image8 from './star copy 2.png';
import Image9 from './star.png';
import Image11 from './overlay.png';
import { Link, link } from 'react-router-dom';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Image15 from './images/XZ3EmAIWuz0.png';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import LittleNav5 from './LIttleNav5';


const arrowdown = <FontAwesomeIcon icon={faCaretDown} />
const Cart = <FontAwesomeIcon icon={faShoppingCart} />
const heart = <FontAwesomeIcon icon={faHeart} />
console.log(Image, Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image15)
const Heels = () => {
    const [loadMoreIsOpen, setloadMoreIsOpen] = useState(false)
    return (
        <div>
                    <div>
            <div className="Hotdeals">
                <LittleNav5 />
                <div className="Hotdeals-Collection">
                    <div className="Hotdeals-items2">
                        <div className="Hotdeals-items">
                            <h1>Heels</h1>
                            <p>Nike <span>2</span></p>
                            <p>Airmax <span>48</span></p>
                            <p>Nike <span>14</span></p>
                            <p>Adidas <span>15</span></p>
                            <p>Vans <span>23</span></p>
                            <p>All Stars <span>1</span></p>
                            <p>Adidas <span>95</span></p>
                        </div>
                        <div className="Hotdeals-items pricerange">
                            <h1>PRICES</h1>
                            <p>Ranger: <span>$13.99 - $25.99</span></p>
                        </div>
                        <div className="Hotdeals-items brands">
                            <h1>BRAND</h1>
                            <p>Nike <span>20</span></p>
                            <p>Airmax <span>93</span></p>
                            <p>Siemens <span>91</span></p>
                            <p>Nike <span>99</span></p>
                            <p>Adidas <span>90</span></p>
                            <p>Airmax <span>79</span></p>
                            <p>Siemens <span>91</span></p>
                        </div>
                        <div className="Hotdeals-items more">
                            <h1>MORE</h1>
                        </div>


                    </div>
                    <div className="Hotdeals-rightcorner">
                        {/* <div className="Hotdeals-bluebg">
                            <div className="Hotdeals-writeups">
                                <h3>Adidas Men Running <br /> Sneakers </h3>
                                <p>Performance and designn. Taken right to the edge.</p>
                                <h6><Link to="/">SHOP NOW</Link></h6>
                            </div>
                            <div className="Hotdeals-shoey">
                                <img src={Image1} alt="cannot display" className="Hotdeals-giantshoe" />
                            </div>
                        </div> */}
                        <div className="sortby">
                            <div className="sortby-items">
                                <p className="counter">13 Items</p>
                                <p>Sort By</p>
                                <pre>Name   {arrowdown}</pre>
                                <p>Show</p>
                                <pre className="counter2">12   {arrowdown}</pre>
                            </div>

                        </div>

                        <div className="productcollection2">
                            <div className="numberOne">
                                <Link to="/Nike Air Max 270 React">
                                    <img src={Image} alt="" />
                                    {/* <img src={Image10} className="hot" /> */}
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
                            <div className="numberOne">
                                <Link to="/Nike Air Max 270 React">
                                    <img src={Image0} alt="" />
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
                            <div className="numberOne">
                                <Link to="/Nike Air Max 270 React">
                                    <img src={Image7} alt="" />
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
                            <div className="numberOne">
                                <Link to="/Nike Air Max 270 React">
                                    <img src={Image1} alt="" />
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
                            <div className="numberOne">
                                <Link to="/Nike Air Max 270 React">
                                    <img src={Image2} alt="" />
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
                            <div className="numberOne">
                                <Link to="/Nike Air Max 270 React">
                                    <img src={Image3} alt="" />
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
                            <div className="numberOne" isOpen={loadMoreIsOpen}>
                                <Link to="/Nike Air Max 270 React">
                                    <img src={Image4} alt="" />
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
                            <div className="numberOne" isOpen={loadMoreIsOpen}>
                                <Link to="/Nike Air Max 270 React">
                                    <img src={Image5} alt="" />
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
                            <div className="numberOne" isOpen={loadMoreIsOpen}>
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

                        </div>

                        <div className="sortby sortby-al">
                            <p>1</p>
                            <p onClick={() => setloadMoreIsOpen(true)}>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                        </div>
                    </div>

                </div>
                {/* <Footer/> */}

            </div>

        </div>

        </div>
    )
}

export default Heels
