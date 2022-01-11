import Container from '@mui/material/Container';
import {Typography } from '@mui/material';
import { Button } from '@mui/material';
import {useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
export const Result = () => {
    const {placeholder} = useParams();
    const navigate = useNavigate();
    console.log(placeholder);
    let success = placeholder.split(' ');
    console.log(success[2]);
    const handleClick  = () => {
        navigate(-1);
    }
    const user = useSelector(state => state.reducer);
    useEffect(() => {
        if( window.location.pathname ==='/welcome/multiple' && user.length  === 0 )    {
            return navigate('/');
        }
        
    }, []);
    return <>
            <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>Transfer Details</Typography>
            </Container>
            {placeholder && success.includes('successfully') && <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>Dear Customer your transaction was processed {success[2]}</Typography>
                    <Button variant = 'outlined' color = 'primary' component = {Link} to = '/welcome' style =  {{marginLeft: 90, marginTop:30, textTransform:'none'}}> Go back</Button>
            </Container>}
            { placeholder && !success.includes('successfully') && <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>Dear Customer your transaction was unsuccessful.</Typography>
                    <Button variant = 'outlined' color = 'primary' onClick  = {handleClick} style =  {{marginLeft: 90, marginTop:30}}> Go back</Button>
            </Container>}
    </>
}