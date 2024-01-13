import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Skills from './pages/Skills';
import Work from './pages/Work';

import Login from './pages/Login';

import { ThemeProvider } from "./context/ThemeContext"
import { useState } from 'react';

function App() {
  const [ token, setToken ] = useState(null)

  const handleLogin = (token) => {
    setToken(token)
  }

  const handleLogout = () => {
    setToken(null)
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar onLogout={handleLogout}/>

      {!token ? (
        <Login onLogin={handleLogin}/>
      ) : 
        (
          <>
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
