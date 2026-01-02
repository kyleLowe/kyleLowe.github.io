import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface LazyLoadProps {
  images: string[];
}

function LazyLoad({ images }: LazyLoadProps) {
  const settings: Settings = {
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{
                maxWidth: "550px",
                maxHeight: "400px",
                margin: "0 auto",
              }}
            />
          </div>
        ))}
      </Slider>
      <style>{`
        .slick-prev:before, .slick-next:before {
          color: black; /* arrow color */
          font-size: 30px;
        }

        .slick-dots li button:before {
          font-size: 12px;
          color: black;
        }

        .slick-slide {
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default LazyLoad;
