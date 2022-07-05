import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Testimonial from './Components/Testimonial/Testimonial';
import Why from './Components/Why/Why';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Programs/>
      <Why/>
      <Plans/>
      <Testimonial/>
    </div>
  );
}

export default App;
