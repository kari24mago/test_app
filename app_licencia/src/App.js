/********** Frontend(ReactJS) - Cliente *********/
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from './components/form';
import List from './components/list';
import Edit from './components/edit';

function App() {
  return (
    <Router>
      <div className="App">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

          <a className="navbar-brand" href="/" style={{color:'yellow',fontWeight:'bold'}}>Technical test - Web development (Node.js, Express, React.js, MySQL)</a>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="btn btn-primary" to="/"> Lista de licencias </Link>
              </li>
              <li className="nav-link"></li>
              <li className="nav-item">
                <Link className="btn btn-primary"  to="/form"> Agregar nueva licencia </Link>
              </li>
              <li className="nav-link"></li>
              <li className="nav-item">Salir</li>
            </ul>
          </div>

        </nav>

        <br></br><br></br><h2 align="center">CRUD - Licencias </h2><br></br>

        <div className="container py-4">
          <div className="row">
            {/* Agregar lista de componentes, formulario, editar. */}
            <Route path="/" exact component={List} />
            <Route path="/form" component={Form} />
            <Route path="/edit/:licenseId" component={Edit} />
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;