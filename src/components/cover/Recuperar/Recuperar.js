import React from "react";

const Recuperar = () => {
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
                          className="form-control form-control"
                          id="exampleInputEmail"
                          placeholder="Correo Electronico"
                        />
                      </div>
                      <div className="form-group row"></div>
                      <a
                        href="login.html"
                        className="btn btn-primary  btn-block"
                      >
                        Recuperar Contraseña
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="login.html">
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
