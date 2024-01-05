import React from "react";
import Todo from '../models/todo';
import TodoItem from "./TodoItem";

const Todos: React.FC<{items: Todo[]}> = (props) => { //React.FC (함수형컴포넌트)
    return (
    <ul>
        {props.items.map(item => 
		<TodoItem key= {item.id} text= {item.text}/>)}
    </ul>
    );
}

export default Todos;