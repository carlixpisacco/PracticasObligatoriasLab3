import './App.css'
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/addTask/AddTask';
import ShowList from './components/showList/ShowList';

function App() {

const [list, setList] = useState ([])

const newTask = (enteredTask) => {

setList((prev) => [...prev, enteredTask]);

};

const crossOutTask = (index) => {
  setList((prev) =>
    prev.map((task, i) => (i === index ? { ...task, crossOut: true } : task))
  );
};

const deleteTask = (index) => {
  setList((prev) =>
    prev.filter((task, i) => i !== index)
  );
};

  return (
    <div className='div'>
      <h2>Bienvenido/a a sus tareas personales!</h2>
      {list.length === 0 && (
        <p>Aún no hay tareas subidas, por favor ingrese tareas.</p>
      )}
      <AddTask newTask={newTask} />
      {list.length > 0 && (
        <>
        <h3>Su lista de tareas:</h3>
          {list.map((task, index) => (
            <ShowList
              key={index}
              index = {index}
              text={task.text}
              crossOut={task.crossOut}
              deleteTask={() => deleteTask(index)}
              crossOutTask={() => crossOutTask(index)}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App
