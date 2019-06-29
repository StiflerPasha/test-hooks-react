import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
	 event.preventDefault();
	 if (!value) return false;
	 addTodo(value);
	 setValue('')
  };

  return (
	 <form className='formTodo' onSubmit={ handleSubmit }>
		<div className="flexContainer">
		  <input
			 type="text"
			 className='input'
			 value={ value }
			 onChange={ event => setValue(event.target.value) }
			 placeholder='Add Todo' />
		</div>

	 </form>
  );
};

export default TodoForm;
