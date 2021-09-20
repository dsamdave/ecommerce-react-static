import React from 'react';
import Picture from './Imageproduct.jpg';
import PictureOne from './imageProduct(1).png';
import PictureTwo from './imageProduct(2).png';
import { Link, link } from 'react-router-dom';

console.log(Picture, PictureOne, PictureTwo);

const FirstThree = () => {
    return (
        <div className="Topthree">
            <div className="pictureOne">
            <Link to="/Hot-deals">
            <img src={Picture} alt="cannot load image" className="imgone" />
            <h5 className="brandname one">FS - QUILTED MAXI <br /> CROSS BAG</h5>
            <h6 className="brandname two">$534.33 <span>24% Off</span></h6>
            <h5 className="brandname three">$299.43</h5>
            </Link>
            </div>
            <div className="pictureTwo">
            <Link to="/Hot-deals">
            <img src={PictureOne} alt="Still cannot load image" className="imgone" />
            <h5 className="brandname one">FS - Nike Air <br />Max 270 React...</h5>
            <h6 className="brandname four">$534.33 <span>24% Off</span></h6>
            <h5 className="brandname five ">$299.43</h5>
            </Link>
            </div>
            <div className="pictureThree">
            <Link to="/Hot-deals">
            <img src={PictureTwo} alt="Still cannot load image" className="imgone"/>
            <h5 className="brandname one">FS - Nike Air <br />Max 270 React...</h5>
            <h6 className="brandname six">$534.33 <span>24% Off</span></h6>
            <h5 className="brandname three">$299.43</h5>
            </Link>
            </div>

        </div>
    )
}

export default FirstThree
