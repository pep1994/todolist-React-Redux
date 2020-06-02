import React, { Component } from 'react'



class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.todoInput = React.createRef();
    }

    render() {
        return (
            <div className="addtodo">
                <input onKeyUp={
                    (e) => {
                        if (e.keyCode === 13) {
                            this.props.addnew(this.todoInput.current.value)
                            this.todoInput.current.value = "";
                        }

                    }
                }
                    ref={this.todoInput} />
                <button onClick={
                    () => {
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
