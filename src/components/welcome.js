import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import App from '../assets/official-logo.png';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useScrollTrigger } from "@mui/material";


import { logOutAction } from "../redux/action/action";

function ElevationScroll(props) {
    const { children} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const Welcome = () => {
    const user = useSelector(state => state.reducer);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [openDrawer, setOpenDrawer] = useState(false);
    const iOS =typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    // const drawer = (<>
                    
    //                 </>)

    useEffect(() => {
        if( window.location.pathname ==='/welcome' && user.length < 1 )    {
            console.log('second');
            return navigate('/');
        }
    }, [location.pathname, navigate, user.length]);

    const handleLogOut = () => {
        dispatch(logOutAction({email:'', password:''}));
        return navigate('/')
    }
    return (<div>
        {/* app bar */}
        {/* outlet */}
            <Box sx={{ flexGrow: 1 }}>
                <ElevationScroll>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button disableRipple><img src={App} alt="app logo"  style={{width:'3rem', height:'3rem', padding:'0px'}} /></Button>
                    <div style = {{marginLeft:'auto', display: 'flex', justifyContent:"space-evenly", alignItems:'center'}}>
                        { user.length >= 1 && <Typography variant="h6" component="div" sx= {{marginRight:5}}>
                            {user[0].firstName} 
                        </Typography>}
                        <Button color="inherit" style={{marginLeft:'auto',fontSize: 15}} onClick={handleLogOut}>Log Out</Button>
                    </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </Box>
        <Outlet />
    </div>);
}
export default Welcome;