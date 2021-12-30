import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import Error from './components/ErrorPage';


function App() {
  return (
    <Routes>
      <Route path = '/'  element = {<Home/>} />
      <Route path = '*'  element = {<Error/>} />
    </Routes>
  );
}

export default App;
