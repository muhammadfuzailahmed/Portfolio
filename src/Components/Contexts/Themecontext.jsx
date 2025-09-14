import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext({
    theme: 'dark',
    setTheme: () => {},
    themeToggle: () => {}
})

const THEME_KEY = 'theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}


export function Themecontext({children}) {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        const root = document.documentElement;
        if(theme === 'dark'){
            root.classList.add('dark')
        }else{
            root.classList.remove('dark')
        }
         try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {}
    },[theme])

    const themeToggle = useCallback(() => setTheme(t => t === 'dark' ? 'light' : 'dark'), [])

    const value = useMemo(() => ({theme, themeToggle, setTheme}),[theme])

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 