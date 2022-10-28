import { Header } from '../components/Header';
import { Button } from '../components/Button';
import '../App.css';

function About() {
  return (
    <div className="App">
      <Header title="About The Program" />
      <Button to="/gallery" title="View Images By Date" />
      <Button to="/weather" title="View Weather" />
    </div>
  );
}

export default About;
