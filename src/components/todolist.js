import React from 'react'
import Todo from './todo'


function todolist(props) {
    return (
        <ul>
          {
            props.todos.map( (item) => { return <Todo key={item.id} id={item.id} onClick={props.toggleTodo} todoItem={item} /> } )
          }
        </ul>
    )
}

export default todolist
