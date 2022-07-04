import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Programs/>
    </div>
  );
}

export default App;
