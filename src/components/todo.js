import React from 'react'

function todo(props) {
    return (
        <li onClick={ () => props.onClick(props.id)} className={props.todoItem.completed ? 'completed' : 'uncomplete'}> <span className={props.todoItem.completed ? 'completed' : 'uncomplete'}></span>{props.todoItem.todo} </li>
    );
}

export default todo
