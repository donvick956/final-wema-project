import { createTheme } from '@mui/material/styles';
const wine = '#AB2656'
const theme = createTheme({
    palette: {
      primary: {
        main: wine,
      },
      secondary: {
          main : '#fff'
      },
      background:{
        paper:wine
      }
    },
    zIndex:{
      appBar:2000
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
    },

  });
export default theme;