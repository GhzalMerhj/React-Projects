
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  
    return (
   
            <div className="sidebar">
                <h2>  Menu </h2>
                <hr/>
             
                <ul className="sidebar-links">
                    <li> <Link to="/"> Home </Link></li>  
                    <li> <Link to="/todolist"> ToDo List </Link></li>
                    
                    {/* <li> <Link to="/todoItem/:id"> ToDo Item </Link></li> */}
                  
                </ul>
            </div>
    
)
};

export default Sidebar;
