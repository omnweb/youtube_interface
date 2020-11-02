import React from 'react'
import Home from './Home'

// Usando themeProvider e createMuiTheme para personalizar o tema padrão do material
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';

//Classes de estilização
const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh'
  }
})

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5'
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
