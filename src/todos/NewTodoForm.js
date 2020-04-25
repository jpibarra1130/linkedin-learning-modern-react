// useState is a hook used to add React state to function components
// it's a replacement of this.state
// the argument for useState is the initial state (doesn't need to be an object)
// state is retained after exiting
// returns a pair of argument (e.g. inputValue, setInputValue)
import React, { useState } from 'react';
// this is a higher order function (called with 
// two different sets of arguments) e.g. connect()()
import { connect } from 'react-redux';

// this type of importing {} is needed if you want to 
// import something specific from the module
// you don't need to put this if you're using a default inside
// the module you're importing from
import { createTodo } from './actions';
import './NewTodoForm.css'

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
    <div className="new-todo-form">
        <input 
            className="new-todo-input" 
            type="text" 
            placeholder="Type your new todo here"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            />
        <button 
            onClick={() => {
                const isDuplicateText = 
                    todos.some(todo => todo.text === inputValue);
                if (!isDuplicateText) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }                
            }}
            className="new-todo-button">Create Todo</button>
    </div>
)};

// object that represents the entire object
// state argument is the entire store access to redux
// its job is to map the state object the components
// through the properties
const mapStateToProps = state => ({
    todos: state.todos,
});


// dispatch argument allows our components to trigger an action
// that our redux components will respond to
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

// mapStateToProps and mapDispatchToProps are both optional
// if you don't need mapStateToProps -> connect(null, mapDispatchToProps)
// if you don't need mapDispatchToProps -> connect(mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
