import { Header } from '../components/Header';
import { GO_HOME } from '../utils/constants';
import '../App.css';
import { Button } from '../components/Button';

function Weather() {
  return (
    <div className="App">
      <Header title="Mars Weather" />
      <Button to="/" title={GO_HOME} />
    </div>
  );
}

export default Weather;
