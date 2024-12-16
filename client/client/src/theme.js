
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0d7377',
    },
    secondary: {
      main: '#14ffec',
    },
    background: {
      default: '#212121',
      paper: '#2c2c2c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #14ffec 0%, #0d7377 100%)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(90deg, #0d7377 0%, #14ffec 100%)',
          },
          transition: 'background 0.3s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
        },
      },
    },
  },
});

export default theme;
