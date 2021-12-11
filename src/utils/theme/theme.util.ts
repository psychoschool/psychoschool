import flatten from 'flat'
import type { ThemeName } from './theme.types'
import { themes } from './theme.consts'

export const setupTheme = (mode: ThemeName) => {
  const theme = themes[mode]
  const flattenTheme = flatten(theme, { delimiter: '-' }) as Collection<string, string>

  for (const key in flattenTheme) {
    document.documentElement.style.setProperty(`--${key}`, flattenTheme[key])
  }
}
