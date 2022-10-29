import { useState } from 'react';
import { Header } from '../../components/Header';
import { Image } from '../../components/Image';
import { NavButton } from '../../components/NavButton';
import { SearchBar } from '../../components/SearchBar';
import { GO_HOME } from '../../utils/constants';
import './style.css';

function Gallery() {
  const [images, setImages] = useState<any>();

  return (
    <div className="App">
      <Header title="Mars Images By Date" />
      <SearchBar setData={setImages} />
        <div className="gallery-wrapper">
          {/* I've preferred to show to user the loading images instead of a 'Loading' indicator as in 'About page' cause the data is a bit heavy */}
          {images &&
            images.map((image: any) => {
              return (
                <div key={image?.id} className="image-item">
                  <Image src={image?.img_src} />
                </div>
              );
            })}
        </div>
      <div className="button-wrapper">
        <NavButton to="/" title={GO_HOME} />
      </div>
    </div>
  );
}

export default Gallery;
