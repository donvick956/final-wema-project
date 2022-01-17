import Container from '@mui/material/Container';
import { useState } from 'react';
import {Typography } from '@mui/material';
import { Button } from '@mui/material';
import {useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import background from '../../assets/Jemeelah2-1.svg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const Result = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
            <div
                style = {{backgroundImage:`url(${background})`,
                height:'100vh',
                width:'100%',
                overflowX:'hidden',
                backgroundPosition:'center',
                backgroundSize:'cover',
                    }}
            >

            <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:100, fontSize:20}}>Transfer Details</Typography>
            </Container>
            {placeholder && success.includes('successfully') && <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>Dear Customer your transaction was processed {success[2]}</Typography>
                    <div  color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}><Typography component = {Link} to = '/welcome/history'>View history</Typography></div> 
                    <div  color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>
                        <Typography variant = 'h6'>To save recipients as a group click
                            <Typography variant = 'h6' color ='primary' onClick={handleOpen} style = {{cursor:'pointer'}}>
                                here
                            </Typography>
                            <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Stack spacing= {2}>
                                        <TextField id="standard-basic" label="Group Name" variant="standard" />
                                        <Button variant = 'contained'>Save</Button>
                                    </Stack>
                                </Box>
                            </Modal>
                        </Typography>
                    </div> 
                    <Button variant = 'outlined' color = 'primary' component = {Link} to = '/welcome' style =  {{marginLeft: 90, marginTop:30, textTransform:'none'}}> Go back</Button>
            </Container>}
            { placeholder && !success.includes('successfully') && <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>Dear Customer your transaction was unsuccessful.</Typography>
                    <Button variant = 'outlined' color = 'primary' onClick  = {handleClick} style =  {{marginLeft: 90, marginTop:30}}> Go back</Button>
            </Container>}
        </div>
    </>
}