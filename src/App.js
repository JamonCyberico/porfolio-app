import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Skills from './pages/Skills';
import Work from './pages/Work';

import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
