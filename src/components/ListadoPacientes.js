import React, {useState} from 'react';
import '../css/formList.css';
import '../css/ListadoPacientes.css'


const useEliminarPaciente = (pacientes, setPacientes) => {
    const eliminarPaciente = (index) => {
        const nuevosPacientes = [...pacientes];
        nuevosPacientes.splice(index, 1);
        setPacientes(nuevosPacientes);
    };
    return eliminarPaciente;
}

function ListadoPacientes({ pacientes, setPacientes }) {

    const eliminarPaciente = useEliminarPaciente(pacientes, setPacientes);
    return (
        <div className="container3">
            <div className="row">
                <div className="col-xs-6 col-lg-6">
                    <h2 className='titutoSecundario'>Listado<span>Pacientes  </span></h2>
                    <div className='campo'>
                        <div className='datos-paciente'>
                            {pacientes.map((paciente, index) => (
                                <div key={index} className='datos-paciente'>
                                    <fieldset>
                                        <legend>Datos del paciente</legend>
                                        <p><span>Nombre Mascota:</span>{paciente.nombreMascota}</p>
                                        <p><span>Tipo de Mascota:</span>{paciente.tipoMascota}</p>
                                        <p><span>Nombre Propietario:</span>{paciente.nombrePropietario}</p>
                                        <p><span>Email:</span>{paciente.email}</p>
                                        <p><span>Fecha:</span>{paciente.fecha}</p>
                                        <p><span>Hora:</span>{paciente.hora}</p>
                                        <p><span>Sintomas:</span>{paciente.sintomas}</p>
                                        <button onClick={() => eliminarPaciente(index)} className='eliminar'>Eliminar</button>
                                    </fieldset>





                                </div>
                            ))}
                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
}

export default ListadoPacientes;
