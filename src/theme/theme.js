// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',   // Custom primary color
    },
    secondary: {
      main: '#ff4081',   // Custom secondary color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
  },
});

export default theme;