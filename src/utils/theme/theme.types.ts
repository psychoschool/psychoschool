type MainColors = 'primary' | 'secondary' | 'warning' | 'info' | 'error' | 'success'
type TextColors = 'disabled' | 'primary' | 'secondary'
type ActionStates = 'active' | 'hover' | 'selected' | 'disabled' | 'disabledBackground' | 'focus'
type ActionOpacity = 'hoverOpacity' | 'selectedOpacity' | 'disabledOpacity' | 'focusOpacity' | 'activatedOpacity'

interface PaletteColor {
  light?: string
  main: string
  dark?: string
  contrastText?: string
}

type ColorsCollection = Collection<MainColors, PaletteColor>

type Palette = ColorsCollection & {
  text: Collection<TextColors, string>
  background: { default: string; paper: string }
  common: { black: string; white: string }
  divider: string
  action: Collection<ActionStates, string> & Collection<ActionOpacity, number>
}

export interface Theme {
  mode: ThemeName
  palette: Palette
}

export type ThemeName = 'dark' | 'light'
export type ThemesCollection = Collection<ThemeName, Theme>

export interface ThemeCtx {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

export type ThemeHook = () => [ThemeName, (theme: ThemeName) => void]
