import { Header } from '../components/Header';
import { NavButton } from '../components/NavButton';
import { GO_HOME } from '../utils/constants';
import '../App.css';

function Weather() {
  return (
    <div className="App">
      <Header title="Mars Weather" />
      <NavButton to="/" title={GO_HOME} />
    </div>
  );
}

export default Weather;
