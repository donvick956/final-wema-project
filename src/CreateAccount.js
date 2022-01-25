import { useState } from "react";
import { useNavigate } from "react-router";
import Box from '@mui/material/Box';
import {Typography } from '@mui/material';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import axios from 'axios';

import background from './assets/Jemeelah2-1.svg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
  };

export const CreateAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [account, setAccount] = useState('');
    const [pin, setPin] = useState('');
    const navigate = useNavigate();
    // error
    const [efirstName, setEFirstName] = useState(false);
    const [elastName, setELastName] = useState(false);
    const [eaddress, setEAddress] = useState(false);
    const [ephoneNumber, setEPhoneNumber] = useState(false);
    const [eemail, setEEmail] = useState(false);
    const [epassword, setEPassword] = useState(false);
    const [ecreatePassword, setECreatePassword] = useState(false);
    const [eaccount, setEAccount] = useState(false);
    const [epin,setEPin] = useState(false);

    const [user,setUser] = useState();

    // MODAL METHODS
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = (e) => {
        e.preventDefault();
        handleClose();
        navigate('/');
    }
    const createAccount = (e) => {
        e.preventDefault();

        if(!firstName) {
            setEFirstName(true);
        }
        if(!lastName) {
             setELastName(true);
        }
        if(!address) {
             setEAddress(true);
        }
        if(!phoneNumber) {
             setEPhoneNumber(true);
        }
        if(!email) {
             setEEmail(true);
        }
        if(!password) {
             setEPassword(true);
        }
        if(!createPassword || createPassword !== password) {
             setECreatePassword(true);
        }
        if(!account) {
             setEAccount(true);
        }
        if(!pin) {
             setEPin(true);
        }
        if(pin && email && createPassword && password && email && phoneNumber  && address && lastName && firstName) {
            let detail  = {
                firstName:firstName.toString(),
                lastName:lastName.toString(),
                address:address.toString(),
                phoneNumber:phoneNumber.toString(),
                email:email.toString(),
                password:password.toString(),
                confirmPassword:createPassword.toString(),
                accountType:account.toString(),
                transactionPin:pin.toString()
            };
                createRequest(detail);
                handleOpen();
        }

    } 
    
    async function createRequest (detail) {
        console.log(detail);
        await axios.post('https://xmtapi.azurewebsites.net/customers/register', 
                detail
            ).then
            (response => setUser(response.data)).catch
            (err => console.log(err,'i caught an error on create account'));
    }

 return (<div
    style = {{backgroundImage:`url(${background})`,
    height:'100vh',
    width:'100%',
    overflowX:'hidden',
    backgroundPosition:'center',
    backgroundSize:'cover',
        }}
        >
     <Container style ={{marginTop:10}}>
                <Typography variant="body1" color ='primary' style =  {{ fontSize:30}}>Create Account</Typography>
    </Container>
    <Container style ={{marginTop:30, marginBottom:20}}>
        <form>
            <Stack spacing ={2} style ={{width:'40%'}} >
                <TextField  variant= 'standard' label = 'First Name' value = {firstName} onChange ={(e) => setFirstName(e.target.value)} />
                {efirstName && <Typography variant= 'h6' style = {{fontSize:15, color: 'red'}}>Field cannot be empty</Typography>}

                <TextField  variant= 'standard' label = 'Last Name' value = {lastName} onChange ={(e) => setLastName(e.target.value)} />
                {elastName && <Typography variant= 'h6' style = {{fontSize:15, color: 'red'}}>Field cannot be empty</Typography>}

                <TextField  variant= 'standard' label = 'Address' value = {address} onChange ={(e) => setAddress(e.target.value)} />
                {eaddress && <Typography variant= 'h6' style = {{fontSize:15, color: 'red'}}>Field cannot be empty</Typography>}

                <TextField  variant= 'standard' label = 'Phone Number'  value = {phoneNumber} onChange ={(e) => setPhoneNumber(e.target.value)} />
                {ephoneNumber && <Typography variant= 'h6' style = {{fontSize:15, color: 'red'}}>Field cannot be empty</Typography>}

                <TextField  variant= 'standard' label = 'Email' type = 'email' value = {email}  onChange ={(e) => setEmail(e.target.value)}/>
                {eemail && <Typography variant= 'h6' style = {{fontSize:15, color: 'red'}}>Field cannot be empty</Typography>}

                <TextField  variant= 'standard' label = 'Password' id="filled-password-input3" type="password"  value = {password} onChange ={(e) => setPassword(e.target.value)} />
                {epassword && <Typography variant= 'h6' style = {{fontSize:15, color: 'red'}}>Field cannot be empty</Typography>}

                <TextField  variant= 'standard' label = 'Confirm Password' id="filled-password-input2" type="password" value = {createPassword} onChange ={(e) => setCreatePassword(e.target.value)} />
                {ecreatePassword && <Typography variant= 'h6' style = {{fontSize:15, color: 'red'}}>Passwords do not match</Typography>}

                <TextField  variant= 'standard' label = 'Account Type' type = 'text' value = {account} onChange ={(e) => setAccount(e.target.value)} />
                {eaccount && <Typography variant= 'h6' style = {{fontSize:15, color: 'red'}}>Field cannot be empty</Typography>}

                <TextField  variant= 'standard' label = 'Pin' id="filled-password-input1" type="password" value ={pin} onChange ={(e) => setPin(e.target.value)} />
                {epin && <Typography variant= 'h6' style = {{fontSize:15, color: 'red'}}>Field cannot be empty</Typography>}

                <Button variant='contained' disableRipple color = 'primary' onClick={createAccount}>Create Account</Button>
                <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Stack style = {{display:'flex', alignItems:'center'}}>
                                    { user && <Typography variant="body1" color ='primary' style =  {{ fontSize:20}}>Account Created successfully</Typography>}
                                    { !user && <Typography variant="body1" color ='primary' style =  {{ fontSize:20}}>Account Created unsuccessfully</Typography>}
                                    </Stack>
                                    <Stack style ={{marginTop:10}}>
                                        { user && <Typography>Click OK to navigate to login page</Typography>}
                                    </Stack>
                                    <Stack style ={{marginTop:20}} >
                                        { user && <Button variant = 'contained' color = 'primary' onClick = {handleClick}>OK</Button>}
                                    </Stack>
                                </Box>
                            </Modal>
            </Stack>
        </form>
    </Container>
 </div>);
}