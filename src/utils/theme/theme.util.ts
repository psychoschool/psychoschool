import flatten from 'flat'
import { themes } from './theme.consts'
import type { ThemeName, ThemeCtx } from 'utils/theme/theme.types'
import { createContext, useLayoutEffect, useMemo } from 'react'
import { useLocalStorage } from 'utils/local-storage.util'

const setupTheme = (mode: ThemeName) => {
  const theme = themes[mode]
  const flattenTheme = flatten(theme, { delimiter: '-' }) as Collection<string, string>

  for (const key in flattenTheme) {
    document.documentElement.style.setProperty(`--${key}`, flattenTheme[key])
  }
}

export const ThemeContext = createContext<ThemeCtx>({
  theme: 'light',
  setTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export const useThemeCreator = () => {
  const [theme, setTheme] = useLocalStorage<ThemeName>('theme', 'light')

  useLayoutEffect(() => {
    setupTheme(theme)
  }, [theme])

  return useMemo(
    () => ({
      theme,
      setTheme: (theme: ThemeName) => {
        setTheme(theme)
        setupTheme(theme)
      }
    }),
    [setTheme, theme]
  )
}
