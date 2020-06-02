import React, {Fragment, Component} from 'react'
import { render } from '@testing-library/react';
import { addTodo } from '../actions';


class AddToDo extends Component {
    constructor(props){
        super(props);
        this.todoInput = React.createRef();
    }
    
    render() {
        return (
            <Fragment>
                <input ref={this.todoInput}/>
                <button onClick={
                    ()=>{
                        this.props.addnew(this.todoInput.current.value)
                        this.todoInput.current.value = "";
                    }
                } 
                >Add</button>
            </Fragment>
        )

    }
}

export default AddToDo
