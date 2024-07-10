import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import CssBaseline from '@mui/material/CssBaseline'
import './globals.css'

export const metadata = {
  title: 'Woovi Desafio Front',
  description: 'Desafio Frontend Enginner Woovi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
