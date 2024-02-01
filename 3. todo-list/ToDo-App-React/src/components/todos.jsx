import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faLightFaPenToSquare } from '@fortawesome/free-solid-svg-icons'




function Todos(){

    return <div className="todos">
        1/02/2024
        <div className="todo-item">
            Attend the Client Meeting.
            <div className='modify-todos'>
            <FontAwesomeIcon icon={faLightFaPenToSquare} />
            <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    </div>
}

export default Todos;