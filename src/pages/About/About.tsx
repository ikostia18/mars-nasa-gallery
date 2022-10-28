import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import './style.css';
import { CURIOSITY_INFO } from '../../utils/constants';

function About() {
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
          <div className="text-info">{CURIOSITY_INFO}</div>
          <div className="button-wrapper">
            <Button to="/gallery" title="View Images By Date" />
            <Button to="/weather" title="View Weather" />
          </div>
        </div>
      </div>

      <div className="second-section">
        <span className="carousel-header">
          Curiosity rover images <span className="inner-text">from today</span>
          <div></div>
        </span>
        <div className='page-seq'>
          Page {}/{}
        </div>
      </div>
    </div>
  );
}

export default About;
