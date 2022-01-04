import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import Error from './components/ErrorPage';
import Welcome from './components/welcome';
import Dashboard from  './components/nestedRoutes/Dashboard';


function App() { 
  return (
    <Routes>
      <Route path = '/'  element = {<Home/>} />
      <Route exact path = '/welcome'  element = {<Welcome/>} >
        <Route  path='' element={<Dashboard />}  />
      </Route>
      <Route path = '*'  element = {<Error/>} />
    </Routes>
  );
}

export default App;
