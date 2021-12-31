import "./Error.css";
import { Link } from 'react-router-dom';
import ErrorPic from '../assets/ErrorPic.png';

// var sectionStyle ={
//     width: "100%",
//     height: "400px",
//     backgroundImage: "url(" + { ErrorPic } + ")"
// };

const Error = () => {
    return (
    <div className = 'error-404'>
        <div style={{ backgroundImage: `url(${ErrorPic})` }}></div>
        <div>
        <Link to="/"><button className="button-home">Go Home</button></Link>
        </div>
    </div>)
}
export default Error;