import './App.css'
import Promedio from './components/promedio/Promedio';
import Tablee from './components/table/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const netIncomes = [
	{ brand: "McDonalds", income: 1291283}, 
	{ brand: "Burger King", income: 1927361 }, 
	{ brand: "KFC", income: 1098463 }
];


function App() {

	return (
		<>
			<div className='div-app'>
			<Tablee datos = {netIncomes}/>
			<Promedio datos1 = {netIncomes}/>
			</div>
			
		</>
	)
}

export default App
