import React, { useEffect, useState } from 'react';
import Todo                           from './components/Todo';
import TodoForm                       from "./components/TodoForm";
import axios                          from 'axios'
import './App.css'
import * as uuid                      from 'uuid/v4'
import Preloader                      from "./components/Preloader";

const App = () => {
	 const [todos, setTodos] = useState([]);
	 const [isLoaded, setIsLoaded] = useState(false);

	 useEffect(() => {
		const getTodo = async () => {
		  try {
			 const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
			 const data = response.data.filter((item, index) => index < 10);
			 data.forEach(item => item.id = uuid());
			 setTodos([...data]);
			 setIsLoaded(true);
		  } catch (e) {
			 console.log(e);
		  }
		};

		getTodo().then(() => console.log('Get Todos: Done'))
	 }, []);

	 const addTodo = title => {
		const id = uuid();
		const todo = [...todos, { userId: 1, id, title, completed: false }];
		setTodos(todo);
		console.log('Added ID:', id);
	 };

	 const completeTodo = index => {
		const todo = [...todos];
		todo[index].completed = !todo[index].completed;
		setTodos(todo);
		console.log('Changed ID:', todo[index].id);
	 };

	 const deleteTodo = index => {
		const todo = [...todos];
		const delItem = todo.splice(index, 1);
		setTodos(todo);
		console.log('Deleted ID:', delItem[0].id);
	 };

	 const showState = () => {
		console.log(todos);
	 };

	 return (
		<div className='app'>
		  { isLoaded

			 ? <div className='todo-list'>
				{ todos.map((todo, index) => (
				  <Todo
					 key={ todo.id }
					 index={ index }
					 todo={ todo }
					 completeTodo={ completeTodo }
					 deleteTodo={ deleteTodo } />
				)) }
				<TodoForm addTodo={ addTodo } />
				<button onClick={ showState }>State</button>
			 </div>

			 : <Preloader /> }
		</div>
	 );
  }
;

export default App;