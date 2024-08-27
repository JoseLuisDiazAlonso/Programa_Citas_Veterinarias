
import React, { useState } from 'react';
import '../css/formList.css';

function Formulario({ setPacientes }) {

    /**Creamos un estado inicial para almacenar los valores de los campos del formulario */

    const [datos, setDatos] = useState({
        nombreMascota: '',
        tipoMascota: '',
        nombrePropietario: '',
        email: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    /**Creamos una función para actulizar el estado de los campos del formulario */

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setDatos({ ...datos, [name]: value });
    }


    /**Creamos una función para enviar los datos del formulario */

    function enviarDatosAlListado(e) {
        e.preventDefault();
        if (!datos.nombreMascota.trim() ||!datos.tipoMascota.trim() || !datos.nombrePropietario.trim() || !datos.email.trim() || !datos.fecha.trim() || !datos.hora.trim() || !datos.sintomas.trim()) {
            alert('Todos los campos son obligatorios');
        } else {
            setPacientes((prevPacientes) => [...prevPacientes, datos])

            alert('Datos enviados correctamente');
            vaciarCampos();
        }
        
    }

    function vaciarCampos() {
        setDatos({
            nombreMascota: '',
            tipoMascota: '',
            nombrePropietario: '',
            email: '',
            fecha: '',
            hora: '',
            sintomas: '',
        });
    }



    return (
        <div className="container2">
            <div className="row">
                <div className="col-xs-6 col-lg-6">
                    <h2 className='tituloSecundario'>Formulario</h2>

                    <form className='formulario' onSubmit={enviarDatosAlListado}>
                        <input type="text" placeholder='Nombre Mascota' name='nombreMascota' value={datos.nombreMascota ? datos.nombreMascota : ''} onChange={handleInputChange}></input><br></br>
                        <input type="text" placeholder='Tipo de Mascota' name='tipoMascota' value={datos.tipoMascota ? datos.tipoMascota : ''} onChange = {handleInputChange}></input><br></br>
                        <input type="text" placeholder='Nombre Propietario' name='nombrePropietario' value={datos.nombrePropietario ? datos.nombrePropietario : ''} onChange={handleInputChange}></input><br></br>
                        <input type="email" placeholder='Email' name='email' value={datos.email ? datos.email : ''} onChange={handleInputChange}></input><br></br>
                        <input type="date" placeholder='Fecha' name='fecha' value={datos.fecha ? datos.fecha : ''} onChange={handleInputChange}></input><br></br>
                        <input type="time" placeholder='Hora' name='hora' value={datos.hora ? datos.hora : ''} onChange={handleInputChange}></input><br></br>
                        <textarea placeholder='Describa los síntomas' name='sintomas' value={datos.sintomas ? datos.sintomas : ''} onChange={handleInputChange}></textarea><br></br>
                        <button className='añadir'>Añadir</button>


                    </form>
                </div>

            </div>
        </div>




    )

}


export default Formulario;

