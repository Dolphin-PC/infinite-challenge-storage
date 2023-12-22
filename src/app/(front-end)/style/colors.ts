import { PaletteColorOptions, PaletteOptions } from '@mui/material'

const dark_palette: PaletteColorOptions = {
  light: '#bba5a7',
  main: '#4b2d34',
  dark: '#3a2128',
  contrastText: '#000'
}

const light_palette: PaletteColorOptions = {
  light: '#d7c9ca',
  main: '#3a2128',
  dark: '#3a2128',
  contrastText: '#fff'
}

export const dark = {
  primary: '#3a2128'
}

export const light = {
  primary: '#fff'
}

export const colors = Object.assign(
  {},
  { dark },
  { light },
  { dark_palette },
  { light_palette }
)
