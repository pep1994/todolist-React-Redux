import React from 'react'

function todo(props) {
    return (
        <li onClick={ () => props.onClick(props.id)}> <span></span>{props.todo} </li>
    );
}

export default todo
