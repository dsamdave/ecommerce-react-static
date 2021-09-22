import Image1 from './image Product (1).png';
import Image2 from './image Product.png';
import Image3 from './image Product (2).png';
import Image4 from './image Product (3).png';
import Image5 from './Product Picture02.png';
import Image6 from './Product Picture03.png';
import Image7 from './Product Picture01.png';




const Slider = () => {
    return ( 

        <div className="col-md-3">




           <div id="carouselExampleDark" class="carousel carousel-dark slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active bg-primary " aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" class="bg-light"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" class="bg-light"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">

{/* 
    <img src="image/product-picture-9.png" class="d-block w-100" alt="..."/> */}
     <div className="shoe2"><div className="shoe2wrap">
      <div className="secondshoe">
      <img class="mt-5" src={Image1} alt="" />
      </div>
      <div className="ratingss">
      <div className="ratingss-position">
      <div className="star2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
            </div>
            <div className='pricerating'>
              <p className="c">$499</p> <p className="d">$599</p> 
            </div>
      </div>
      </div>
     
      </div>

      </div> 
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5> */}
        {/* <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    {/* <img src="image/product-picture-9.png" class="d-block w-100" alt="..." /> */}

    <div className="shoe2"><div className="shoe2wrap">
      <div className="secondshoe">
      <img class="mt-5" src={Image2} alt="" />
      </div>
      <div className="ratingss">
      <div className="ratingss-position">
      <div className="star2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
            </div>
            <div className='pricerating'>
              <p className="c">$499</p> <p className="d">$599</p> 
            </div>
      </div>
      </div>
     
      </div>

      </div> 
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5> */}
        {/* <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      {/* <img src="image/product-picture-9.png" class="d-block w-100" alt="gfdf" /> */}

      <div className="shoe2"><div className="shoe2wrap">
      <div className="secondshoe">
      <img class="mt-5" src={Image3} alt="" />
      </div>
      <div className="ratingss">
      <div className="ratingss-position">
      <div className="star2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
                <i classNAme="fas fa-star"></i>
            </div>
            <div className='pricerating'>
              <p className="c">$499</p> <p className="d">$599</p> 
            </div>
      </div>
      </div>
     
      </div>

      </div> 
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5> */}
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

     );
}
 
export default Slider;