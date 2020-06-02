import React, { Component} from 'react'
import { render } from '@testing-library/react';
import { addTodo } from '../actions';


class AddToDo extends Component {
    constructor(props){
        super(props);
        this.todoInput = React.createRef();
    }
    
    render() {
        return (
            <div className="addtodo">
                <input ref={this.todoInput}/>
                <button onClick={
                    ()=>{
                        this.props.addnew(this.todoInput.current.value)
                        this.todoInput.current.value = "";
                    }
                } 
                >Add</button>
            </div>
        )

    }
}

export default AddToDo
