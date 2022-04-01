import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Service from './components/Service';

import { useEffect, useState } from 'react';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  return (
    <>
    <Home isScrolling={scrollHeight} />
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    
    </>
  );
}

export default App;
