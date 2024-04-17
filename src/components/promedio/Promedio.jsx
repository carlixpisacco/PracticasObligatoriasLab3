import './Promedio.css';
import PropTypes from "prop-types";


const Promedio = ({datos1}) => {
    const promedioNetIncomes = datos1.reduce((total, marca) => total + marca.income, 0) / datos1.length;
  return (
    <div>
      <p className = "my-p"> 
      El promedio de ingreso neto entre todas las marcas es: <span className="bold-text">{promedioNetIncomes}</span> 
      </p> 
    </div>
  )
}

Promedio.propTypes = {
    datos1: PropTypes.array,
};


export default Promedio
