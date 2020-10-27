import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F4F4F4',
      main: '#D1E1E6',
      dark: '#A3C2CC',
      contrastText: '#F4F4F4',
    },
    secondary: {
      light: '#ECF2F2',
      main: '#C9D6D6',
      dark: '#4F5656',
      contrastText: '#2F3737',
    },
  },
})
export default theme
