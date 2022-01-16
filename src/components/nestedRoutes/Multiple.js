import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useState,useEffect } from 'react';
import  { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';  
import Modal from '@mui/material/Modal';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import { createGroup } from '../../redux/action/transAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const styles = makeStyles(theme => (
    {
        selectRoot: {
            backgroundColor:'white',
        },
        groups: {
            display:'flex',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 40,
            padding: 20,
            // border: `1px solid black`,
            borderRadius:10,
            // boxShadow:`0 3px 5px rgb(0 0 0 / 0.2)`,
            cursor: 'pointer',
            color:'primary'
        }  
    }
));

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
export const Multiple = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [accountNumber,setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [amount, setAmount] = useState(0);
    const [bank,setBank] = useState([]);
    const [receiver, setReceiver] = useState([]);

    const [options,setOptions] = useState('');
    // when group arrives
    // const [group,setGroup] = useState();
    const classes = styles();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.reducer);
    useEffect(() => {
        if( window.location.pathname ==='/welcome/multiple' && user.length  === 0 )    {
            return navigate('/');
        }
        async function getBanks () {
            let response = await axios.get('https://xmtapi.azurewebsites.net/Bank/get_banks').then(res =>setBank(res.data)).catch(err => console.log('error from get bank'));
        }
        getBanks();
        
    }, []);

    // const handleGroupSelect = () => {
    //     navigate(`/welcome/bankForm/${group}`);
    // }
    // const localTransferState = useSelector(state => state.transfer);
    // console.log(localTransferState);

    const handleSelect = (e) => {
         setOptions(e.target.value);
         if(accountNumber.length === 10) {
            axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:e.target.value, accountNumber:accountNumber}).then(response => (setAccountName(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
            }
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // dispatch
    //     dispatch(createGroup({group:group,receiver:receiver}));
    //     // setReciver('');
    //     // setGroup('');
    // }
    const resetState = () => {
        setAccountNumber('');
        setAmount(0);
        setOptions('');
        setAccountName('')
    }
    const handleModal = () => {
        if(accountNumber.length === 10 && options && accountName.length>0 && Number(amount) >= 0 && receiver.length <=10 ) {
            setReceiver(prevState => [...prevState,{transactionAmount: Number(amount),
                receiverAccount:accountNumber,
               bank:options}]);
            handleClose();
            resetState();
            console.log(receiver)
        }
    }
    return (<div>
        <Container>
        <Typography variant="body1" color ='primary' style =  {{marginLeft: 20, marginTop:100, fontSize:20}}>Multiple Transfer</Typography>
        </Container>
        <Container style =  {{marginTop:50, fontSize:20}} >
            <Grid container direction = 'row' spacing={0} rowSpacing={5}>
                <Grid  item md = {6} xs = {12} container  spacing = {3}>
                        <Grid item xs ={12} md={12}>
                            <div style ={{display: 'flex', alignItems:'center'}}>                                
                                <Typography variant="body1" style =  {{marginLeft: 20, fontSize:15}}> Recipients</Typography>
                                <IconButton color = 'primary' disableRipple onClick={handleOpen}>
                                    <AddIcon  color ='primary' />
                                </IconButton>
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Stack spacing = {2}>
                                        <Typography variant ='em' >Note: <Typography variant ='em' style= {{color:'red'}}>Recipients should not be more than 10</Typography></Typography>
                                        <TextField  variant= 'standard' label = 'Account Number' value = {accountNumber}  onChange = {e => setAccountNumber(e.target.value)}/>
                                        <TextField variant= 'standard' id="standard-select-currency"  select value = {options}  onChange = {handleSelect}>
                                            {bank.map((val,key) => <MenuItem key={key} style = {{color:'white'}}  value = {val}> {val}</MenuItem>)}
                                        </TextField>
                                        <TextField  variant= 'standard' label = 'Amount' value = {amount} style = {{color:'white'}} onChange = {e => setAmount(e.target.value)} onBlur = {e => setAmount(e.target.value)}/>
                                        <TextField  variant= 'standard' label = 'Account Name' value = {accountName} />
                                        <Button variant = 'contained' color = 'primary' disableRipple onClick = {handleModal}>Add</Button>
                                    </Stack>
                                </Box>
                            </Modal> 
                        </Grid>
                        {!receiver.length && <Grid item xs ={12} md = {12} >
                            <Typography variant = 'h6' style =  {{marginLeft: 20, fontSize:12}} >No items yet</Typography>
                        </Grid>}
                        {receiver.map( (val,key) => <Grid item xs ={12} md = {12} key= {key} >
                                <div style = {{boxShadow:'2px 2px 2px 0.5'}}>
                                    <Typography variant = 'h6' style =  {{marginLeft: 20, fontSize:12}}>{val.receiverAccount}</Typography>
                                    <Typography variant = 'h6' style =  {{marginLeft: 20, fontSize:12}}>{val.bank} |   N{val.transactionAmount}</Typography>
                                </div>
                        </Grid>)}
                        {(receiver.length >= 2  && receiver.length <= 10) && <Grid item xs ={12} md = {12} >
                            <Button color = 'primary' variant = 'contained' disableRipple style =  {{marginLeft: 20}} endIcon={< ArrowRightAltIcon/>}>Proceed</Button>
                        </Grid>}
                        {/* {!localTransferState && <Grid item>
                             <Typography variant="h6" style =  {{marginLeft: 20, fontSize:13}}>No Group yet</Typography>
                        </Grid>}
                        {localTransferState && localTransferState.map((val,key) =><Grid item key={key} className={classes.groups} onClick = {handleGroupSelect}>
                             <Typography color = 'primary' variant="h6" style ={{marginLeft: 20, fontSize:13}}>{val.group}  ({val.receiver}/10)</Typography>
                        </Grid>)} */}
                </Grid>
                <Grid item md ={6} xs ={12} >
                <Grid container direction='column' spacing = {3}>
                    <Grid item>
                            <Typography variant="body1" style =  {{marginLeft: 20, fontSize:15}}>Groups</Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>);
};