import "./Error.css";
import ErrorPic from '../assets/ErrorPic.png';
import Button from '@mui/material/Button';
import { history } from "../History";


const Error = () => {
    return (<div style = {{display:'flex', justifyContent:'center', minHeight:'100vh'}}>
                <div spacing = {1}>
                    <>
                        <img src={ErrorPic} alt="error"  width='100%' height = '500px'/>
                    </>
                    <div style={{display:'flex', justifyContent: 'center'}} >
                        <Button  color ='primary' variant ="contained" style = {{textTransform:'none', textDecoration:'none'}} disableRipple onClick={history.back}>Go Home</Button>
                    </div>
                </div>
            </div>);
}
export default Error;