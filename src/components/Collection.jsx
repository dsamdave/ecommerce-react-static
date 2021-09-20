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
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Cart = <FontAwesomeIcon icon={faShoppingCart} />
const heart = <FontAwesomeIcon icon={faHeart} />
console.log(Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11)

const Collection = () => {
    return (
        <div className="Collection">
            <div className="Bigtext">
                <h3>BEST SELLER</h3>
            </div>
            <div className="collection">
                <h4 className="active">All</h4>
                <Link to="./bags"><h4>Bags</h4></Link>
                <Link to="./sneakers"><h4>Sneakers</h4></Link>
                <Link to="./heels"><h4>Heels</h4></Link>
                <Link to="./sandals"><h4>Sandals</h4></Link>
            </div>
            <div className="productcollection">
                <div className="numberOne">
                <Link to="/Nike Air Max 270 React">
                    <img src={Image2} className="img" />
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
                        <img src={Image11} className="img" />
                        <div className="overlaylink">
                            {heart}{Cart}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="numberOne">
                <Link to="/Nike Air Max 270 React">
                    <img src={Image1} className="img" />
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
                        <img src={Image11} className="img" />
                        <div className="overlaylink">
                            {heart}{Cart}
                        </div>
                    </div>
                </Link>
                </div>
                <div className="numberOne">
                <Link to="/Nike Air Max 270 React">
                    <img src={Image3} className="img" />
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
                        <img src={Image11} className="img" />
                        <div className="overlaylink">
                            {heart}{Cart}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="numberOne">
                <Link to="/Nike Air Max 270 React">
                    <img src={Image4} className="img" />
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
                        <img src={Image11} className="img" />
                        <div className="overlaylink">
                            {heart}{Cart}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="numberOne">
                <Link to="/Nike Air Max 270 React">
                    <img src={Image5} className="img" />
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
                        <img src={Image11} className="img" />
                        <div className="overlaylink">
                            {heart}{Cart}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="numberOne">
                <Link to="/Nike Air Max 270 React">
                    <img src={Image6} className="img" />
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
                        <img src={Image11} className="img" />
                        <div className="overlaylink">
                            {heart}{Cart}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="numberOne">
                <Link to="/Nike Air Max 270 React">
                    <img src={Image7} className="img" />
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
                        <img src={Image11} className="img" />
                        <div className="overlaylink">
                            {heart}{Cart}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="numberOne">
                <Link to="/Nike Air Max 270 React">
                    <img src={Image1} className="img" />
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
                        <img src={Image11} className="img" />
                        <div className="overlaylink">
                            {heart}{Cart}
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="loadmore">
                <Link to="/">Load More</Link>
            </div>
        </div>
    )
}

export default Collection
