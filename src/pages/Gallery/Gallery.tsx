import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Image } from '../../components/Image';
import { NavButton } from '../../components/NavButton';
import { SearchBar } from '../../components/SearchBar';
import { GO_HOME, NUMBER_OF_ITEMS_PER_PAGE } from '../../utils/constants';
import './style.css';

function Gallery() {
  const [images, setImages] = useState<any>();
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState<any>();
  let tempArray: any[] = [];

  useEffect(() => {
    // Split and fill images per page
    if (images) {
      setNumberOfPages(images.length / NUMBER_OF_ITEMS_PER_PAGE);
      for (let i = 0; i < numberOfPages; i++) {
        tempArray.push([]);
        for (let j = 0; j < NUMBER_OF_ITEMS_PER_PAGE; j++) {
          tempArray[i].push(images[NUMBER_OF_ITEMS_PER_PAGE * i + j]);
        }
      }
      setImagesPerPage(tempArray);
    }
  }, [images]);

  const bottomNavBar = () => {
    const bar = [];
    for (let i = 0; i < numberOfPages; i++) {
      bar.push(
        <span className="nav-number" onClick={() => setPageNumber(i)}>
          {i}
        </span>
      );
    }
    return bar;
  };

  return (
    <div className="App">
      <Header title="Mars Images By Date" />
      <SearchBar setData={setImages} />
      <div className="gallery-wrapper">
        {/* I've preferred to show to user the loading images instead of a 'Loading' indicator as in 'About page' cause the data is a bit heavy */}
        {imagesPerPage &&
          imagesPerPage[pageNumber] &&
          imagesPerPage[pageNumber].map((image: any) => {
            return (
              <div key={image?.id} className="image-item">
                <Image width={175} src={image?.img_src} />
              </div>
            );
          })}
      </div>
      <div className="bottom-nav-bar">{imagesPerPage && bottomNavBar()}</div>
      <div className="button-wrapper">
        <NavButton to="/" title={GO_HOME} />
      </div>
    </div>
  );
}

export default Gallery;
