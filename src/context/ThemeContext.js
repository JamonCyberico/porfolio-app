import React, { createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem('darkMode') === 'true' 

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

    localStorage.setItem('darkMode', String(newDarkMode))
  }

  useEffect(() => {
    setDarkMode(storedDarkMode)
  }, [storedDarkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      { children }
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
