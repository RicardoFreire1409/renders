import { useEffect, useState } from 'react';

export function useTheme() {
  const getInitial = () => {
    // lee de <html> para evitar des-sync con el bootstrap del index.html
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, setTheme, toggle };
}
