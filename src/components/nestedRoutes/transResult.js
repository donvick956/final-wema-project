import Container from '@mui/material/Container';
import {Typography } from '@mui/material';
import { Button } from '@mui/material';
export const Result = () => {
    return <>
            <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>Transfer Details</Typography>
            </Container>
            <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>Dear Customer your transaction was successful.</Typography>
                    <Button variant = 'outlined' color = 'primary' style =  {{marginLeft: 90, marginTop:30}}> go back</Button>
            </Container>
            <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>Dear Customer your transaction was unsuccessful.</Typography>
                    <Button variant = 'outlined' color = 'primary' style =  {{marginLeft: 90, marginTop:30}}> go back</Button>
            </Container>
    </>
}