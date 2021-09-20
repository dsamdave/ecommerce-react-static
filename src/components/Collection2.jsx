import { Link, link } from 'react-router-dom';
import Image1 from './image Product (1).png';
import Image2 from './image Product.png';
import Image3 from './image Product (2).png';
import Image4 from './image Product (3).png';
import Image5 from './Product Picture02.png';
import Image6 from './Product Picture03.png';
import Image7 from './Product Picture01.png';
import Image8 from './star copy 2.png';
import Image9 from './star.png';
import Image10 from './label.png';
import Image11 from './overlay.png';
import Image0 from './images/XZ3EmAIWuz0.png';
import Image20 from './images/LxVxPA1LOVM.png';
import Image21 from './images/heels/UR-0lB0sDTA.png';
import Image23 from './images/bags/K_nnOg6-vZ4.png';
import Image24 from './images/bags/1Pgq9ZpIatI.png';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Cart = <FontAwesomeIcon icon={faShoppingCart} />
const heart = <FontAwesomeIcon icon={faHeart} />
console.log(Image0, Image20, Image21, Image23, Image24, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11)

const Collection2 = () => {
const [loadMoreIsOpen, setloadMoreIsOpen] = useState(false)
    return (
        <div className="Collection2">
            <div className="productcollection2">
                <div className="numberOne">
                    <Link to="/Nike Air Max 270 React">
                        <img src={Image2} alt="" />
                        <img src={Image10} className="hot" />
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
                <div className="numberOne">
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
                <div className="numberOne">
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
                <div className="numberOne">
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
                <div className="numberOne" isOpen={loadMoreIsOpen}>
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
                <div className="numberOne" isOpen={loadMoreIsOpen}>
                    <Link to="/Nike Air Max 270 React">
                        <img src={Image20} alt="" />
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
                        <img src={Image21} alt="" />
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
                        <img src={Image23} alt="" />
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
                <p className="active">1</p>
                <p onClick={()=> setloadMoreIsOpen(true)}>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
        </div>
    )
}

export default Collection2
