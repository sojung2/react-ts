import React from "react";

const TodoItem: React.FC<{text: string}> = (props) => { //React.FC (함수형컴포넌트)
    return (
		<li>{props.text}</li>
    
    );
}

export default TodoItem;