import './App.css'
import Sidebar from './components/dashboard/Sidebar'
import Navbar from './components/dashboard/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
function App() {


  return (
     <Router>
        <Navbar /> 
        <Sidebar />
        <div className="content">
         {/* <h1> Welcome to the dashboard</h1> */}
          <Routes>
          <Route path="/" element= "" />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/todoItem/:id" element={<TodoItem />} />
          </Routes>
        </div>
    </Router>
  )
};

export default App;
