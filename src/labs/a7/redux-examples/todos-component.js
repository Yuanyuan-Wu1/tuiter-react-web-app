import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";
const Todos = () => {
    const todos = useSelector(state => state.todos);    // retrieve from reducer state
    const [todo, setTodo] = useState({do: ''});     // create local state var

    const dispatch = useDispatch();     // invoke reducer function
    const toggleTodoDone = (todo) => { dispatch(todoDoneToggle(todo)) }         // handle clicking checkbox
    const deleteTodoClickHandler = (index) => { dispatch(deleteTodo(index)) }   // handle clicking delete button
    const createTodoClickHandler = () => { dispatch(addTodo(todo)) }            // handle clicking create button
    const todoChangeHandler = (event) => {      // handle input
        const doValue = event.target.value;     // get input
        const newTodo = {do: doValue};
        setTodo(newTodo);                       // change local state var
    }
    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler} className="btn btn-primary w-25 float-end">Create</button>
                    <input onChange={todoChangeHandler} value={todo.do} className="form-control w-75"/>
                </li>
                {todos.map((todo, index) =>
                    <li key={todo._id} className="list-group-item">
                        {/* button sends index to handler.
                        () => {} because passing index parameter, otherwise gets into infinite loop. */}
                        <button onClick={() => deleteTodoClickHandler(index)}
                                className="btn btn-danger float-end ms-2">Delete</button>
                        <input type="checkbox" checked={todo.done} className="me-2"
                               onChange={() =>toggleTodoDone(todo)}/>
                        {todo.do}
                    </li>
                )}
            </ul>
        </>
    );
};
export default Todos;