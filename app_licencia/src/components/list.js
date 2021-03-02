/********** Frontend(ReactJS) - Cliente *********/
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from 'axios';
import {  Link, BrowserRouter as Router  } from "react-router-dom";

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

class listComponent extends React.Component  {

    constructor(props){ //objeto
        super(props);
        this.state = {
          listLicense:[]
        }
    }

    componentDidMount(){ 
      this.loadLicense(); //recarga la tabla
    }

    loadLicense(){        
        axios.get("http://localhost:3000/licencia/list")
        .then(res => {
          // console.log (res.data);
          if (res.data.data) {
            const data = res.data.data;
            this.setState({ listLicense: data });
          }
          else {
              alert("Error del servicio web (list)"); 
          }
        })
        .catch(error => {
          alert("Error del servidor... (list) "+error);
        });
    }

  render() {
    return (
      <Router>
        <table className="table table-hover table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">id</th>
                <th scope="col">Codigo</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">DUI</th>
                <th scope="col">Expedición</th>
                <th scope="col">Nacimiento</th>
                <th scope="col">Dirección</th>
                <th scope="col">Vencimiento</th>
                <th scope="col">Clase</th>
                <th scope="col">Ojos</th>
                <th scope="col">Altura</th>
                <th scope="col">Correo</th>
                <th scope="col">Alergias</th>
                <th scope="col">Emergencia</th>
                <th scope="col">Telefono</th>
                <th scope="col">T. Sangre</th>
                <th scope="col">Medicación</th>
                <th scope="col">Rol</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
                {this.loadFillData()} {/* Agregar las demas filas desde la BD */}
            </tbody>
        </table>
      </Router>
    );
  }

  loadFillData(){ //cargando datos
    return this.state.listLicense.map((data)=>{
      return(
        <tr>
          <th>{data.id}</th>
          <td>{data.codigo}</td>
          <td>{data.nombres}</td>
          <td>{data.apellidos}</td>
          <td>{data.dui}</td>
          <td>{data.fecha_expedicion}</td>
          <td>{data.fecha_nacimiento}</td>
          <td>{data.direccion}</td>
          <td>{data.fecha_vencimiento}</td>
          <td>{data.clase}</td>
          <td>{data.color_ojos}</td>
          <td>{data.altura}</td>
          <td>{data.correo}</td>
          <td>{data.alergias}</td>
          <td>{data.emergencia_nombre}</td>
          <td>{data.emergencia_tel}</td>
          <td>{data.tipo_sangre}</td>
          <td>{data.medicacion}</td>
          <td>{data.role.role}</td>
          <td>
            <Link className="btn btn-outline-info " to={"/edit/"+data.id} onClick={() => window.location.href="/edit/"+data.id}>Edit</Link>
          </td>
          <td>
            <button className="btn btn-outline-danger" onClick={()=>this.onDelete(data.id)}> Eliminar </button>
          </td>
        </tr>
      )
    });
  }

  onDelete(id){ //eliminar una licencia
    Swal.fire({
      title: '¿Esta seguro que desea eliminar el registro con id: '+id+'?',
      text: '¡No podrás recuperar este registro!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Tu registro está seguro :)',
          'Error'
        )
      }
    })
  }

  sendDelete(userId){
    const baseUrl = "http://localhost:3000/licencia/delete"; // URL de backend
    axios.post(baseUrl,{ // la red
      id:userId
    })
    .then(response =>{
      if (response.data.success) {
        Swal.fire(
          'Eliminado',
          'La licencia ha sido eliminado.',
          'Exito'
        )
        this.loadLicense();
      }
    })
    .catch ( error => {
      alert("Error 325 - delete ")
    })
  }

}

export default listComponent;