import React from "react";

function Cards() {
  return (
    <div className="row">
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Match
                </div>
                <div>
                  {" "}
                  <a className="h5 mb-0 font-weight-bold text-gray-800">
                    ver
                  </a>{" "}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-basketball-ball fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Profesores
                </div>
                <div>
                  {" "}
                  <a className="h5 mb-0 font-weight-bold text-gray-800">
                    ver
                  </a>{" "}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-chalkboard-teacher fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Clasificados
                </div>
                <div>
                  {" "}
                  <a className="h5 mb-0 font-weight-bold text-gray-800">
                    ver
                  </a>{" "}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-shopping-cart fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Perfil
                </div>
                <div>
                  {" "}
                  <a className="h5 mb-0 font-weight-bold text-gray-800">
                    ver
                  </a>{" "}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-user fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
