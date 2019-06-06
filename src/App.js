import React, { useState, useEffect } from 'react';
import './App.css';
import * as axios from 'axios'

const App = () => {

	const [count, setCount] = useState(0);
	const [users, setUsers] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const [isLoading, setIsLoading] = useState(true);



	useEffect(() => {
		document.title = `You clicked ${count} times`;

		axios.get(`https://randomuser.me/api/?page=${currentPage}&results=${pageSize}&seed=foobar`)
			.then(response => {
				setUsers(response.data.results);
				setIsLoading(false)
			})
	}, [count, currentPage, pageSize]);



	const handleChange = (e) => {
		let value;
		if (e.target.value === '' || e.target.value <= 0) {
			value = 1;
		} else {
			value = e.target.value;
		}
		setCurrentPage(value);
		setIsLoading(true);
	};



	return (
		<div className="App">
			<header className="App-header">
				<p>You clicked {count} times</p>
				<button onClick={() => setCount(count + 1)}>
					Click Me!
					 </button>
				<button onClick={() => {
					setCurrentPage(+currentPage + 1);
					setIsLoading(true)
				}}>
					Next Guys
					 </button>

				<form>
					<label>
						Page:
							<input
							type='number'
							value={currentPage}
							onChange={handleChange} />
					</label>
				</form>

				{isLoading ?

					<div>Loading</div> :
					<ol>
						{users.map((user, index) => (
							<li key={index}>{user.name.first} {user.name.last}, {user.location.city}</li>
						))}
					</ol>
				}

			</header>
		</div>
	);
};

/*const Todo = ({todo, index, completeTodo, removeTodo}) => {
	 return (
		 <div
			 className="todo"
			 style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
		 >
				{todo.text}

				<div>
					 <button
						 onClick={() => completeTodo(index)}>
							{todo.isCompleted ? 'Return' : 'Complete'}
					 </button>
					 <button
						 onClick={() => removeTodo(index)}>x
					 </button>
				</div>
		 </div>
	 );
};

const TodoForm = ({addTodo}) => {
	 const [value, setValue] = useState("");

	 const handleSubmit = e => {
			e.preventDefault();
			if (!value) return;
			addTodo(value);
			setValue("");
	 };

	 return (
		 <form onSubmit={handleSubmit}>
				<input
					type="text"
					className="input"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
		 </form>
	 );
};

const App = () => {

	 const [todos, setTodos] = useState([
			{
				 text: "Learn about React",
				 isCompleted: false
			},
			{
				 text: "Meet friend for lunch",
				 isCompleted: false
			},
			{
				 text: "Build really cool todo app",
				 isCompleted: false
			}
	 ]);


	 const addTodo = text => {
			const newTodos = [...todos, {text, isCompleted: false}];
			setTodos(newTodos);
	 };

	 const completeTodo = index => {
			const newTodos = [...todos];
			newTodos[index].isCompleted = !newTodos[index].isCompleted;
			setTodos(newTodos);
	 };

	 const removeTodo = index => {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			setTodos(newTodos);
	 };

	 return (
		 <div className="app">
				<div className="todo-list">
					 {todos.map((todo, index) => (
						 <Todo
							 key={index}
							 index={index}
							 todo={todo}
							 completeTodo={completeTodo}
							 removeTodo={removeTodo}
						 />
					 ))}
					 <TodoForm addTodo={addTodo}/>
				</div>
		 </div>
	 );
};*/

export default App;
