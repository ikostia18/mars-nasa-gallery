import { useState } from 'react';
import {
  API_KEY,
  API_NASA_MARS_CURIOSITY_PHOTOS,
  EARTH_DATE,
} from '../../utils/constants';
import './style.css';

interface ISearchBar {
  setData: React.Dispatch<React.SetStateAction<undefined>>;
}

export const SearchBar: React.FC<ISearchBar> = (props: ISearchBar) => {
  const [date, setDate] = useState('2020-07-14');

  const getImages = async () => {
    const url =
      API_NASA_MARS_CURIOSITY_PHOTOS + '?' + EARTH_DATE + date + '&' + API_KEY;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        props.setData(data.photos);
      })
      .catch((error) => {
        console.error('Fetching data error: ', error);
      });
  };

  return (
    <div className="search-bar">
      {/* There is n validation on the input text, value must be according the following template: YYYY-MM-DD */}
      <span className="search-bar-title">Earth date:</span>
      <input
        type="text"
        className="input-date"
        placeholder="Please enter date"
        onChange={(e) => setDate(e.target.value)}
        onFocus={(e) => (e.target.type = 'date')}
        onBlur={(e) => (e.target.type = 'text')}
      />
      <button className="search-button" onClick={() => getImages()}>
        Search
      </button>
    </div>
  );
};
