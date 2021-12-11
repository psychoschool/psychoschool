import React, { FC, createContext } from 'react'
import { ThemeCtx, ThemeName } from './theme.types'
import { useThemeCreator } from './theme.hooks'

export const ThemeContext = createContext<ThemeCtx>({
  theme: 'light',
  setTheme: () => {}
})

interface Props {
  theme?: ThemeName
}
export const ThemeProvider: FC<Props> = ({ theme = 'light', children }) => {
  const themeCtx = useThemeCreator(theme)

  return <ThemeContext.Provider value={themeCtx}>{children}</ThemeContext.Provider>
}
