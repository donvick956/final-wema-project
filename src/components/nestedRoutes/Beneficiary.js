import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export const Beneficiary = () => {
    return (<div>
        <Container>
        <Typography variant="body1" color ='primary' style =  {{marginLeft: 20, marginTop:50, fontSize:20}}> Save Beneficiary</Typography>
        </Container>
        <Container style =  {{marginTop:100, fontSize:20}} >
            <Grid container direction = 'row' spacing={0}>
                <Grid  item md = {6} xs = {12}>
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography variant="body1" style =  {{marginLeft: 20, fontSize:15}}> Beneficiary List</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style =  {{marginLeft: 20, fontSize:10}}>No item yet</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md ={6} xs ={12} >

                </Grid>
            </Grid>
        </Container>
    </div>);
};