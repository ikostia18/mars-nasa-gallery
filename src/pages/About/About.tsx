import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import './style.css';
import {
  API_KEY,
  API_NASA_MARS_CURIOSITY_PHOTOS,
  CURIOSITY_INFO,
  EARTH_DATE,
  PAGE_1,
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
        console.log('Fetching data error: ', error);
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
          <Tooltip content={CURIOSITY_INFO}>
            <div className="text-info">{CURIOSITY_INFO}</div>
          </Tooltip>

          <div className="button-wrapper">
            <Button to="/gallery" title="View Images By Date" />
            <Button to="/weather" title="View Weather" />
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
