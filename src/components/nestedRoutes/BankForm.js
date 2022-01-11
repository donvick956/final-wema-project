import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState ,useEffect} from "react";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import  { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import { useRef } from "react";
import axios from "axios";
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useDispatch } from "react-redux";
import { detailAction } from "../../redux/action/action";
import { useNavigate } from "react-router";

import Error from "../ErrorPage";
import { useInputs } from "./Reusable";

const styles = makeStyles(theme => (
    {
        selectRoot: {
            // backgroundColor:'white',
        }
    }
));

const BankForm = () => {
    const {placeholder} = useParams();
    const [groups,setGroup] = useState([]);
    const [totalForm, setTotalForm] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // options
    const [options1,setOptions1] = useState([]);
    const [options2,setOptions2] = useState([]);
    const [options3,setOptions3] = useState([]);
    const [options4,setOptions4] = useState([]);
    const [options5,setOptions5] = useState([]);
    const [options6,setOptions6] = useState([]);
    const [options7,setOptions7] = useState([]);
    const [options8,setOptions8] = useState([]);
    const [options9,setOptions9] = useState([]);
    const [options10,setOptions10] = useState([]);

    const groupDetails = useSelector(state => state.transfer);
    // selected bank
    const [selected1,setSelected1] = useState('');
    const [selected2,setSelected2] = useState('');
    const [selected3,setSelected3] = useState('');
    const [selected4,setSelected4] = useState('');
    const [selected5,setSelected5] = useState('');
    const [selected6,setSelected6] = useState('');
    const [selected7,setSelected7] = useState('');
    const [selected8,setSelected8] = useState('');
    const [selected9,setSelected9] = useState('');
    const [selected10,setSelected10] = useState('');

    // show form state
    const [showForm1, setShowForm1] = useState(true);
    const [showForm2, setShowForm2] = useState(true);
    const [showForm3, setShowForm3] = useState(true);
    const [showForm4, setShowForm4] = useState(true);
    const [showForm5, setShowForm5] = useState(true);
    const [showForm6, setShowForm6] = useState(true);
    const [showForm7, setShowForm7] = useState(true);
    const [showForm8, setShowForm8] = useState(true);
    const [showForm9, setShowForm9] = useState(true);
    const [showForm10, setShowForm10] = useState(true);
    
    const colRef1 = useRef(null);
    const colRef2 = useRef(null);
    const colRef3 = useRef(null);
    const colRef4 = useRef(null);
    const colRef5 = useRef(null);
    const colRef6 = useRef(null);
    const colRef7 = useRef(null);
    const colRef8 = useRef(null);
    const colRef9 = useRef(null);
    const colRef10 = useRef(null);

    const  [accountName1,accountName2,accountName3,accountName4,accountName5,accountName6,accountName7,accountName8,accountName9,accountName10,
        setAccountName1,setAccountName2,setAccountName3,setAccountName4,setAccountName5,setAccountName6,setAccountName7,setAccountName8,setAccountName9,setAccountName10,
        accountNumber1,accountNumber2,accountNumber3,accountNumber4,accountNumber5,accountNumber6,accountNumber7,accountNumber8,accountNumber9,accountNumber10,
        setAccountNumber1,setAccountNumber2,setAccountNumber3,setAccountNumber4,setAccountNumber5,setAccountNumber6,setAccountNumber7,setAccountNumber8,setAccountNumber9,setAccountNumber10,
        amount1,amount2,amount3,amount4,amount5,amount6,amount7,amount8,amount9,amount10,
        setAmount1,setAmount2,setAmount3,setAmount4,setAmount5,setAmount6,setAmount7,setAmount8,setAmount9,setAmount10
] = useInputs();


    // console.log(groupDetails);
    useEffect(() => {
        function destGroup () {
            if(!placeholder || !groupDetails) {
                return <Error/>
            }else{
                 setGroup(groupDetails.filter(val => val.group === placeholder));
            }
        }
        async function bankName () {
            return await axios.get('https://xmtapi.azurewebsites.net/Bank/get_banks').then(res =>{
            setOptions1(res.data);
            setOptions2(res.data);
            setOptions3(res.data);
            setOptions4(res.data);
            setOptions5(res.data);
            setOptions6(res.data);
            setOptions7(res.data);
            setOptions8(res.data);
            setOptions9(res.data);
            setOptions10(res.data);})
        .catch(err => console.error(err));
        }
        destGroup();
        bankName();
        displayForms()
        // colRef1.current.id >= 2 ? setShowForm1(true) :setShowForm1(false);
        // console.log(colRef1.current.id,'second');
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        let form = ([
            {transactionAmount: Number(amount1),
             receiverAccount:accountNumber1,
            bank:selected1},
            {transactionAmount: Number(amount2),
             receiverAccount:accountNumber2,
            bank:selected2},
            {transactionAmount: Number(amount3),
             receiverAccount:accountNumber3,
            bank:selected3},
            {transactionAmount: Number(amount4),
             receiverAccount:accountNumber4,
            bank:selected4},
            {transactionAmount: Number(amount5),
             receiverAccount:accountNumber5,
            bank:selected5},
            {transactionAmount: Number(amount6),
             receiverAccount:accountNumber6,
            bank:selected6},
            {transactionAmount: Number(amount7),
             receiverAccount:accountNumber7,
            bank:selected7},
            {transactionAmount: Number(amount8),
             receiverAccount:accountNumber8,
            bank:selected8},
            {transactionAmount: Number(amount9),
             receiverAccount:accountNumber9,
            bank:selected9},
            {transactionAmount: Number(amount10),
             receiverAccount:accountNumber10,
            bank:selected10}
        ]);
        setTotalForm(form.filter(val => val.receiverAccount !== ''));
        console.log(totalForm);
        // dispatch action
        dispatch(detailAction(form.filter(val => val.receiverAccount !== '')));
        navigate('/welcome/details');
    }
    const displayForms = () => {
                colRef1.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver? setShowForm1(true) :setShowForm1(false);
                colRef2.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver ? setShowForm2(true) :setShowForm2(false);
                colRef3.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver ? setShowForm3(true) :setShowForm3(false);
                colRef4.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver ? setShowForm4(true) :setShowForm4(false);
                colRef5.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver ? setShowForm5(true) :setShowForm5(false);
                colRef6.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver ? setShowForm6(true) :setShowForm6(false);
                colRef7.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver ? setShowForm7(true) :setShowForm7(false);
                colRef8.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver ? setShowForm8(true) :setShowForm8(false);
                colRef9.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver ? setShowForm9(true) :setShowForm9(false);
                colRef10.current.id <= groupDetails.filter(val => val.group === placeholder)[0].receiver ? setShowForm10(true) :setShowForm10(false);
    }
    const getAccountNumber10 =  (event) => {
        console.log(event.target.value);
        setSelected10(prevState => event.target.value);
        console.log(selected1);
        // console.log(setSelected1(event.target.value));
        if(accountNumber10.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber10}).then(response => (setAccountName10(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        console.log(selected1);
    }
    const getAccountNumber9 =  (event) => {
        console.log(event.target.value);
        setSelected9(prevState => event.target.value);
        console.log(selected1);
        // console.log(setSelected1(event.target.value));
        if(accountNumber9.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber9}).then(response => (setAccountName9(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        console.log(selected1);
    }
    const getAccountNumber8 =  (event) => {
        console.log(event.target.value);
        setSelected8(prevState => event.target.value);
        console.log(selected1);
        // console.log(setSelected1(event.target.value));
        if(accountNumber8.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber8}).then(response => (setAccountName8(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        console.log(selected1);
    }
    const getAccountNumber1 =  (event) => {
        console.log(event.target.value);
        setSelected1(prevState => event.target.value);
        console.log(selected1);
        // console.log(setSelected1(event.target.value));
        if(accountNumber1.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber1}).then(response => (setAccountName1(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        console.log(selected1);
    }
    const getAccountNumber2 =  (event) => {
        console.log(event.target.value);
        setSelected2(prevState => event.target.value);
        console.log(selected1);
        if(accountNumber2.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber2}).then(response => (setAccountName2(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        // console.log(selected1);
    }
    const getAccountNumber3 =  (event) => {
        console.log(event.target.value);
        setSelected3(prevState => event.target.value);
        console.log(selected1);
        // console.log(setSelected1(event.target.value));
        if(accountNumber3.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber3}).then(response => (setAccountName3(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        console.log(selected1);
    }
    const getAccountNumber4 =  (event) => {
        console.log(event.target.value);
        setSelected4(prevState => event.target.value);
        console.log(selected4);
        // console.log(setSelected1(event.target.value));
        if(accountNumber4.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber4}).then(response => (setAccountName4(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        console.log(selected1);
    }
    const getAccountNumber5 =  (event) => {
        console.log(event.target.value);
        setSelected5(prevState => event.target.value);
        console.log(selected1);
        // console.log(setSelected1(event.target.value));
        if(accountNumber5.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber5}).then(response => (setAccountName5(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        console.log(selected1);
    }
    const getAccountNumber6 =  (event) => {
        console.log(event.target.value);
        setSelected6(prevState => event.target.value);
        console.log(selected1);
        // console.log(setSelected1(event.target.value));
        if(accountNumber6.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber6}).then(response => (setAccountName6(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        console.log(selected1);
    }
    const getAccountNumber7 =  (event) => {
        console.log(event.target.value);
        setSelected7(prevState => event.target.value);
        console.log(selected1);
        // console.log(setSelected1(event.target.value));
        if(accountNumber7.length === 10) {
        axios.post('https://xmtapi.azurewebsites.net/Transaction/find_account',{bank:event.target.value, accountNumber:accountNumber7}).then(response => (setAccountName7(response.data.customerName))).catch(err => console.error(err,'i caught the error'));
        }
        console.log(selected1);
    }
    const classes = styles();

    return (<div>
                <Container>
                    <Typography variant="body1" color ='primary' style =  {{marginLeft: 90, marginTop:50, fontSize:20}}>Multiple Transfer</Typography>
                </Container>
                <Container>
                    <Typography variant="body1" style =  {{marginLeft: 90,fontSize:20, marginTop:30}}>{placeholder}  ({(groupDetails.filter(val => val.group === placeholder))[0].receiver}/10)</Typography>
                </Container>
                <Container>
                    <Grid container spacing = {0} rowSpacing={4} columnSpacing={6} direction="row" style ={{marginTop:20, fontSize:20, display:'flex', justifyContent:'center'}}>
                         <Grid item md={6} xs = {12}>
                             {/* first form */}
                            {showForm1 && <div id = {1} ref = {colRef1}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber1(e.target.value)} onBlur={(e) => setAccountNumber1(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label1"
                                    id="demo-simple-select1"
                                    value={selected1}
                                    label="Recipient No"
                                    onChange = {getAccountNumber1}
                                    elevation = {0}
                                    >
                                    {options1.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" variant="outlined" value = {amount1} style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}}  onChange ={(e) => setAmount1(e.target.value)} onBlur ={(e) => setAmount1(e.target.value)}/>
                            <TextField id="outlined-basic" label="Account Name" value = {accountName1} variant="outlined"  style = {{marginLeft: 90, width:300,marginBottom:10}} />
                            </div>}

                        </Grid>
                         <Grid item md={6} xs = {12}>
                             {/* second form */}
                            {showForm2 && <div id = {2} ref = {colRef2}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber2(e.target.value)} onBlur={(e) => setAccountNumber2(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label2"
                                    id="demo-simple-select2"
                                    value={selected2}
                                    label="Recipient No"
                                    onChange = {getAccountNumber2}
                                    elevation = {0}
                                    >
                                    {options2.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" value = {amount2} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}} onChange={(e) => setAmount2(e.target.value)} onBlur={(e) => setAmount2(e.target.value)}/>
                            <TextField id="outlined-basic" label="Account Name" value = {accountName2}  variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} />
                            </div>}

                        </Grid>
                         <Grid item md={6} xs = {12}>
                             {/* third form */}
                            {showForm3 && <div id = {3} ref = {colRef3}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber3(e.target.value)} onBlur={(e) => setAccountNumber3(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label3"
                                    id="demo-simple-select3"
                                    value={selected3}
                                    label="Recipient No"
                                    onChange = {getAccountNumber3}
                                    elevation = {0}
                                    >
                                    {options3.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" value = {amount3} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}} onChange={(e) => setAmount3(e.target.value)} onBlur={(e) => setAmount3(e.target.value)}  />
                            <TextField id="outlined-basic" label="Account Name" value = {accountName3}  variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} />
                            </div>}

                        </Grid>
                         <Grid item md={6} xs = {12}>
                             {/* fourth form */}
                            {showForm4 && <div id = {4} ref = {colRef4}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber4(e.target.value)} onBlur={(e) => setAccountNumber4(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label4"
                                    id="demo-simple-select4"
                                    value={selected4}
                                    label="Recipient No"
                                    onChange = {getAccountNumber4}
                                    elevation = {0}
                                    >
                                    {options4.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" value = {amount4} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}} onChange={(e) => setAmount4(e.target.value)} onBlur={(e) => setAmount4(e.target.value)} />
                            <TextField id="outlined-basic" label="Account Name"  value = {accountName4} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} />
                            </div>}

                        </Grid>
                         <Grid item md={6} xs = {12}>
                             {/* fifth form */}
                            {showForm5 && <div id = {5} ref = {colRef5}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber5(e.target.value)} onBlur={(e) => setAccountNumber5(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label5"
                                    id="demo-simple-select5"
                                    value={selected5}
                                    label="Recipient No"
                                    onChange = {getAccountNumber5}
                                    elevation = {0}
                                    >
                                    {options5.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" value = {amount5} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}} onChange={(e) => setAmount5(e.target.value)} onBlur={(e) => setAmount5(e.target.value)} />
                            <TextField id="outlined-basic" label="Account Name" value = {accountName5} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} />
                            </div>}

                        </Grid>
                         <Grid item md={6} xs = {12}>
                             {/* sixth form */}
                            {showForm6 && <div id = {6} ref = {colRef6}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber6(e.target.value)} onBlur={(e) => setAccountNumber6(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label6"
                                    id="demo-simple-select6"
                                    value={selected6}
                                    label="Recipient No"
                                    onChange = {getAccountNumber6}
                                    elevation = {0}
                                    >
                                    {options6.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" value = {amount6} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}} onChange={(e) => setAmount6(e.target.value)} onBlur={(e) => setAmount6(e.target.value)} />
                            <TextField id="outlined-basic" label="Account Name" variant="outlined" value = {accountName6} style = {{marginLeft: 90, width:300,marginBottom:10}} />
                            </div>}

                        </Grid>
                         <Grid item md={6} xs = {12}>
                             {/* seventh form */}
                            {showForm7 && <div id = {7} ref = {colRef7}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber7(e.target.value)} onBlur={(e) => setAccountNumber7(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label7"
                                    id="demo-simple-select7"
                                    value={selected7}
                                    label="Recipient No"
                                    onChange = {getAccountNumber7}
                                    elevation = {0}
                                    >
                                    {options7.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" value = {amount7} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}} onChange={(e) => setAmount7(e.target.value)} onBlur={(e) => setAmount7(e.target.value)} />
                            <TextField id="outlined-basic" label="Account Name" variant="outlined" value = {accountName7}  style = {{marginLeft: 90, width:300,marginBottom:10}} />
                            </div>}

                        </Grid>
                         <Grid item md={6} xs = {12}>
                             {/* eigth form */}
                            {showForm8 && <div id = {8} ref = {colRef8}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber8(e.target.value)} onBlur={(e) => setAccountNumber8(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label8"
                                    id="demo-simple-select8"
                                    value={selected8}
                                    label="Recipient No"
                                    onChange = {getAccountNumber8}
                                    elevation = {0}
                                    >
                                    {options8.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" value = {amount8} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}} onChange={(e) => setAmount8(e.target.value)} onBlur={(e) => setAmount8(e.target.value)}/>
                            <TextField id="outlined-basic" label="Account Name" value = {accountName8} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} />
                            </div>}

                        </Grid>
                         <Grid item md={6} xs = {12}>
                             {/* ninth form */}
                            {showForm9 && <div id = {9} ref = {colRef9}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber9(e.target.value)} onBlur={(e) => setAccountNumber9(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label9"
                                    id="demo-simple-select9"
                                    value={selected9}
                                    label="Recipient No"
                                    onChange = {getAccountNumber9}
                                    elevation = {0}
                                    >
                                    {options9.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" value = {amount9} variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}} onChange={(e) => setAmount9(e.target.value)} onBlur={(e) => setAmount9(e.target.value)} />
                            <TextField id="outlined-basic" label="Account Name" value = {accountName9} variant="outlined" style = {{marginLeft: 90, width:300}} />
                            </div>}

                        </Grid>
                         <Grid item md={6} xs = {12}>
                             {/* tenth form */}
                            {showForm10 && <div id = {10} ref = {colRef10}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10}} onChange={(e) => setAccountNumber10(e.target.value)} onBlur={(e) => setAccountNumber10(e.target.value)}/>
                                <FormControl style =  {{marginLeft: 90, width:300}}>
                                <InputLabel id="demo-simple-select-label" style = {{fontSize:15}}>Bank Name</InputLabel>
                                    <Select
                                    classes ={{ select: classes.selectRoot }}
                                    labelId="demo-simple-select-label10"
                                    id="demo-simple-select10"
                                    value={selected10}
                                    label="Recipient No"
                                    onChange = {getAccountNumber10}
                                    elevation = {0}
                                    >
                                    {options10.map((val,key) => (
                                    <MenuItem elevation = {0} key = {key} value={val} style = {{color:'white'}}>{val}</MenuItem>
                                    ))}
                                    </Select>
                            </FormControl>
                            <TextField id="outlined-basic" label="Amount" variant="outlined" style = {{marginLeft: 90, width:300,marginBottom:10,marginTop:10}} onChange={(e) => setAmount10(e.target.value)} onBlur={(e) => setAmount10(e.target.value)} />
                            <TextField id="outlined-basic" label="Account Name" value = {accountName10} variant="outlined" style = {{marginLeft: 90, width:300}} />
                            </div>}
                        </Grid>
                        <Grid item  xs ={12} md ={12} justifyContent='center' value = {amount10} alignItems='center' style = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Button variant="contained" color = 'primary' type = 'submit' style = {{marginBottom:20}} onClick = {handleSubmit} disableRipple>Proceed</Button>
                        </Grid>
                    </Grid>
                </Container>

    </div>);
}
export default BankForm;
