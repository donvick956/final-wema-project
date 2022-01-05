// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import login from '../assets/banner.svg';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import menuLogo from '../assets/official-logo.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/action/action';
import axios from "axios";
// import useVH from 'react-viewport-height';

// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
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
          width: '100%',
          maxHeight:'100vh',
          height:'100vh',
          backgroundColor:'black',
          backgroundImage: `url(${login})`,
          backgroundPosition:'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover',
          [theme.breakpoints.down('md')]: {
            display:'none',
          }
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
    //   inputField: {
    //       border: `2px solid ${theme.palette.primary.main}`,
    //   },
      gridBox:  {
        //   display:'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        height:200,
        width:'100%',
        opacity: 1.5,
          [theme.breakpoints.down('md')]: {
              backgroundColor:`${theme.palette.primary.main}`,
          }
      },
      wrapper: {
          display:'grid',
          gridTemplateColumns:`auto auto`,
          gridColumnGap:'10px'
      },
    //   loginForm:{
    //     [theme.breakpoints.down('xs')]: {
    //         width:'50%',
    //       }
    //   }
  }));
const Home = (props) => {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    const [email,setEmail] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [data,setData] = useState([]);
    const [warning,setWarning] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const vh = useVH();


    useEffect(() => {
        async function fetchApi () {
             ( await axios.get('https://localhost:44322/Customers')
             .then
            (response => (JSON.stringify(response.data.value))).then(response => setData(response)).catch
            (error => console.log(error)));
        }
        fetchApi();
        console.log(data);
    }, [])

    
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

      const handleEmail = (e) => {
          setEmail(e.target.value);
      }
      const handleSubmit = (e) => {
          e.preventDefault();
        if(values.password === '' || email === ''){
            if (values.password === '' ) {
              setPasswordError(!passwordError);
            }
            if (email === '' ) {
              setEmailError(!emailError);
            }

        }else {
            setPasswordError(false);
            setEmailError(false);
        }
        if(data){ 
            let user = JSON.parse(data);
            let validData = user.filter(val => val.email === email);
            console.log(validData);
            if(validData.length > 0){
                dispatch(loginAction(...validData));
                setWarning(false);
                navigate('/welcome');
            }else{
                setWarning(true);
            }
        }
      }

    const classCust = useStyle();
    return (
        <div className={classCust.wrapper}>
            <div className={classCust.loginImg}>
                <div style = {{marginTop:'50px'}}>                        
                         <div style = {{display:'flex', justifyContent: 'center', width:'100%', height:30}}>
                             <img src={menuLogo} alt="xmt logo" style = {{width: 100, height: 100, marginTop:'90px'}} />
                         </div>
                         <article style = {{marginTop:'150px', padding: '30px'}}>
                             <div style = {{marginTop:30}}>
                                 <Typography variant='h4' color = 'secondary' style = {{fonstSize:10}}>Sign up seamlessly</Typography>
                             </div><br />
                             <div>
                                 <Typography variant='h6' color = 'secondary' style = {{fonstSize:5}}>Send money to multiple Accounts with one CLICK...no paperwork required.
                                 </Typography>
                             </div>
                             <div style = {{display:'flex', justifyContent: 'center', marginTop:'20px'}}>
                                 <Button variant="contained" color = 'secondary' background = 'primary' disableRipple>Get Started</Button>
                             </div>
                             <div style = {{display: 'flex', justifyContent: 'space-evenly', marginTop:'80px', width: '100%'}}>
                                 <img src={instagram} alt="" style={{width: '20px', height: '20px'}} />
                                 <img src={facebook} alt=""  style={{width: '20px', height: '20px'}} />
                                 <img src={twitter} alt="" style={{width: '20px', height: '20px'}} />
                             </div>
                         </article>
                     </div>
            </div>
            <div className={classCust.loginForm}>
            <div style = {{display: 'flex', justifyContent: 'center', width:'100%', marginTop:'50px', alignItems :'center'} }>
                        <div style = {{marginLeft:'0px'}}>
                            <h3 className={classCust.textCenter} >Go to XMT Website</h3>
                             <p style = {{marginLeft:'20px'}}>Welcome Back!</p>
                             {warning && <Typography variant = 'em' 
                                         style = {{color:'red', textAlign:'center'}}>Invalid Details
                                         </Typography>}
                             <div>
                                 <form  onSubmit={handleSubmit}>
                                     <div>
                                         <p>
                                             Email Address/Username
                                         </p>
                                         <TextField 
                                         id="outlined-basic" 
                                         sx = {{width: 400}} 
                                         onChange = {handleEmail} />
                                         <div>
                                         {emailError && <Typography variant = 'em' 
                                         style = {{color:'red'}}>Email/Username cannot be empty
                                         </Typography>}
                                         </div>
                                     </div>
                                     <div>
                                         <div style = {{marginTop:'20px'}} >
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
                                             enddornment={
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
                                            //  focused
                                         />
                                         <div>
                                         {passwordError && <Typography variant = 'em' 
                                         style = {{color:'red'}}>Password cannot be empty
                                         </Typography>}
                                         </div>
                                     </div>
                                     <Button variant="contained" sx = {{width:'100%', marginTop:'50px'}} type ='submit'>Login</Button>
                                 </form>
                             </div>
                         </div>
                     </div>
            </div>
        </div>
        );
}
export default Home;