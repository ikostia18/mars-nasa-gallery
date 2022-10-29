import { useState } from 'react';
import { Image } from '../../components/Image';
import './style.css';

interface ICarousel {
  data: Array<any>; // can be more typed specified
}

export const Carousel: React.FC<ICarousel> = (props: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselScroll = () => {
    if (currentIndex === props.data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  const carouselItemStyle: React.CSSProperties = {
    transform: `translate(-${currentIndex * 100}%)`,
  };

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          {props.data.map((image, index) => {
            return (
              <div style={carouselItemStyle} key={image?.id}>
                <Image src={image?.img_src} className="carousel-item" />
              </div>
            );
          })}
        </div>

        <div className="carousel-nav" onClick={carouselScroll}>
          &gt;
        </div>
      </div>

      <div className="page-seq">
        Page {currentIndex + 1} / {props.data.length}
      </div>
    </>
  );
};
