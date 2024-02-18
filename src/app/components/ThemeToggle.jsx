import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Adicione ou remova a classe 'dark' do elemento HTML body com base no estado do modo escuro
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="hover:text-slate-800 text-white dark:text-white dark:hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium font-semibold "
			
      onClick={toggleTheme}
    >
      {isDarkMode ? <SunIcon className="block h-6 w-6" aria-hidden="true" /> : <MoonIcon className="block h-6 w-6" aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggleButton;
