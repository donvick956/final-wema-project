import { Typography } from "@mui/material";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";


import atm from '../../assets/atm.svg';
import money from '../../assets/money.svg';
import multiple from '../../assets/Multiple.svg';
import mail from '../../assets/XMLID_1_.svg';
import tangle from '../../assets/Vector-1.svg';

const Dashboard = () => {
    const [time,setTime] = useState('');
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const user = useSelector(state => state.reducer);

    useEffect(() => {
        const greeting = () => {
            console.log(user);
            if( window.location.pathname ==='/welcome' && user.length  === 0 )    {
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
        greeting();
    }, []);
    return ( <>
        <Container>
            {user.length && <Typography variant="body1" color ='primary' style =  {{marginLeft: 20, marginTop:50, fontSize:20}}>Good {time},{user[0].firstName}</Typography>}
        </Container>
        <Container>
          <Grid container direction='row' spacing = {2} style={{marginLeft:20, marginRight:20,marginTop:20}}>
             <Grid item md ={6} xs = {12} style={{marginTop:20, padding:0,}}>
                 <div style = {{backgroundColor:'#780083', backgroundImage:`url(${atm})`, width:'50%', height:'200px', borderRadius:5}}>
                    <Grid container direction='column' spacing ={3} justifyContent ='space-between'>
                        <Grid item> 
                            <div style={{display:'block', marginLeft:10}}>
                                <div>
                                <Typography variant = 'p' style ={{color:'white'}}>Tier 3 Saving account</Typography>
                                </div>
                                <div>
                               { user.length && <Typography variant = 'span' style ={{color:'white', marginTop:10}}>N {user[0].accountBalance}</Typography>}
                                </div>
                            </div>
                        </Grid>
                        <Grid item alignItems='flex-end'>
                            { user.length && <Typography variant = 'span' style ={{color:'white', marginTop:10, marginLeft:10}}>Account Number: {user[0].accountNumber}</Typography>}
                        </Grid>
                    </Grid>
                 </div>
                 </Grid> 
             <Grid item md ={6} xs = {12}>
                 <Grid item md = {12} xs = {12}>What would you like to do today?</Grid>
                 <Grid container style={{marginTop:10}}>
                    <Grid item md = {6} xs = {12}>
                        <div style = {{display:'flex',justifyContent:'sapce-between', marginTop:10}}>
                            <img src={multiple} alt="multiple icon" style = {{ width:30, height:20, verticalAlign:'bottom'}} component = {Link} to = '/welcome/multiple' onClick={() => setValue(2)}/>
                            <Typography color="primary" style = {{marginLeft:10,textDecoration:'none'}} component = {Link} to = '/welcome/multiple' onClick={() => setValue(2)}>Multiple Transfer</Typography>
                        </div>
                    </Grid>
                    <Grid item md = {6} xs = {12}>
                        <div style = {{display:'flex',justifyContent:'sapce-between',marginTop:10}}>
                            <img src={money} alt="multiple icon" style = {{ width:30, height:20, verticalAlign:'bottom'}} component = {Link} to = '/welcome/beneficiary' onClick={() => setValue(1)}/>
                            <Typography color="primary" style = {{marginLeft:10,textDecoration:'none'}} component = {Link} to = '/welcome/beneficiary' onClick={() => setValue(1)}>Save Beneficiary</Typography>
                        </div>
                    </Grid>
                 </Grid>
             </Grid> 
            </Grid>  
        </Container>
        <Container>    
            <Typography variant="h6" color ='primary' style =  {{marginLeft: 20, marginTop:50, fontSize:20}}>Talk to us</Typography>
            <Typography variant="h6"  style =  {{marginLeft: 20, fontSize:18}}>We are happy to assist</Typography>
        </Container>

        <Container>
            <div style={{display:'flex',marginLeft: 20, marginTop: 10}}>
                <div>
                <img src={mail} alt="mail" style={{width:30,height:30, verticalAlign:'bottom'}} />
                <span style = {{marginLeft:5}}>help @xmt.ng</span>
                </div>
                <div style={{marginLeft:30}}>
                <img src={tangle} alt="mail" style={{width:30,height:30, verticalAlign:'bottom'}} />
                <span style = {{marginLeft:5}}>0700000001</span>
                </div>
            </div>
        </Container></>);
}
export default Dashboard;