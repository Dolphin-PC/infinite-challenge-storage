import { PaletteMode, ThemeOptions, createTheme } from '@mui/material'
import { colors } from './colors'

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? // light mode
          {
            primary: {
              main: colors.light.primary
            },
            info: {
              main: colors.light.primary
            },
            text: {
              primary: '#000'
            }
          }
        : // dark mode
          {
            primary: {
              main: colors.dark.primary
            },
            info: {
              main: colors.dark.primary
            },
            text: {
              primary: '#fff'
            }
          })
    }
  }
}

export const dark_theme = createTheme(getDesignTokens('dark'))
export const light_theme = createTheme(getDesignTokens('light'))
