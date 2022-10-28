import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { HEADER_FONT_SIZE, GO_HOME } from '../utils/constants';
import '../App.css';
import { useEffect } from 'react';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  });

  return (
    <div className="App">
      <Header title="Page Not Found" fontSize={HEADER_FONT_SIZE} />
      Redirecting to home page...
    </div>
  );
}

export default NotFound;
