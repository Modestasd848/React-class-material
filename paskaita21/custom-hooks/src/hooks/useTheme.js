import { useState, useEffect } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem('theme');
    return storedTheme !== null ? storedTheme : 'light';
  });

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return { theme, toggleTheme };
}
