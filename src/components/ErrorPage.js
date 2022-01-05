import "./Error.css";
import ErrorPic from '../assets/ErrorPic.png';
import Button from '@mui/material/Button';
import { history } from "../History";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Error = () => {
    const user = useSelector(state => state.reducer);
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(history.back);
        if(user.length > 0)    {
            return history.back;
        }else {
            return navigate('/');
        }
    }
    return (<div style = {{display:'flex', justifyContent:'center', minHeight:'100vh'}}>
                <div spacing = {1}>
                    <>
                        <img src={ErrorPic} alt="error"  width='100%' height = '500px'/>
                    </>
                    <div style={{display:'flex', justifyContent: 'center'}} >
                        <Button  color ='primary' variant ="contained" style = {{textTransform:'none', textDecoration:'none'}} disableRipple onClick={handleClick}>Go Home</Button>
                    </div>
                </div>
            </div>);
}
// history.back
export default Error;