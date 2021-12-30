import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import login from '../assets/login-banner-2.jpg';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

  const useStyle = makeStyles(theme => ({
      textCenter: {
          textAlign: 'center',
          color:theme.palette.primary.light
      },
      loginImg:{
          maxWidth: '100%',
          width: '700px',
          height:'100vh',
          backgroundImage: login
      },
      borderInput: {
          borderColor: theme.palette.primary.main
      },
      flexText: {
          display: 'flex',
          justifyContent: 'space-between'
      },
      pinkColor: {
          color: '#F62658',
          marginLeft: '200px'
      },
      inputField: {
          border: `2px solid ${theme.palette.primary.main}`,
      }
  }));
const Home = (props) => {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const classCust = useStyle();
    return (<div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={3}>
                <Grid container item xs = {12} md = {6} className='loginImg'>
                    {/* <div>
                        <img src={login} alt="login-image" md= {6} className={classCust.loginImg}/>
                    </div> */}
                </Grid>
                <Grid container item xs = {12} md = {6}>
                        <div>
                        <h3 className={classCust.textCenter} >Go to XMT Website</h3>
                        <p>Welcome Back!</p>
                        <div>
                            <form >
                                <div>
                                    <p>
                                        Email Address/Username
                                    </p>
                                    <TextField id="outlined-basic" 
                                    // label="Outlined" 
                                    // variant="outlined" 
                                    sx = {{width: 400,}} focused />
                                </div>
                                <div>
                                    <div >
                                        <span>Password</span>
                                        <span className={classCust.pinkColor}>Forgot Password?</span>
                                    </div>
                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"/>
                                    <div></div>
                                    <TextField
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        className = {classCust.inputField}                                   
                                        onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        sx = {{width: 400}}
                                        focused
                                    />
                                </div>
                                <Button variant="contained" sx = {{width:'100%', marginTop:'20px'}}>Login</Button>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    </div>);
}
export default Home;