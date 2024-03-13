import React, { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [updateTodo, setUpdateTodo] = useState("");

    function handleTodos(e) {
        e.preventDefault();
        setTodos([...todos, todoText]);
        setTodoText('');
    }

    function handleTodosInput(e) {
        setTodoText(e.target.value);
    }
    function updateTodoList(e){
        setUpdateTodo(e.target.value);
    }

    function updateList(key){
        todos[key] = updateTodo;
        setEditIndex(null);
    }

    function handleEdit(key) {
        setEditIndex(key);
        setUpdateTodo(todos[key]);
    }
    return (
        <div className="row m-5">
            <form className="d-flex" onSubmit={handleTodos}>
                <div className="col-lg-4 m-1">
                    <input
                        type="text"
                        placeholder="Enter todo Task"
                        className="form-control"
                        value={todoText}
                        onChange={handleTodosInput}
                    />
                </div>
                <div className="m-1">
                    <button className="btn btn-primary" type="submit">
                        Add Todo
                    </button>
                </div>
            </form>
            <div>
                <ol className="mt-4">
                    {todos.length === 0 ? <span className="alert alert-danger">No Todo Found</span> : todos.map((todo, key) => (
                        <>
                            <li key={key}>
                                {editIndex === key ? (
                                    <div className="row">
                                        <div className="col-lg-4 d-flex">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={updateTodo}
                                                onChange={updateTodoList}
                                            />
                                            <button className="btn btn-success" onClick={() => updateList(key)}>
                                                Save
                                            </button>
                                        
                                        </div>
                                    </div>
                                ) : (
                                    <div className="d-flex">

                                        <div>{todo}</div>
                                        <div>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleEdit(key)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    setTodos([...todos.slice(0, key), ...todos.slice(key + 1)])
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>

                                    </div>
                                )}

                            </li>
                        </>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default App;
