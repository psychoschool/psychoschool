import { useContext, useLayoutEffect, useMemo } from 'react'
import { useLocalStorage } from 'utils/local-storage.util'
import { ThemeName } from './theme.types'
import { ThemeContext } from './theme-provider'
import { setupTheme } from './theme.util'
import { themes } from './theme.consts'

export const useThemeCreator = (initial: ThemeName) => {
  const [theme, setTheme] = useLocalStorage<ThemeName>('theme', initial)

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

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return {
    theme,
    setTheme,
    themeVars: themes[theme]
  }
}
