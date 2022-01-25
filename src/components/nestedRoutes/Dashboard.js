import { Typography } from "@mui/material";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import axios from "axios";
import background from '../../assets/Jemeelah-3.svg';
import Tilt from 'react-vanilla-tilt'

// import ParticleBackground from "../UI/Particle";


import atm from '../../assets/atm.svg';
import money from '../../assets/money.svg';
import multiple from '../../assets/Multiple.svg';
import mail from '../../assets/XMLID_1_.svg';
import tangle from '../../assets/Vector-1.svg';
// import CircularIndeterminate from "../UI/Spinner";
// import ParticleBackground from "./Particle";


const Dashboard = (props) => {
    const [time,setTime] = useState('');
    const navigate = useNavigate();
    const [newUser,setNewUser] = useState('');
    // const [displayUser,setDisplayUser] = useState([]);
    const user = useSelector(state => state.reducer);


    useEffect(() => {
        const greeting = () => {
            // console.log(user);
            if( window.location.pathname ==='/welcome/dashboard' && user.length  === 0 )    {
                return navigate('/');
            }
            // get time
            let time = new Date().getHours();
            // if t < 12AM (morning)
            if(time < 12)   {
                setTime('morning');
            }else if(time >= 12 && time < 18) {
            setTime('afternoon');
            }else if (time >=18 && time <= 23) {
             setTime('evening');
            }else {
                setTime('');
            }
        }
        const getUsers = async () => {
            // setNewUser(res.data.value)
            let response = await axios.get(`https://xmtapi.azurewebsites.net/Customers/get_customer_by_account_number/${user[0].accountNumber}`).then(res => setNewUser(res.data));
            // console.log(newUser,'NEW USER'); 
       }
    //    const getFreshUpdate = () => {
    //     setDisplayUser(newUser);
    //    }
        greeting();
        getUsers();
        // getFreshUpdate();
    }, [navigate, user,newUser]);

    // if(Object.keys(newUser)) {
    //     return (<div style ={{position:'absolute', top:'50%', left:'50%'}}>
    //     <CircularIndeterminate/>
    // </div>);
    // }

    return ( <>
            {/* <ParticleBackground /> */}
    <div style = {{backgroundImage:`url(${background})`,
    height:'100vh',
    width:'100%',
    overflowX:'hidden',
    backgroundPosition:'center',
    backgroundSize:'cover',
    // marginBottom:200
    }}>
        <Container>
            {user.length && <Typography variant="body1" color ='primary' style =  {{marginLeft: 40, fontSize:20, marginTop:70}}>Good {time}, {user[0].firstName}</Typography>}
        </Container>
        <Container>
          <Grid container direction='row' spacing = {0} style={{marginLeft:20, marginRight:20,marginTop:20}}>
             <Grid item md ={6} xs = {12} style={{marginTop:20, padding:0}}>
                 
                 <div style = {{ backgroundImage:`url(${atm})`,
                //   width:'50%',
                  height:'250px', 
                  borderRadius:20,
                  backgroundRepeat:'no-repeat',
                //    backgroundPosition:'center',
                //    backgroundSize:'cover'
                  }}>
                    <Grid  item container direction='column' spacing ={3} justifyContent ='space-between'>
                        <Grid item> 
                            <div style={{display:'block', marginLeft:10}}>
                                <div>
                                <Typography variant = 'p' style ={{color:'white', marginLeft:20, fontSize:10}}>Tier 3 Saving account</Typography>
                                </div>
                                <div>
                               { newUser && <Typography variant = 'span' style ={{color:'white', marginTop:10, marginLeft:20, fontSize:20}}>N {newUser.accountBalance}</Typography>}
                                </div>
                            </div>
                        </Grid>
                        <Grid item alignItems='flex-end'>
                            { user.length && <Typography variant = 'span' style ={{color:'white', marginTop:10, marginLeft:30, fontSize:15}}>Account No: {user[0].accountNumber}</Typography>}
                        </Grid>
                    </Grid>
                 </div>
                 </Grid>
             <Grid item md ={6} xs = {12}>
                 <Grid item md = {12} xs = {12} style ={{marginLeft:20}}>What would you like to do today?</Grid>
                 <Grid container style={{marginTop:10}}>
                    <Grid item md = {6} xs = {12}>
                        <div style = {{display:'flex',justifyContent:'sapce-between', marginTop:10,marginLeft:10}}>
                            <img src={multiple} alt="multiple icon" style = {{ width:30, height:20, verticalAlign:'bottom'}} component = {Link} to = '/welcome/multiple' onClick={() => props.setValue(2)}/>
                            <Typography color="primary" style = {{marginLeft:10,textDecoration:'none',zIndex:1000}} component = {Link} to = '/welcome/multiple' onClick={() => props.setValue(2)}>Multiple Transfer</Typography>
                        </div>
                    </Grid>
                    <Grid item md = {6} xs = {12}>
                        <div style = {{display:'flex',justifyContent:'sapce-between',marginTop:10, marginLeft:10}}>
                            <img src={money} alt="multiple icon" style = {{ width:30, height:20, verticalAlign:'bottom'}} component = {Link} to = '/welcome/beneficiary' onClick={() => props.setValue(1)}/>
                            <Typography color="primary" style = {{marginLeft:10,textDecoration:'none',zIndex:1000}} component = {Link} to = '/welcome/beneficiary' onClick={() => props.setValue(1)}>Save Beneficiary</Typography>
                        </div>
                    </Grid>
                 </Grid>
             </Grid> 
            </Grid>  
        </Container>
        <Container>    
            <Typography variant="h6" color ='primary' style =  {{marginLeft: 30, marginTop:50, fontSize:20}}>Talk to us</Typography>
            <Typography variant="h6"  style =  {{marginLeft: 30, fontSize:18}}>We are happy to assist</Typography>
        </Container>

        <Container>
            <div style={{display:'flex',marginLeft: 30, marginTop: 10}}>
                <div>
                <img src={mail} alt="mail" style={{width:30,height:30, verticalAlign:'bottom'}} />
                <span style = {{marginLeft:5}}>help @xmt.ng</span>
                </div>
                <div style={{marginLeft:30}}>
                <img src={tangle} alt="mail" style={{width:30,height:30, verticalAlign:'bottom'}} />
                <span style = {{marginLeft:5}}>0700000001</span>
                </div>
            </div>
        </Container>
        </div></>);
}
export default Dashboard;