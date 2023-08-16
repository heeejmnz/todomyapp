import { createTheme } from '@mui/material/styles'

const MaterialTheme = createTheme({
  palette: {
    mode: 'light' || localStorage.getItem('theme'),
    primary: {
      light: '#FFF',
      main: '#E3F2FD',
    },
    secondary: {
      light: '#D9886D',
      main: '#C07157',
    },
  },
})

export default MaterialTheme

