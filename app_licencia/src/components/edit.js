/********** Frontend(ReactJS) - Cliente *********/
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from 'axios';

class EditComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          dataLicense:{},
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
          stringRole:"",
          selectRole:0
        }
    }

    componentDidMount(){
        let userId = this.props.match.params.licenseId; //parametros de id de usuario
        const url = "http://localhost:3000/licencia/get/"+userId;
        // console.log("**--> url final: "+url);
        axios.get(url)
        .then(res=>{
          if (res.data.success) {
            const data = res.data.data[0];
            this.setState({
              dataLicense:data,             
              campCodigo:data.codigo,
              campNombres:data.nombres,
              campApellidos:data.apellidos,
              campDui:data.dui,
              campExp:data.fecha_expedicion,
              campNac:data.fecha_nacimiento,
              campDireccion:data.direccion,
              campVenc:data.fecha_vencimiento,
              campClase:data.clase,
              campOjos:data.color_ojos,
              campAltura:data.altura,
              campCorreo:data.correo,
              campAlergias:data.alergias,
              campEmergN:data.emergencia_nombre,
              campEmergT:data.emergencia_tel,
              campSangre:data.tipo_sangre,
              campMedicac:data.medicacion,
              stringRole:data.role.role,
              selectRole:data.roleId
            })
            // console.log(JSON.stringify(data.role.role));
          }
          else {
            alert("Error del servicio web (edit)")
          }
        })
        .catch(error=>{
          alert("Error del servidor... (edit)"+error)
        })
    }

    changeDB = () => {
        this.setState({ 
            campExp: document.getElementById("campExp").value,
            campNac: document.getElementById("campNac").value,
            campVenc: document.getElementById("campVenc").value
        })
    }

 render(){
   let userId = this.props.match.params.licenseId;

   return (
        <form className="form">
        <h2 text-align="center">Editar</h2>

        <label>Id: {userId}</label>

        <div className="container col-xs-12 col-sm-12 col-md-12">
        <div className="row">

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputCodigo">Código: </label>
                <input type="text" className="form-control"  placeholder="0000-000000-000-0" name="campCodigo" value={this.state.campCodigo} onChange={(value)=> this.setState({campCodigo:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputNombres">Nombres: </label>
                <input type="text" className="form-control"  placeholder="Pedro Juan" name="campNombres" value={this.state.campNombres} onChange={(value)=> this.setState({campNombres:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputApellidos">Apellidos: </label>
                <input type="text" className="form-control"  placeholder="Martínez López" name="campApellidos" value={this.state.campApellidos} onChange={(value)=> this.setState({campApellidos:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputDUI">DUI: </label>
                <input type="text" className="form-control"  placeholder="00000000-0" name="campDui" value={this.state.campDui} onChange={(value)=> this.setState({campDui:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputFechaExp">Fecha expedición: </label>
                <input type="date" className="form-control" name="campExp" id="campExp" value={this.state.campExp} onChange={this.changeDB} min="1940-01-01" max="2120-01-01" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputFechaNac">Fecha de nacimiento: </label>
                <input type="date" className="form-control" name="campNac" id="campNac" value={this.state.campNac} onChange={this.changeDB} min="1940-01-01" max="2120-01-01" />
            </div>
        </div>

        <div className="form-group col-md-12">
            <label htmlFor="inputAddress">Dirección</label>
            <input type="text" className="form-control"  placeholder="Colonia, calle, casa #0, municipio, pais" name="campDireccion" value={this.state.campDireccion} onChange={(value)=> this.setState({campDireccion:value.target.value})}/>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputFechaVen">Fecha vencimiento: </label>
                <input type="date" className="form-control" name="campVenc" id="campVenc" value={this.state.campVenc} onChange={this.changeDB} min="1940-01-01" max="2120-01-01" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputClase">Clase: </label>
                <input type="text" className="form-control" placeholder="Pesada" name="campClase" value={this.state.campClase} onChange={(value)=> this.setState({campClase:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputColor">Color de ojos: </label>
                <input type="text" className="form-control"  placeholder="Café" name="campOjos" value={this.state.campOjos} onChange={(value)=> this.setState({campOjos:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputAltura">Altura: </label>
                <input step="any" type="number" className="form-control" placeholder="1.60" name="campAltura" value={this.state.campAltura} onChange={(value)=> this.setState({campAltura:value.target.value})}/>
            </div>
        </div>

        <div className="form-row col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputState">Rol</label>
                <select name="rolSeleccionado" className="form-control" onChange={(value)=> this.setState({selectRole:value.target.value})}>
                    <option defaultValue value={this.state.dataLicense.roleId}>{this.state.stringRole}</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputTipo">Tipo de sangre</label>
                <input type="text" className="form-control"  placeholder="O RH+" name="campSangre" value={this.state.campSangre} onChange={(value)=> this.setState({campSangre:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputMedicacion">Medicación permanente: </label>
                <input type="text" className="form-control"  placeholder="Inhalador para el asma" name="campMedicac" value={this.state.campMedicac} onChange={(value)=> this.setState({campMedicac:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputAlergias">Alergías: </label>
                <input type="text" className="form-control"  placeholder="A la penicilina" name="campAlergias" value={this.state.campAlergias} onChange={(value)=> this.setState({campAlergias:value.target.value})}/>
            </div>
        </div>

        <div className="form-row justify-content-center col-md-12">
            <div className="form-group col-md-6">
                <label htmlFor="inputEmergencia">En emergencia avisar a: </label>
                <input type="text" className="form-control"  placeholder="Maria del Carmen" name="campEmergN" value={this.state.campEmergN} onChange={(value)=> this.setState({campEmergN:value.target.value})}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputTel">Telefono: </label>
                <input type="number" className="form-control"  placeholder="22140000" name="campEmergT" value={this.state.campEmergT} onChange={(value)=> this.setState({campEmergT:value.target.value})}/>
            </div>
        </div>

        <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Correo electrónico</label>
            <input type="text" className="form-control" id="inputCorreo" placeholder="correo_ejemplo@hotmail.com" name="campCorreo" value={this.state.campCorreo} onChange={(value)=> this.setState({campCorreo:value.target.value})}/>
        </div>

        <button type="submit" className="btn btn-primary" onClick={()=>this.sendUpdate()}>Editar Registro</button>
        
        </div>
        </div>
        </form>
   );
 }

 sendUpdate(){
    //  alert("boton actualizar");
    //  obtener id de parámetro
    let userId = this.props.match.params.licenseId;

    console.log('id que se envia en editar: '+userId);
    // url de backend
    const baseUrl = "http://localhost:3000/licencia/update/"+userId;
    // parametros de datos post
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
    .then(response=>{
      if (response.data.success===true) {
        alert("Estado: "+response.data.message)
      }
      else {
        alert("Error en la actualización")
      }
    }).catch(error=>{
      alert("Error - actualizar... "+error)
    })
   }

}

export default EditComponent;