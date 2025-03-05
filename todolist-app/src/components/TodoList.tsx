import { Link } from "react-router-dom";
import "./TodoList.css";

const todos = [
{ id: 1 , title : "play sports" , description: "regular sports routine to stay active" , status: "completed" },
{ id: 2 , title : "Do Housework" , description: "tidy up the house by completing essential chores",status: "pending" },
{ id: 3 , title : "Projects Coding" , description: "update and test projects in the resume" , status: "completed"},
];

const TodoList = ()=>{
    return (
        <div>
            <h1> All Todos  </h1>
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
                    todos.map( todo =>(
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