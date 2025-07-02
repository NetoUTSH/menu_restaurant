import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Carousel1 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % 3;
    setSelectedIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (selectedIndex - 1 + 3) % 3;
    setSelectedIndex(newIndex);
  };

  return (
    <div className="">
      <Carousel
        ref={carouselRef}
        selectedItem={selectedIndex}
        showArrows={false}
        autoPlay={false}
        infiniteLoop={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        onChange={(index) => setSelectedIndex(index)}
      >
        <div>
          <img src="" alt="Slide 1" />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src="" alt="Slide 2" />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src="" alt="Slide 3" />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel>

      <div className="">
        <button onClick={handlePrev} className="">
          <i className="bi bi-arrow-up-left"></i>
        </button>
        <button onClick={handleNext} className="">
          <i class="bi bi-arrow-up-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel1;
