import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { uiTheme } from './app/config/theme'
import MainRouter from './app/router/router'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={uiTheme}>
        <CssBaseline />
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
