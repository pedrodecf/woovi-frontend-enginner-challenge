'use client'
import { Nunito } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { Colors } from './colors'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  palette: {
    primary: {
      main: Colors.primary,
      text: Colors.text,
      white: Colors.white,
      gray: Colors.gray,
      lightGray: Colors.lightGray,
      blue: Colors.blue,
    },
  },
})

export default theme
