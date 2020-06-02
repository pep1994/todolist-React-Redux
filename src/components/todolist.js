import React from 'react'
import Todo from './todo'


function todolist(props) {
    return (
        <ul>
          {
            props.todos.map( (item, i) => { return <Todo id={i} onClick={props.removeTodo} todo={item} /> } )
          }
        </ul>
    )
}

export default todolist
