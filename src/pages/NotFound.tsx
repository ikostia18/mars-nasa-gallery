import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { HEADER_FONT_SIZE, GO_HOME } from '../utils/constants';
import '../App.css';

function NotFound() {
  return (
    <div className="App">
      <Header title="Page Not Found" fontSize={HEADER_FONT_SIZE} />
      <Link to="/">{GO_HOME}</Link>
    </div>
  );
}

export default NotFound;
