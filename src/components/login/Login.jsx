import { Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import ImpresionInput from '../impresionInput/ImpresionInput';


const Login = () => {
    const [dataUser, setDataUser] = useState("");
    

    const handleChange = (event) => {
        setDataUser(event.target.value);
        if (dataUser.includes('O') || dataUser.includes('o')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    }

    const submitUser = (event) => {
        event.preventDefault();
        if (!dataUser) {
            alert("Usuario inválido para registrarse");
          } else if (dataUser.includes('O') || dataUser.includes('o')) {
            alert("Usuario inválido para registrarse");
          } else {
            alert("¡Usuario registrado correctamente!");
          }
    }

    return (
        <div>
            <Form onSubmit={submitUser}>
                <Form.Group>
                    <Form.Label>Nombre de usuario:</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Ingresa su usuario"
                        value={dataUser}
                        onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>

            <ImpresionInput dataInput ={dataUser} />
        </div>
    )
}

export default Login
