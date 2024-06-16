import React from 'react';
import { TodoContext } from '../TodoContext'
import './style/TodoCounter.css';

function TodoCounter() {
	const { completedTodos, remainingTodos, totalTodos } = React.useContext(TodoContext);
	return (
		<h1 className='TodoCounter'>
			Have completed <span>{completedTodos}</span> of <span>{ totalTodos }</span> TODOs
			You need to complete <span>{remainingTodos}</span> to finish.
		</h1>
	)
}

export { TodoCounter }