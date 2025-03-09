import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TextForm from './components/TextForm';
import TextInput from './components/TextInput';
import Footer from "./components/Footer";

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
        <hr className="opacity-20" />
        <TextForm mode={mode} toggelMode={toggelMode} />
        <hr className="opacity-20" />
        <TextInput mode={mode} toggelMode={toggelMode} />
        <hr className="opacity-20" />
        <Footer mode={mode} toggelMode={toggelMode} />
      </div>
    </>
  );
}

export default App;