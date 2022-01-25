// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import login from '../assets/banner.svg';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
// import menuLogo from '../assets/official-logo.png';
// import instagram from '../assets/instagram.png';
// import twitter from '../assets/twitter.png';
// import facebook from '../assets/facebook.png'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/action/action';
import axios from "axios";
import background from '../assets/svg-background.svg'
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Bubble} from './UI/bubble';

  const useStyle = makeStyles(theme => ({
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
      whiteColor: {
          color: '#fff',
          marginLeft: '100px',
          opacity:0.7
      },
      gridBox:  {
        height:200,
        width:'100%',
        opacity: 1.5,
        //   [theme.breakpoints.down('md')]: {
        //       backgroundColor:`${theme.palette.primary.main}`,
        //   }
      },
      wrapper: {
          margin:0,
          backgroundImage:`url(${background})`,
          height:'100vh',
          overflowX:'hidden',
          backgroundPosition:'center',
        //   backgroundAttachment: 'fixed',
        //   backgroundRepeat: 'no-repeat',
        
          backgroundSize:'cover'
      },
      adornment:{
        color:'white',
        backgroundColor:'white'
    }
  }));
const Home = (props) => {
    const [values, setValues] = useState({
        password: '',
        showPassword: false
      });
    const [email,setEmail] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [data,setData] = useState([]);
    const [warning,setWarning] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {

        // fetchApi();
        // console.log(data);
    }, [])

    async function fetchApi () {
         await axios.post("https://xmtapi.azurewebsites.net/Customers/login",{email:email, password:values.password})
        .then
       (response => (JSON.stringify(response))).then(response => {
        console.log(response);   
        setData(JSON.parse(response).data);
        dispatch(loginAction(JSON.parse(response).data));
        setWarning(false);
        navigate('/welcome');
       }).catch
       (error => {console.log(error,'error message'); setWarning(true)})
   }
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
            console.log(data);
            fetchApi();
        }
      }

    const classCust = useStyle();
    return (
        <div className={classCust.wrapper}>
             <Bubble/>
            <div style = {{ width:'100%',} }>
                        <div style = {{marginLeft:'20px'}}>
                             {warning && <Typography variant = 'em' 
                                         style = {{color:'red', textAlign:'center'}}>
                                         </Typography>}
                             <Typography variant = 'h2' color= 'secondary' style= {{position:'relative', top:'190px', left:40}}>Welcome!</Typography>
                             <div style= {{position:'relative', top:'220px', left:40}}>
                                 
                                {warning && <Typography variant = 'em' 
                                         style = {{color:'red', textAlign:'center'}}>Invalid Details
                                         </Typography>}
                                 <form  onSubmit={handleSubmit}>
                                     <div style = {{marginTop:3}}>
                                         <div style={{marginBottom:20}}>
                                         <Typography variant = 'p' color = 'secondary'>
                                             Email Address/Username
                                         </Typography>
                                         </div>
                                         <TextField 
                                         id="standard-text" 
                                         variant ='standard'
                                         color = 'secondary'
                                         sx = {{width: 300, input: { color: 'white' }}} 
                                         onChange = {handleEmail}
                                         focused
                                         style = {{backgroundColor:'primary'}}
                                         
                                          />
                                         <div>
                                         {emailError && <Typography variant = 'em' 
                                         style = {{color:'red'}}>Email/Username cannot be empty
                                         </Typography>}
                                         </div>
                                     </div>
                                     <div>
                                         <div style = {{marginTop:'20px'}} >
                                             <span style ={{color:'white'}}>Password</span>
                                             <span className={classCust.whiteColor}>Forgot Password?</span>
                                         </div>
                                         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"/>
                                         <div></div>
                                         <TextField
                                             id="outlined-adornment-password"
                                             variant = 'standard'
                                             color = 'secondary'
                                             type={values.showPassword ? 'text' : 'password'}
                                             value={values.password}
                                             focused                                   
                                             onChange={handleChange('password')}
                                             endadornment={
                                             <InputAdornment position="end" color = 'secondary' sx = {{ classes : { adornedEnd : classCust.adornment } }} >
                                                 <IconButton
                                                 aria-label="toggle password visibility"
                                                 onClick={handleClickShowPassword}
                                                 onMouseDown={handleMouseDownPassword}
                                                 edge="end"
                                                 classes = {{adornedEnd : classCust.adornment}}
                                                 >
                                                 {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                 </IconButton>
                                             </InputAdornment>
                                             }
                                             sx = {{width: 300,input: { color: 'white' } }}
                                         />
                                         <div>
                                         {passwordError && <Typography variant = 'em' 
                                         style = {{color:'#F62650'}}>Password cannot be empty
                                         </Typography>}
                                         <div></div>
                                         <Typography variant = 'em' 
                                         style = {{color:'white', marginTop:'50px', position: 'relative', top:'10px '}} component = {Link} to = '/createAccount'>Create Account
                                         </Typography>
                                         </div>
                                     </div>
                                     <Button variant="contained" sx = {{width:'300px', marginTop:'50px'}} type ='submit'>Login</Button>
                                 </form>
                             </div>
                         </div>
                     </div>
                   
            </div>
        );
}
export default Home;