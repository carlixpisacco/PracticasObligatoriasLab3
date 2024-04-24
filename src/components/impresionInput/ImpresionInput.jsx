import PropTypes from "prop-types";

const ImpresionInput = ({dataInput}) => {
  return (
    <div>
      <p> {dataInput} </p>
    </div>
  )
}

ImpresionInput.propTypes = {
    dataInput: PropTypes.string.isRequired,
};

export default ImpresionInput
 