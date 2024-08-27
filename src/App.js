import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

  const [pacientes, setPacientes] = useState([]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-12">
          <div className="App">
            <Header />
            <Formulario setPacientes={setPacientes} />
            <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes} />

          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
