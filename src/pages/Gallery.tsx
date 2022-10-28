import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { GO_HOME } from '../utils/constants';
import '../App.css';
import { Button } from '../components/Button';

function Gallery() {
  return (
    <div className="App">
      <Header title="Mars Images By Date" />
      <Button to="/" title={GO_HOME} />
    </div>
  );
}

export default Gallery;
