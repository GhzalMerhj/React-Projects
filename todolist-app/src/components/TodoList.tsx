import { Link } from "react-router-dom";
import "./TodoList.css";
import {todos , Todos} from '../Data/Todos.ts';


const TodoList = ()=>{
    return (
        <div>
            <h3> All Todos  </h3>
            <table>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Title </th>
                        <th> Status </th>
                    </tr>
                </thead>
                <tbody>
                 {
                    todos.map( (todo: Todos) =>(
                    <tr key={todo.id}> 
                     <td> <Link to={`/todoItem/${todo.id}`}> { todo.id }   </Link></td>
                     <td> { todo.title }</td>
                     <td> { todo.status }</td>
                    </tr>
                    ))
                 }

                </tbody>
            </table>
        </div>
    )
};
export default TodoList;