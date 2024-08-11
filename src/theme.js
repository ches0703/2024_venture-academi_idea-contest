import { createTheme } from "@mui/material";


const theme = createTheme({
  typography: {
    fontFamily: 'Arial',
    h1: {
      fontSize: "2.8rem",
      fontWeight: 700
    },
    h2: {
      fontSize: "2.4rem",
      fontWeight: 700
    },
    h3: {
      fontSize: "2.0rem",
      fontWeight: 700
    },
    h4: {
      fontSize: "1.8rem",
    },
    body1: {
      fontSize: "1.6rem"
    },
    body2: {
      fontSize: "1.2rem"
    },
    button: {
      fontSize: "1.6rem"
    }
  },

  palette: {
    primary: {
      main: '#1F2942',
      contrastText: '#FFFFFF'

    },
    secondary: {
      main: '#4E5A77',
      contrastText: '#FFFFFF'
    },
    white: {
      main: '#FFFFFF'
    }
  }
})

export default theme