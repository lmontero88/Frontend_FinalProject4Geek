import React, { useState } from 'react';
//import { toast } from "react-toastify";
//import { isPasswordValid, isEmailValid, isNameOrLastname } from '../../../utils/validators';



const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    repetPassword: ''
  });

  const { name, lastname, email, password, repetPassword } = formData

  const handleInputChange = ({target})=>{
        setFormData({
          ...formData,
          [target.name]:target.value
        })
          

  }




  /*const handleSubmit = (e) => {
    e.preventDefault();

    if (!isPasswordValid(formData.password)) {
      toast.warn("Password Inorrecto");
    }
    if (!isPasswordValid(formData.repetPassword) & formData.password === formData.repetPassword) {
      toast.warn("Password Inorrecto");
    }
    if (!isEmailValid(formData.email)) {
      toast.warn("Email es invalido");
    }
    if (!isNameOrLastname(formData.name)) {
      toast.warn("Escriba el Nombre Correcto")
    }
    if (!isNameOrLastname(formData.lastname)) {
      toast.warn("Escriba el Apellido correctamente")
    }

  }*/


  return (
    <div className="modal fade" id="modalRegister" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">


      <div className="modal-dialog container" role="document">
        <div className="modal-content">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">

              <div className="row">
                <div className="col-lg-12">
                  <div className="p-3">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">¡Crea una cuenta!</h1>
                    </div>
                    <form className="user" /*onSubmit={handleSubmit}*/>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" name='name' value={name} className="form-control form-control" id="exampleFirstName"
                            placeholder="Nombre" onChange={handleInputChange}/>
                        </div>
                        <div className="col-sm-6">
                          <input type="text" name='lastname' value={lastname} className="form-control form-control" id="exampleLastName"
                            placeholder="Apellido" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="email" name='email' value={email} className="form-control form-control" id="exampleInputEmail"
                          placeholder="Correo Electrónico" onChange={handleInputChange} />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="password" name='password' value={password} className="form-control form-control"
                            id="exampleInputPassword" placeholder="Contraseña" onChange={handleInputChange}/>
                        </div>
                        <div className="col-sm-6">
                          <input type="password" name='repetPassword' value={repetPassword} className="form-control form-control"
                            id="exampleRepeatPassword" placeholder="Repetir Contraseña" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <a href="login.html" className="btn btn-primary  btn-block">
                        Registrarse
          </a>
                    </form>
                    <hr />

                    <div className="text-center">
                      <a className="small" href="login.html">Ya tienes una cuenta? ¡Iniciar sesión!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Register
