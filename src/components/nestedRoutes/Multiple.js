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
            boxShadow:`0 3px 5px rgb(0 0 0 / 0.2)`,
            cursor: 'pointer'
        }  
    }
));
export const Multiple = () => {
    const [receiver,setReciver] = useState();
    const [group,setGroup] = useState();
    const classes = styles();
    const options = [2,3,4,5,6,7,8,9,10];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGroupSelect = () => {
        navigate(`/welcome/bankForm/${group}`);
    }
    const localTransferState = useSelector(state => state.transfer);
    console.log(localTransferState);

    const handleSelect = (e) => {
        setReciver(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch
        dispatch(createGroup({group:group,receiver:receiver}));
        // setReciver('');
        // setGroup('');
    }
    const handleGroup = (e) => {
        setGroup(e.target.value);
        console.log(group);
    }
    return (<div>
        <Container>
        <Typography variant="body1" color ='primary' style =  {{marginLeft: 20, marginTop:50, fontSize:20}}>Multiple Transfer</Typography>
        </Container>
        <Container style =  {{marginTop:50, fontSize:20}} >
            <Grid container direction = 'row' spacing={0}>
                <Grid  item md = {6} xs = {12}>
                    <Grid container direction='column' spacing = {3}>
                        <Grid item>
                            <Typography variant="body1" style =  {{marginLeft: 20, fontSize:15}}> Groups</Typography>
                        </Grid>
                        {!localTransferState && <Grid item>
                             <Typography variant="h6" style =  {{marginLeft: 20, fontSize:13}}>No Group yet</Typography>
                        </Grid>}
                        {localTransferState && localTransferState.map((val,key) =><Grid item key={key} className={classes.groups} onClick = {handleGroupSelect}>
                             <Typography variant="h6" style ={{marginLeft: 20, fontSize:13}}>{val.group}  ({val.receiver}/10)</Typography>
                        </Grid>)}
                    </Grid>
                </Grid>
                <Grid item md ={6} xs ={12} >
                <Grid container direction='column' spacing = {3}>
                    <Grid item>
                            <Typography variant="body1" style =  {{marginLeft: 20, fontSize:15}}>Create Group</Typography>
                        </Grid>
                        <Grid item>
                            <TextField id="outlined-basic" label="Group Name" variant="outlined" style = {{marginLeft: 20, width:300}} onChange={handleGroup} />
                        </Grid>
                        <Grid item>
                            <FormControl style =  {{marginLeft: 20, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Recipient No</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={receiver}
                                    label="Recipient No"
                                    onChange = {handleSelect}
                                    elevation = {0}
                                    >
                                    {options.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' style =  {{marginLeft: 20, width:300}} onClick = {handleSubmit}>Save</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>);
};