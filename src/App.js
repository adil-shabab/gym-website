import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
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
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
