import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import Error from './components/ErrorPage';
import Welcome from './components/welcome';
import Dashboard from  './components/nestedRoutes/Dashboard';
import { Multiple } from './components/nestedRoutes/Multiple';
import { Beneficiary } from './components/nestedRoutes/Beneficiary';
import theme from './components/UI/Theme';
import { useState } from 'react';


function App() { 
  const [value, setValue] = useState(0);
  return (
    <Routes>
      <Route path = '/'  element = {<Home/>} />
      <Route exact path = '/welcome' theme = {theme} element = {<Welcome theme = {theme} value = {value} setValue = {setValue}/>} >
        <Route  path='' element={<Dashboard  value = {value} setValue = {setValue}/>}  />
        <Route  path='beneficiary' element={<Beneficiary />}  />
        <Route  path='multiple' element={<Multiple />}  />
      </Route>
      <Route path = '*'  element = {<Error/>} />
    </Routes>
  );
}

export default App;
