import React from 'react'
import Home from './Home'


// Usando themeProvider e createMuiTheme para personalizar o tema padrão do material
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3ea6ff'
      },
      background: {
        default: '#232323',
        dark: '#181818',
        paper: '#232323',
      }
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App;
