import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import "./Perfil.scss";
import photo2 from "../../images/footballer-marketing.png";
import { getUser } from '../../services/authService';

const Perfil = () => {
  let profileImage = "https://place-hold.it/150";

  const [user, setUser] = useState({
    firstName: "",
    lastName: "Peña",
    bio: "Hola, tengo 24 años y me gusta mucho jugar al futbol.",
    imagen: "",
  });

  return (
    <div>
      <MainLayout>
        <div className="container mt-5 w-100">
          <div className="row">
            <div className="col-md-2 col-sm-12 text-center">
              <div className="row">
                <div className="col-md-12 col-sm-12 mb-3">
                  <img
                    src={profileImage}
                    id="profileImage"
                    className="rounded-circle"
                    alt="profileImage"
                  ></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#editImageModal"
                  >
                    Editar Imagen
                  </button>
                  <div
                    className="modal fade"
                    id="editImageModal"
                    tabIndex="-1"
                    aria-labelledby="editImageModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="editImageModalLabel">
                            Editar Imagen
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <img
                            src={profileImage}
                            id="profileImage"
                            className="rounded mb-4 mt-3"
                            alt="profileImage"
                          ></img>
                          <div className="mb-3">
                            <input
                              className="form-control p-1"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Guardar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 border-right border-left px-3 py-2">
              <div className="text-center mb-4 mt-2">
                <h1>{getUser().firstName + " " + user.lastName}</h1>
              </div>
              <div className="border rounded-lg pt-2 px-2">
                <h5>Sobre mi:</h5>
                <p>{user.bio}</p>
              </div>
              <div className="row d-flex justify-content-end mr-1 mt-3">
                <Link
                  to="/editar_perfil"
                  type="button"
                  className="btn btn-primary"
                >
                  Editar Perfil
                </Link>
              </div>
              <img src={photo2} alt="..." id="photo2" />
            </div>
            <div className="col-md-6 col-sm-12 px-5 py-2">
              <form>
                <div className="form-row border-bottom">
                  <div className="form-group col-md-12 col-sm-12">
                    <label htmlFor="availableDays">Dias Disponibles</label>
                    <select className="form-control" id="availableDays">
                      <option>Lunes</option>
                      <option>Martes</option>
                      <option>Miercoles</option>
                      <option>Jueves</option>
                      <option>Viernes</option>
                      <option>Sabados</option>
                      <option>Domingos</option>
                    </select>
                  </div>
                  <div className="form-group col-md-7">
                    <label htmlFor="availableHours" className="ml-2">
                      Horario Disponible
                    </label>
                    <div className="input-group mb-3 ml-1">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="hour">
                          Hora
                        </label>
                      </div>
                      <select className="custom-select" id="hour">
                        <option selected value="0">
                          00hs
                        </option>
                        <option value="1">01hs</option>
                        <option value="2">02hs</option>
                        <option value="3">03hs</option>
                        <option value="4">04hs</option>
                        <option value="5">05hs</option>
                        <option value="6">06hs</option>
                        <option value="7">07hs</option>
                        <option value="8">08hs</option>
                        <option value="9">09hs</option>
                        <option value="10">10hs</option>
                        <option value="11">11hs</option>
                        <option value="12">12hs</option>
                        <option value="13">13hs</option>
                        <option value="14">14hs</option>
                        <option value="15">15hs</option>
                        <option value="16">16hs</option>
                        <option value="17">17hs</option>
                        <option value="18">18hs</option>
                        <option value="19">19hs</option>
                        <option value="20">20hs</option>
                        <option value="21">21hs</option>
                        <option value="22">22hs</option>
                        <option value="23">23hs</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 ml-4 d-flex align-self-center justify-content-center">
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitches"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customSwitches"
                      >
                        Estado
                      </label>
                    </div>
                  </div>
                </div>
              </form>
              <form>
                <div className="form-row mt-4 ml-1">
                  <label htmlFor="addSports">Agrega un Deporte</label>
                  <div className="col-md-12">
                    <div
                      className="form-row border rounded-lg pl-3 pr-5 pt-2"
                      id="addSports"
                    >
                      <div className="form-group col-md-5">
                        <label htmlFor="sport">Deporte</label>
                        <select className="form-control" id="sport">
                          <option>Futbol</option>
                          <option>Basketball</option>
                          <option>Paddle</option>
                          <option>Golf</option>
                          <option>Tennis</option>
                          <option>Skate</option>
                        </select>
                      </div>
                      <div className="form-group col-md-5">
                        <label htmlFor="level">Nivel</label>
                        <select className="form-control" id="level">
                          <option>Principiante</option>
                          <option>Intermedio</option>
                          <option>Avanzado</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2 d-flex align-self-end">
                        <button className="btn btn-primary">Agregar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Perfil;
