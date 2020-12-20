import React, { useState } from "react";
import { API_URL } from '../../../utils/constants';
import { toast } from "react-toastify";


const Recuperar = () => {
  const [recuperar, setRecuperar] = useState({email: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecuperar({ ...recuperar, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
      const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recuperar)
    };
    const response = await fetch(`${API_URL}/recuperar-password`, params);
    const data = await response.json();
    if(response.status >= 200 && response.status < 300) {
      toast.success(data.message)
    }
    else {
      toast.error(data.message)
    }
  };


  return (
    <div
      className="modal fade"
      id="modalRecover"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog container" role="document">
        <div className="modal-content">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-3">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-3 mt-2">
                        Recupera tu contraseña
                      </h1>
                    </div>
                    <form className="user">
                      <div className="form-group row"></div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control" onChange={handleChange}
                          id="exampleInputEmail"
                          placeholder="Correo Electronico"
                          name='email'
                        />
                      </div>
                      <div className="form-group row"></div>
                      <button
                        className="btn btn-primary  btn-block" onClick={handleSubmit}
                      >
                        Recuperar Contraseña
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small">
                        ¿Ya tienes una cuenta? ¡Iniciar sesión!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recuperar;
