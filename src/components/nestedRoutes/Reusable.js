import { useState } from "react";
export const useInputs = () => {
 const [accountName1, setAccountName1] = useState('');
 const [accountName2, setAccountName2] = useState('');
 const [accountName3, setAccountName3] = useState('');
 const [accountName4, setAccountName4] = useState('');
 const [accountName5, setAccountName5] = useState('');
 const [accountName6, setAccountName6] = useState('');
 const [accountName7, setAccountName7] = useState('');
 const [accountName8, setAccountName8] = useState('');
 const [accountName9, setAccountName9] = useState('');
 const [accountName10, setAccountName10] = useState('');

 const [accountNumber1, setAccountNumber1] = useState('');
 const [accountNumber2, setAccountNumber2] = useState('');
 const [accountNumber3, setAccountNumber3] = useState('');
 const [accountNumber4, setAccountNumber4] = useState('');
 const [accountNumber5, setAccountNumber5] = useState('');
 const [accountNumber6, setAccountNumber6] = useState('');
 const [accountNumber7, setAccountNumber7] = useState('');
 const [accountNumber8, setAccountNumber8] = useState('');
 const [accountNumber9, setAccountNumber9] = useState('');
 const [accountNumber10, setAccountNumber10] = useState('');

 const [amount1, setAmount1] = useState(0);
 const [amount2, setAmount2] = useState(0);
 const [amount3, setAmount3] = useState(0);
 const [amount4, setAmount4] = useState(0);
 const [amount5, setAmount5] = useState(0);
 const [amount6, setAmount6] = useState(0);
 const [amount7, setAmount7] = useState(0);
 const [amount8, setAmount8] = useState(0);
 const [amount9, setAmount9] = useState(0);
 const [amount10, setAmount10] = useState(0);

 return [accountName1,accountName2,accountName3,accountName4,accountName5,accountName6,accountName7,accountName8,accountName9,accountName10,
         setAccountName1,setAccountName2,setAccountName3,setAccountName4,setAccountName5,setAccountName6,setAccountName7,setAccountName8,setAccountName9,setAccountName10,
         accountNumber1,accountNumber2,accountNumber3,accountNumber4,accountNumber5,accountNumber6,accountNumber7,accountNumber8,accountNumber9,accountNumber10,
         setAccountNumber1,setAccountNumber2,setAccountNumber3,setAccountNumber4,setAccountNumber5,setAccountNumber6,setAccountNumber7,setAccountNumber8,setAccountNumber9,setAccountNumber10,
         amount1,amount2,amount3,amount4,amount5,amount6,amount7,amount8,amount9,amount10,
         setAmount1,setAmount2,setAmount3,setAmount4,setAmount5,setAmount6,setAmount7,setAmount8,setAmount9,setAmount10
 ];

}