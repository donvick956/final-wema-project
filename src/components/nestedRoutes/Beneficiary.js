import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import  { makeStyles } from '@mui/styles';

const styles = makeStyles(theme => (
    {
        selectRoot: {
            backgroundColor:'white',
        }  
    }
));
export const Beneficiary = () => {
    const [bank,setBank] = useState('');
    const classes = styles();
    const options = [
    'Access Bank',
    'Access (Diamond) Bank',
    'Ecobank',
    'FCMB',
    'Fidelity Bank', 
    'First Bank Of Nigeria','GTBank','Globus Bank',
    'Heritage Bank',
    'JAIZ Bank',
    'Keystone Bank',
    'Lotus Bank',
    'Polaris Bank',
    'Providus Bank',
    'StanbicIBTC Bank',
    'Sterling Bank',
    'UBA',
    'Union Bank',
    'Unity Bank',
    'Wema Bank',
    'Zenith Bank'
    ];
    const handleSelect = (e) => {
        setBank(e.target.value);
    }
    return (<div>
        <Container>
        <Typography variant="body1" color ='primary' style =  {{marginLeft: 20, marginTop:50, fontSize:20}}> Save Beneficiary</Typography>
        </Container>
        <Container style =  {{marginTop:50, fontSize:20}} >
            <Grid container direction = 'row' spacing={0}>
                <Grid  item md = {6} xs = {12}>
                    <Grid container direction='column' spacing = {3}>
                        <Grid item>
                            <Typography variant="body1" style =  {{marginLeft: 20, fontSize:15}}> Beneficiary List</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" style =  {{marginLeft: 20, fontSize:13}}>No item yet</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md ={6} xs ={12} >
                <Grid container direction='column' spacing = {3}>
                    <Grid item>
                            <Typography variant="body1" style =  {{marginLeft: 20, fontSize:15}}> Add Beneficiary</Typography>
                        </Grid>
                        <Grid item>
                            <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 20, width:300}} />
                        </Grid>
                        <Grid item>
                            <FormControl style =  {{marginLeft: 20, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>select bank</InputLabel>
                                    <Select
                                    classes ={{ root: classes.selectRoot }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={bank}
                                    label="select Bank"
                                    onChange = {handleSelect}
                                    >
                                    {options.map((val,key) => (
                                    <MenuItem key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' style =  {{marginLeft: 20, width:300}}>Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>);
};