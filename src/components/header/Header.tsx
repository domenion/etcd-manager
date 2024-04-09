'use client'

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import Button from '../button/Button';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className='flex justify-between p-4'>
      <span className='text-xl font-bold text-slate-950 dark:text-slate-50'>Header</span>
      <div>
        <Button
          // className={`w-fit absolute right-5 top-2 p-2 rounded bg-slate-600 hover:bg-slate-800 text-slate-50 dark:bg-slate-600 hover:dark:bg-slate-400 dark:text-white`}
          onClick={toggleDarkMode}>
          {theme === "light" ? "Dark" : "Light"}
        </Button>
      </div>
    </header>
  )
}

export default Header