import {Form, Button} from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

const AddTask = ({newTask}) => {

const [enteredTask, setEnteredTask] = useState("");

const addTask = (event) => {
    setEnteredTask(event.target.value);
};

const submitAddTask = (event) => {
    event.preventDefault(); 
    const task = {
        text: enteredTask,
        crosOut: false,
      };
      
    newTask(task);
    setEnteredTask(""); 
}
  return (
    <div>
      <Form onSubmit={submitAddTask}>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Control 
        type="text" 
        placeholder="Escriba su tarea aquí"
        onChange = {addTask}
        value = {enteredTask}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
    </div>
  )
}

    AddTask.propTypes = {
    newTask: PropTypes.func.isRequired,
  };

export default AddTask
