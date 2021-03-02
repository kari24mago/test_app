/********** Frontend(ReactJS) - Cliente *********/
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from 'axios';

class EditComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          campCodigo: "",
          campNombres:"",
          campApellidos:"",
          campDui:"",
          campExp: "",
          campNac:"",
          campDireccion:"",
          campVenc:"",
          campClase: "",
          campOjos:"",
          campAltura:"",
          campCorreo:"",
          campAlergias:"",
          campEmergN:"",
          campEmergT:"",
          campSangre:"",
          campMedicac:"",
          selectRole:0
        }
    }

 render(){
   return (
        <form className="form">
        <h2 text-align="center">Crear</h2>

        <div className="container col-xs-12 col-sm-12 col-md-12">
        <div className="row">

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputCodigo">Código: </label>
                <input type="text" className="form-control"  placeholder="0000-000000-000-0" value={this.state.campCodigo} onChange={(value)=> this.setState({campCodigo:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputNombres">Nombres: </label>
                <input type="text" className="form-control"  placeholder="Pedro Juan" value={this.state.campNombres} onChange={(value)=> this.setState({campNombres:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputApellidos">Apellidos: </label>
                <input type="text" className="form-control"  placeholder="Martínez López" value={this.state.campApellidos} onChange={(value)=> this.setState({campApellidos:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputDUI">DUI: </label>
                <input type="text" className="form-control"  placeholder="00000000-0" value={this.state.campDui} onChange={(value)=> this.setState({campDui:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputFechaExp">Fecha expedición: </label>
                <input type="date" className="form-control" value={this.state.campExp} onChange={(value)=> this.setState({campExp:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputFechaNac">Fecha de nacimiento: </label>
                <input type="date" className="form-control" value={this.state.campNac} onChange={(value)=> this.setState({campNac:value.target.value})}/>
            </div>
        </div>

        <div className="form-group col-md-12">
            <label htmlFor="inputAddress">Dirección</label>
            <input type="text" className="form-control" id="inputDireccion" placeholder="Colonia, calle, casa #0, municipio, pais" value={this.state.campDireccion} onChange={(value)=> this.setState({campDireccion:value.target.value})}/>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputFechaVen">Fecha vencimiento: </label>
                <input type="date" className="form-control" value={this.state.campVenc} onChange={(value)=> this.setState({campVenc:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputClase">Clase: </label>
                <input type="text" className="form-control" placeholder="Pesada" value={this.state.campClase} onChange={(value)=> this.setState({campClase:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputColor">Color de ojos: </label>
                <input type="text" className="form-control"  placeholder="Café" value={this.state.campOjos} onChange={(value)=> this.setState({campOjos:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputAltura">Altura: </label>
                <input step="any" type="number" className="form-control"  placeholder="1.60" value={this.state.campAltura} onChange={(value)=> this.setState({campAltura:value.target.value})}/>
            </div>
        </div>

        <div className="form-row col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputState">Rol</label>
                <select name="rolSeleccionado" className="form-control" value={this.state.rolSeleccionado} onChange={(value)=> this.setState({selectRole:value.target.value})}>
                    <option value="0">Seleccione...</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputTipo">Tipo de sangre</label>
                <input type="text" className="form-control"  placeholder="O RH+" value={this.state.campSangre} onChange={(value)=> this.setState({campSangre:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputMedicacion">Medicación permanente: </label>
                <input type="text" className="form-control"  placeholder="Inhalador para el asma" value={this.state.campMedicac} onChange={(value)=> this.setState({campMedicac:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputAlergias">Alergías: </label>
                <input type="text" className="form-control"  placeholder="A la penicilina" value={this.state.campAlergias} onChange={(value)=> this.setState({campAlergias:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputEmergencia">En emergencia avisar a: </label>
                <input type="text" className="form-control"  placeholder="Maria del Carmen" value={this.state.campEmergN} onChange={(value)=> this.setState({campEmergN:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputTel">Telefono: </label>
                <input type="number" className="form-control"  placeholder="22140000" value={this.state.campEmergT} onChange={(value)=> this.setState({campEmergT:value.target.value})}/>
            </div>
        </div>

        <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Correo electrónico</label>
            <input type="text" className="form-control" id="inputCorreo" placeholder="correo_ejemplo@hotmail.com" value={this.state.campCorreo} onChange={(value)=> this.setState({campCorreo:value.target.value})}/>
        </div>

        <button type="submit" className="btn btn-primary" onClick={()=>this.sendSave()}>Guardar Registro</button>

        </div>
        </div>
        </form>
   );
 }

 sendSave(){ //Boton Guardar
    //validaciones para ingresar datos importantes
    if (this.state.selectRole===0) {
      alert("Seleccione el tipo de Rol")
    }
    else if (this.state.campDui==="") {
        alert("Digite el campo de DUI")
     }
    else if (this.state.campCodigo==="") {
       alert("Digite el campo de Código")
    }
    else if (this.state.campNombres==="") {
       alert("Digite el campo de Nombre")
    }
    else {
      //url del archivo nodeJS en Backend
      const baseUrl = "http://localhost:3000/licencia/create";
 
      //parametros de los datos de la tabla licencia
      const datapost = {
        codigo : this.state.campCodigo,
        nombres : this.state.campNombres,
        apellidos : this.state.campApellidos,
        dui : this.state.campDui,
        fecha_expedicion  : this.state.campExp,
        fecha_nacimiento : this.state.campNac,
        direccion : this.state.campDireccion,
        fecha_vencimiento : this.state.campVenc,
        clase : this.state.campClase,
        color_ojos  : this.state.campOjos,
        altura : this.state.campAltura,
        correo : this.state.campCorreo,
        alergias : this.state.campAlergias,
        emergencia_nombre : this.state.campEmergN,
        emergencia_tel  : this.state.campEmergT,
        tipo_sangre : this.state.campSangre,
        medicacion : this.state.campMedicac,
        role : this.state.selectRole
      }
 
      axios.post(baseUrl,datapost)
      .then(response => {
        console.log(response);
        if (response.data.success===true) {
          alert("Estado: "+response.data.message)
        }
        else {
          alert(response.data.message)
        }
      }).catch(error=>{
          alert("Error 34 - crear.."+error)
      })
    }
  }
}


export default EditComponent;