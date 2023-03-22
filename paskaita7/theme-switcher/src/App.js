import React, { useState } from 'react';

import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import SecondComponent from './components/SecondComponent/SecondComponent';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemesContext = React.createContext();
export const DarkModeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function onClickHandler() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div>
      <DarkModeContext.Provider value={isDarkMode}>
        <ThemesContext.Provider value={themes}>
          <FirstComponent />
          <SecondComponent />
          <button onClick={onClickHandler}>Change Theme</button>
        </ThemesContext.Provider>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
