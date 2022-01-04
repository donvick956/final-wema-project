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
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import  { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";



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

  const styles = makeStyles(theme => (
      {
          drawer : {
              "&:hover": {
                  backgroundColor: "transparent"
              }
          },
        paper: {
              color:console.log(theme),
              backgroundColor:theme.palette.background.paper,
              zIndex: 1000
          },
        drawerItem : {
              color:'white'
          },
        appBar: {
            zIndex: theme.zIndex.appBar
        }, 
        toolbarMargin: {
            marginTop: '20px'
        } 
      }
  ));

const Welcome = (props) => {
    const user = useSelector(state => state.reducer);
    const [value, setValue] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const classes = styles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const iOS =typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const drawer = (<>
                    <SwipeableDrawer disableBackdropTransition={!iOS} 
                    disableDiscovery={iOS}
                    open = {openDrawer}
                    onClose = {() => setOpenDrawer(false)}
                    onOpen = {() => setOpenDrawer(true)}
                    classes={{paper:classes}}
                     >
                         <div className ={classes.toolbarMargin} />
                        <List disablePadding>
                            <ListItem divider button>
                                <ListItemText disableTypography className={classes.drawerItem}>SERVICES</ListItemText>
                            </ListItem>
                        </List>
                        <List disablePadding>
                            <ListItem divider button
                             onClick={() => {setOpenDrawer(false); setValue(0)}}
                             component={Link}
                             to ='/welcome'
                             selected ={value === 0 && window.location.pathname ==='/welcome'}>
                                <ListItemText disableTypography className={classes.drawerItem}>Dashboard</ListItemText>
                            </ListItem>
                        </List>
                        <List disablePadding>
                            <ListItem divider button
                             onClick={() => {setOpenDrawer(false); setValue(1)}}
                             component={Link}
                             to ='/welcome/beneficiary'
                             selected ={value ===1 && window.location.pathname ==='/welcome/beneficiary'}>
                                <ListItemText disableTypography className={classes.drawerItem}>Save Beneficiary</ListItemText>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem divider button
                             onClick={() => {setOpenDrawer(false); setValue(2)}}
                             component={Link}
                             to ='/welcome/multiple'
                             selected ={value === 2 && window.location.pathname ==='/welcome/multiple'}>
                                <ListItemText disableTypography className={classes.drawerItem}>Multiple Transfer</ListItemText>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem divider button onClick={() => handleLogOut()}>
                                <ListItemText disableTypography className={classes.drawerItem}>Log Out</ListItemText>
                            </ListItem>
                        </List>
                     </SwipeableDrawer>   
                    </>)

    useEffect(() => {
        if( window.location.pathname ==='/welcome' && user.length === 0 )    {
            console.log('second');
            return navigate('/');
        }
    }, [location.pathname, navigate, user.length]);

    const handleLogOut = () => {
        dispatch(logOutAction({email:'', password:''}));
        return navigate('/');
    }
    return (<div>
        {/* app bar */}
        {/* outlet */}
            <Box sx={{ flexGrow: 1 }}>
                <ElevationScroll>
                <AppBar position="static" className= {classes.appBar} style ={{zIndex:2000}}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        disableRipple
                        className={classes.drawer}
                        onClick = {() => setOpenDrawer(!openDrawer)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button disableRipple style={{marginLeft:50}}><img src={App} alt="app logo"  style={{width:'3rem', height:'3rem', padding:'0px'}} /></Button>
                    <div style = {{marginLeft:'auto', display: 'flex', justifyContent:"space-evenly", alignItems:'center'}}>
                        { user.length >= 1 && <Typography variant="h6" component="div" sx= {{marginRight:5}}>
                            {user[0].firstName} 
                        </Typography>}
                        <Button color="inherit" style={{marginLeft:'auto',fontSize: 15}} onClick={handleLogOut}>Log Out</Button>
                    </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {drawer}
        </Box>
        <Outlet />
    </div>);
}
export default Welcome;