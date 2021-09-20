import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Image1 from './image Product (1).png';
import Image2 from './image Product.png';
import Image3 from './image Product (2).png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import style from '../Carousel.css';



console.log(Image1, Image2, Image3)


const data = [
  {
    image: require('./images/bags/Zha2jqwxzMY.png'),
    caption: "Caption",
    description: "Description Here"
  },
  {
    image: require('./images/bags/Zha2jqwxzMY.png'),
    caption: "Caption",
    description: "Description Here"
  },
  {
    image: require('./images/bags/Zha2jqwxzMY.png'),
    caption: "Caption",
    description: "Description Here"
  }
]
{/* <Carousel id="C-item">
<Carousel.Item>
    <img
        className="d-block w-100"
        src={Image2}
        alt="First slide"
    />
</Carousel.Item>
<Carousel.Item>
    <img
        className="d-block w-100"
        src={Image1}
        alt="Second slide"
    />

</Carousel.Item>
<Carousel.Item>
    <img
        className="d-block w-100"
        src={Image3}
        alt="Third slide"
    />
</Carousel.Item>
</Carousel> */}


// function HomeCarousel() {
//   const [index, setIndex] = useState(0);
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       {data.map((slide, i) => {
//         return (
//           <Carousel.Item>
//           <img
//               className="00"
//           />
//       </Carousel.Item>
//         )
//       })}

//     </Carousel>
//   );
// }
// export default HomeCarousel;
<Carousel id="C-item">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image1}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
const HomeCarousel = () => {

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementById("C-items");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) { slidePosition = 1 }
  slides[slidePosition - 1].style.display = "block";
  setTimeout(SlideShow, 2000); // Change image every 2 seconds
}
return(
  <Carousel id="C-item">
    <Carousel.Item id="C-item">
      <img
      className="d-block w-100"
      src={Image2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image1}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

)
}

export default HomeCarousel;
