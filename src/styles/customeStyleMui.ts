import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {},
  components: {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
        textTransform: 'none',
      },
      containedPrimary: {
        '&.Mui-disabled': {
          backgroundColor: '#9FA4FE',
          color: '#ffff',
        },
        '&:hover': {
          backgroundColor: '#3236FD',
        },
      }
    },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'rgba(71, 75, 255, 0.075) 0px 2px 3px',
        },
      },
    },
  },
});


export default theme;
