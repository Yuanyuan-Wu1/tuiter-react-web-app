import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({todos = [], deleteTodo, setTodo}) => {
    return (
        <div>
            <ul className="list-group">
                {
                    todos.map((todo, index) => (
                        <TodoItem 
                            key={todo._id || index}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            setTodo={setTodo}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;

