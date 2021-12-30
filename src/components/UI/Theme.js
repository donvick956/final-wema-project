import { NoEncryption } from '@mui/icons-material';
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
    
     MuiInput:  {
        MuiOutlinedInput:{
             border:'none',
             "&:hover":{
                 border:'none'
             }
        }
    }
  });
export default theme;