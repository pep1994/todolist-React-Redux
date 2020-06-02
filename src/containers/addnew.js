import {connect} from 'react-redux'
import { addTodo } from '../actions'
import AddToDo from '../components/addtodo'


const mapDispatchToProps = (dispatch) => {
    return {
        addnew: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddToDo)