import { Header } from '../../components/Header';
import { NavButton } from '../../components/NavButton';
import { Image } from '../../components/Image';
import './style.css';
import {
  API_KEY,
  API_NASA_MARS_CURIOSITY_PHOTOS,
  // CURIOSITY_INFO_SHORT,
  CURIOSITY_INFO_LONG,
  EARTH_DATE,
  PAGE_1,
  SPECIFIC_DATE,
} from '../../utils/constants';
import { useState, useEffect } from 'react';
import { Carousel } from '../../components/Carousel';
import { Tooltip } from '../../components/Tooltip';

function About() {
  const [images, setImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const url =
      API_NASA_MARS_CURIOSITY_PHOTOS +
      '?' +
      EARTH_DATE +
      SPECIFIC_DATE +
      '&' +
      PAGE_1 +
      '&' +
      API_KEY;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.photos);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Fetching data error: ', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="main-wrapper">
      <Header title="About The Program" />
      <div className="first-section">
        <div className="left-area">
          <Image
            src="/images/curiosity.jpg"
            description="Curiosity rover image"
          />
        </div>
        <div className="right-area">
          {/* Just a test to validate tooltip is disabled with !isOverFlown */}
          {/* <Tooltip content={CURIOSITY_INFO_SHORT}>
            <div className="text-info">{CURIOSITY_INFO_SHORT}</div>
          </Tooltip> */}
          <Tooltip content={CURIOSITY_INFO_LONG}>
            <div className="text-info">{CURIOSITY_INFO_LONG}</div>
          </Tooltip>

          <div className="button-wrapper">
            <NavButton to="/gallery" title="View Images By Date" />
            <NavButton to="/weather" title="View Weather" />
          </div>
        </div>
      </div>

      {!isLoading ? (
        <div className="second-section">
          <span className="second-section-header">
            Curiosity rover images
            <span className="inner-text"> from today</span>
          </span>

          <Carousel data={images} />
        </div>
      ) : (
        <div className="second-section">Loading...</div>
      )}
    </div>
  );
}

export default About;
