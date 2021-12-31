import { createTheme } from '@mui/material/styles';
const wine = '#AB051D'
const theme = createTheme({
    palette: {
      primary: {
        main: wine,
      },
      secondary: {
          main : '#fff'
      }
    },
    
    typography: {
        h4: {
            margin:'0px'
        },

        span: {
            margin: '0px'
        },
        button: {
            textTransform: "none",
            color:wine
          }
    },
    MuiInput:  {
        MuiOutlinedInput:{
             border:'none',
            //  "&:hover":{
            //      border:'none'
            //  }
        }
    }
  });
export default theme;