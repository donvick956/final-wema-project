import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Container from '@mui/material/Container';
import {Typography } from '@mui/material';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CircularIndeterminate from "../UI/Spinner";
import background from '../../assets/Jemeelah2-1.svg';
import Paginations from "../UI/Pagination";

export const History = () => {
    const [data, setData ] = useState([]);
    const user = useSelector(state => state.reducer[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

     
    const navigate = useNavigate();
    console.log(user);

    useEffect(() => {
        
    if( window.location.pathname ==='/welcome/multiple' && user.length  === 0 )    {
        return navigate('/');
    }
    async  function getData () {
        let getTransactionDetails = await axios.get(`https://xmtapi.azurewebsites.net/Transaction/transaction_receipts?accountNumber=${user.accountNumber}`).then(response => setData(response.data)).catch(err => console.log(err, 'error caught during post of account number '));
        console.log(getTransactionDetails);
    }
    getData();

    }, []);

    if (!data.length)   {
        return (<div style ={{position:'absolute', top:'50%', left:'50%'}}>
                <CircularIndeterminate/>
            </div>);
    }
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber + 1);
    return (<>
            {/* <div
                    style = {{backgroundImage:`url(${background})`,
                    height:'100vh',
                    width:'100%',
                    overflowX:'hidden',
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    }}> */}
            <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:100, fontSize:20}}>Transfer Details</Typography>
            </Container>
            <Container>
                    <TableContainer style =  {{marginLeft: 100, marginTop:50}} >
                        <Table sx={{ width: '1000px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Serial Number</TableCell>
                                    <TableCell>Account Number</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Transaction Type</TableCell>
                                    <TableCell>Ref ID</TableCell>
                                </TableRow>
                            </TableHead>
                             <TableBody>
                                 {Post(currentPosts)}
                                {/* {data.length && data.map((val,key) => 
                                <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                key = {key}>
                                    <TableCell component="th" scope="row">
                                        {key+1}
                                    </TableCell>
                                    <TableCell align="left">{val.receiverAccount}</TableCell>
                                    <TableCell align="left">{val.transactionAmount}</TableCell>
                                    <TableCell align="left">{dateTime(val.transactionDate)}</TableCell>
                                    <TableCell align="left">{(val.transactionType)}</TableCell>
                                    <TableCell align="left">{(val.transactionId)}</TableCell>
                                </TableRow>
                                )} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                <Container style = {{display:'flex', justifyContent:'center', margin:20}}>
                    <Paginations  style =  {{marginLeft: 90, marginTop:100, fontSize:20}} postsPerPage={postsPerPage} totalPosts={data.length} paginate = {paginate} />
            </Container>
            {/* </div> */}
        </>);
}

const dateTime = (params) => {
    let arr =  params.split('T');
    let arr2 = arr[1].split('.');
    let time = '';
    let conv = arr2[0].split(':')
    if(conv[0] < 12)  {
        time = 'AM';
    }else {
        time = 'PM';
    }
    return `${arr[0]}  ${arr2[0]} ${time}`;
}

function Post (posts) {
    return (posts.map((val,key) => 
        <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        key = {key}>
            <TableCell component="th" scope="row">
                {key+1}
            </TableCell>
            <TableCell align="left">{val.receiverAccount}</TableCell>
            <TableCell align="left">{val.transactionAmount}</TableCell>
            <TableCell align="left">{dateTime(val.transactionDate)}</TableCell>
            <TableCell align="left">{(val.transactionType)}</TableCell>
            <TableCell align="left">{(val.transactionId)}</TableCell>
        </TableRow>
        ) );
}