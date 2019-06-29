import React from 'react';


const Todo = ({ todo, index, completeTodo, deleteTodo }) => {


  return (
	 <div
		className="todo"
		style={ { textDecoration: todo.completed ? 'line-through' : '' } }>
		{ todo.title }
		<div className="buttons">
		  <button onClick={ () => completeTodo(index) }>
			 { todo.completed ? 'Return' : 'Complete' }
		  </button>
		  <button onClick={ () => deleteTodo(index) }>
			 x
		  </button>
		</div>
	 </div>
  );
};

export default Todo;
