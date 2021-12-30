import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import Error from './components/ErrorPage';
import Welcome from './components/welcome';


function App() { 
  return (
    <Routes>
      <Route path = '/'  element = {<Home/>} />
      <Route path = '/welcome'  element = {<Welcome/>} />
      <Route path = '*'  element = {<Error/>} />
    </Routes>
  );
}

export default App;
