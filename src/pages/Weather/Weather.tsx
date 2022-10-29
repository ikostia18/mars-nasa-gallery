import { Header } from '../../components/Header';
import { NavButton } from '../../components/NavButton';
import { GO_HOME } from '../../utils/constants';
import './style.css';

function Weather() {
  return (
    <div className="App">
      <Header title="Mars Weather" />
      <div style={{ color: 'red', fontSize: '22px' }}>
        <br></br>
        There are issues with the Weather NASA api endpoint.
        <br></br>
        Also the mock data object from provided url is messy and can't be used
        for this task.
        <br></br>
        In general, There is an option to use the gallery approach, same as in
        the Gallery page:
        <br></br>- Create dedicated interface for all inner information
        <br></br>- Fetch the data from the the endpoint
        <br></br>- Populate the needed object and render on the screen
        <br></br>
        <br></br>
      </div>

      <Header fontSize={16} title="AT - Atmospheric temperature sensor" />
      <Header fontSize={16} title="HWS - Horizontal wind speed sensor" />
      <Header fontSize={16} title="PRE - Atmospheric pressure sensor" />

      <NavButton to="/" title={GO_HOME} />
    </div>
  );
}

export default Weather;
