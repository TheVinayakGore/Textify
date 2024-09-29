import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

function App() {

  const [mode, setMode] = useState('light');

  const toggelMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
      <div className="flex flex-col font-light">
        <Navbar mode={mode} toggelMode={toggelMode} />
        <Hero mode={mode} toggelMode={toggelMode} />
        <Footer mode={mode} toggelMode={toggelMode} />
      </div>
    </>
  );
}

export default App;
