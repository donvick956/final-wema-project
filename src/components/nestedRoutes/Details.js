import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useNavigate } from 'react-router';
import background from '../../assets/Jemeelah1-1.svg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #fff',
    borderRadius:3,
    boxShadow: 24,
    p: 4,
  };



export const Details = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [error,setError] = useState(false);
    const [pin, setPin] = useState('');
    
    const [open1, setOpen1] = useState(false);
    const [groupName,setGroupName] = useState('')
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    

    const navigate = useNavigate();

    const sender = useSelector(state => state.reducer);
    console.log(sender[0]);

    const multipleTransfer = useSelector(state => state.detail);
    console.log(multipleTransfer);
    let counter = 0;
    const user = useSelector(state => state.reducer);
    useEffect(() => {
        if( window.location.pathname ==='/welcome/multiple' && user.length  === 0 )    {
            return navigate('/');
        }
        
    }, []);
    const getTotal = function () {
        for(let i  = 0;  i < multipleTransfer.length; i++) {
            counter+= multipleTransfer[i].transactionAmount;
        }
        return counter;
    }
    const handlePin = (event) => {
        setPin(event.target.value);
    }
    const handlePayment = async (event) => {
        try{
            event.preventDefault();
            if(Number(pin.length) === 4) {
                setError(false);
                console.log(pin);
                let response =await axios.post('https://xmtapi.azurewebsites.net/Transaction/make_transfer', {senderAccount:sender[0].accountNumber, 
                accountPin: pin.toString(),
                groupName:groupName.length > 0 ? groupName:'Xtransfer', 
                transfers:multipleTransfer}).then(res => res.data.message).catch(err => console.error(err,'error on post request of transfer'));
                console.log(response);
                navigate(`/welcome/result/${response}`);
            } else {
                setError(true);
            }
        }
        catch(error) {
            console.error(error);
            navigate('/welcome');
        }
    }

 return (<>
                <div style = {{backgroundImage:`url(${background})`,
                    height:'100vh',
                    width:'100%',
                    overflowX:'hidden',
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    }}>
                <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:100, fontSize:20}}>Transfer Details</Typography>
                </Container>
                <Container>
                <div  color ='primary' style =  {{marginLeft: 90, marginTop:10, fontSize:12, display:'flex'}}>
                        <Typography variant = 'h6' style ={{fontSize:15}}>To save recipients as a group click
                        </Typography>
                        <Typography variant = 'h6' color ='primary' onClick={handleOpen1} style = {{cursor:'pointer',fontSize:15, marginLeft:5}}>
                                here
                            </Typography>
                            <Modal
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Stack spacing= {2}>
                                        <TextField id="standard-basic" label="Group Name" variant="standard"value = {groupName} onChange = {e => setGroupName(e.target.value)} />
                                        <Button variant = 'contained' onClick = {handleClose1}>Save</Button>
                                    </Stack>
                                </Box>
                            </Modal>
                    </div> 
                    <TableContainer style =  {{marginLeft: 100, marginTop:20}} >
                        <Table sx={{ width: '700px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Serial Number</TableCell>
                                    <TableCell>Account Number</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Bank</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {multipleTransfer && multipleTransfer.map((val,key)  => <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={key}>
                                    <TableCell component="th" scope="row">
                                        {key +1}
                                    </TableCell>
                                    <TableCell align="left">{val.receiverAccount}</TableCell>
                                    <TableCell align="left">{val.transactionAmount}</TableCell>
                                    <TableCell align="left">{val.bank}</TableCell>
                                </TableRow>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                <Container>
                <Typography variant="body1" color ='primary' style =  {{marginLeft: 110, marginTop:50, fontSize:20}}>Total:N {getTotal()}</Typography>
                </Container>
                <Container>
                    <Grid container style =  {{marginLeft: 90, marginTop:50}} >
                        <Grid item md= {12} xs ={12} justifyContent='center' alignItems = 'center'>
                            <div style ={{marginLeft:20}}>
                                <Button variant='contained' color = 'primary' onClick={handleOpen}>Proceed</Button>
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style = {{textAlign:'center'}}>
                                    Please enter your four digit pin
                                </Typography>
                                <div style ={{display:'flex',justifyContent:'center'}}>
                                <TextField
                                    id="filled-password-input"
                                    label="Pin"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="filled"
                                    style = {{marginTop:20}}
                                    onChange = {handlePin}
                                    onBlur = {handlePin}
                                    />
                                </div>
                                <div style = {{marginTop:20, display:'flex',justifyContent:'center'}}>
                                    <Button variant = 'contained' color = 'primary' style =  {{width:220}} disableRipple  onClick = {handlePayment}>Pay</Button>
                                </div> 
                                </Box>
                            </Modal>
                        </Grid>
                    </Grid>
                </Container>
                </div>
        </>)
}; 