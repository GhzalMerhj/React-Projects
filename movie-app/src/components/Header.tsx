import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>{

    return (
        <div className="header">
            
                <ul>
                 <li> <Link to="register">Register</Link> </li>
                </ul>
       
        </div>
    )
}
 export default Header;