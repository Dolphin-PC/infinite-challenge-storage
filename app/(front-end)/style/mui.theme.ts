import { PaletteMode, ThemeOptions, createTheme } from '@mui/material'
import { colors } from './colors'

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? // light mode
          {
            primary: colors.light_palette,
            info: colors.light_palette
          }
        : // dark mode
          {
            primary: colors.dark_palette,
            info: colors.dark_palette
          })
    }
  }
}

export const dark_theme = createTheme(getDesignTokens('dark'))
export const light_theme = createTheme(getDesignTokens('light'))
