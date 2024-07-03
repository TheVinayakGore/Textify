import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TextInput from './Components/TextInput'
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="flex-col font-light">
        <Navbar />
        <Hero />
        <TextInput />
        <Footer />
      </div>
    </>
  );
}

export default App;
