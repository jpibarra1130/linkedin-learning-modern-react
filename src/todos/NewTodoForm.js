// useState is a hook used to add React state to function components
// it's a replacement of this.state
// the argument for useState is the initial state (doesn't need to be an object)
// state is retained after exiting
// returns a pair of argument (e.g. inputValue, setInputValue)
import React, { useState } from 'react';
// this is a higher order function (called with 
// two different sets of arguments) e.g. connect()()
import { connect } from 'react-redux';

import styled from 'styled-components';

// this type of importing {} is needed if you want to 
// import something specific from the module
// you don't need to put this if you're using a default inside
// the module you're importing from
import { getTodos } from './selectors';
import { addTodoRequest } from './thunks';

const FormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;


const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
    <FormContainer>
        <NewTodoInput 
            type="text" 
            placeholder="Type your new todo here"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            />
        <NewTodoButton 
            onClick={() => {
                const isDuplicateText = 
                    todos.some(todo => todo.text === inputValue);
                if (!isDuplicateText) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }                
            }}
            >Create Todo</NewTodoButton>
    </FormContainer>
)};

// object that represents the entire object
// state argument is the entire store access to redux
// its job is to map the state object the components
// through the properties
const mapStateToProps = state => ({
    todos: getTodos(state),
});


// dispatch argument allows our components to trigger an action
// that our redux components will respond to
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

// mapStateToProps and mapDispatchToProps are both optional
// if you don't need mapStateToProps -> connect(null, mapDispatchToProps)
// if you don't need mapDispatchToProps -> connect(mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
