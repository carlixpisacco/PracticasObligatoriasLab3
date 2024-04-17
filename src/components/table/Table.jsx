import './Table.css';
import PropTypes from "prop-types";
import { Table } from 'react-bootstrap'; 

const Tablee = ({ datos }) => {
    return (
        <div>
            <Table striped  bordered className='tabla'>
                <thead>
                    <tr>
                        <th className='my-th'>Marca</th>
                        <th className='my-th'>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((marca, index) => (
                        <tr key={index}>
                            <td className = "my-td">{marca.brand}</td>
                            <td className = "my-td">{marca.income}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

Tablee.propTypes = {
    datos: PropTypes.array,
};

export default Tablee;