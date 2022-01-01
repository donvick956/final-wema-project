import "./Error.css";
import { NavLink } from 'react-router-dom';
import ErrorPic from '../assets/ErrorPic.png';
import Button from '@mui/material/Button'; 


const Error = () => {
    return (<div style = {{display:'flex', justifyContent:'center', minHeight:'100vh'}}>
                <div spacing = {1}>
                    <>
                        <img src={ErrorPic} alt="error"  width='100%' height = '500px'/>
                    </>
                    <div style={{display:'flex', justifyContent: 'center'}} >
                        <Button  color ='primary' component = {NavLink} to = '/' variant ="contained" style = {{textTransform:'none', textDecoration:'none'}} disableRipple>Go Home</Button>
                    </div>
                </div>
            </div>);
}
export default Error;