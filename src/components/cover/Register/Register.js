import React from 'react'

const Register = () => {
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
                  <form className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control" id="exampleFirstName"
                          placeholder="First Name" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control form-control" id="exampleLastName"
                          placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control" id="exampleInputEmail"
                        placeholder="Email Address" />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" className="form-control form-control"
                          id="exampleInputPassword" placeholder="Password" />
                      </div>
                      <div className="col-sm-6">
                        <input type="password" className="form-control form-control"
                          id="exampleRepeatPassword" placeholder="Repeat Password" />
                      </div>
                    </div>
                    <a href="login.html" className="btn btn-primary  btn-block">
                      Register Account
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
