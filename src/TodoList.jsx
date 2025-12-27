import {v4 as uuidv4}from 'uuid';
import { useState } from "react";
export default function TodoList() {
        let [todos, setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
        let [newTodo, setNewTodo]=useState("");
        let addNewTask =()=>{
                setTodos((preTodos)=>{
                        return [...preTodos,{task:newTodo,id:uuidv4(),isDone:false}]
                });
                setNewTodo("");
        };
        let updateTodoValue=(event)=>{
                setNewTodo(event.target.value)

        };
        let deleteTodo = (id) =>{
                setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));
        };
        let upperCaseAll = ()=>{
               setTodos((prevTodos)=>
                prevTodos.map((todo)=>{
                     return {
                        ...todo,
                        task:todo.task.toUpperCase(),
                     }; 
                })
        );
};
let markAsDone=(id)=>{
          setTodos((prevTodos)=>
                prevTodos.map((todo)=>{
                if(todo.id==id){
                           return {
                        ...todo,
                        isDone:true,
                     }; 
                }else{
                  return todo;      
                }
                  
                })
        );
};
	return (
		<div    >
			<input placeholder="add a task" type="text"  value={newTodo}  onChange={updateTodoValue} />
                        <br />
			<button onClick={addNewTask}>Add Task</button>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
                        <hr />
			<h4>TodoList</h4>
                        <ul>
                                {
                                        todos.map((todo)=>(
                                             <li key={todo.id}>
                                              <span style={isDone?{textDecorationLine:'line-through'}:{}}>{todo.task}</span>  
                                              &nbsp; &nbsp;&nbsp; &nbsp;
                                              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                              <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                                             </li> 
                                        ))
                                }
                        </ul>
                        <button onClick={upperCaseAll}>UpperCaseAll</button>
                        
		</div>
	);
}
