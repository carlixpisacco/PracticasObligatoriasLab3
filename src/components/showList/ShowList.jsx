import PropTypes from "prop-types";
import './ShowList.css'

const ShowList = ({index,text, crossOut, crossOutTask, deleteTask}) => {

  return (
      <div>
        <ul>
            <li style={{ textDecoration: crossOut ? 'line-through' : 'none', color: crossOut ? 'gray' : 'black' }}>
              {text}
              <button className= "button-tachar" onClick={() => crossOutTask(index)}>Tachar tarea</button>
              <button className="button-eliminar" onClick={() => deleteTask(index)}>Eliminar tarea</button>
        </li>
        </ul>
      </div>
    );
}

ShowList.propTypes = {
  index:PropTypes.number,
  text: PropTypes.text,
  crossOut: PropTypes.bool,
  crossOutTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default ShowList
