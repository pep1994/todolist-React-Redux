import React from 'react'

function todo(props) {
    return (
        <li>{props.todo}<button onClick={ () => props.onClick(props.id)}>-</button></li>
    );
}

export default todo
