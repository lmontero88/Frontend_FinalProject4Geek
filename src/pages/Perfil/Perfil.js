import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { API_URL } from "../../utils/constants";
import useAuth from "../../hooks/useAuth";
import { getToken, logout } from "../../services/authService";
import "./Perfil.scss";
import profilePhoto from "../../images/icono-perfil-2.jpg";
import photo2 from "../../images/footballer-marketing.png";
import { toast } from "react-toastify";
import { getUser } from "../../services/authService";

const Perfil = () => {
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(false);
  const { setRefresh } = useAuth();

  const profile = async () => {
    try {
      setLoading(true);
      // Obtengo el token del localStorage
      // en caso que no este o este expirado retorna null
      const token = getToken();
      if (token === null) {
        // le mando a decir a todos los componentes que se actualicen,
        // porque el token esta expirado o no esta
        // entonces hay que mostrar la pagina de inicio
        setRefresh(true);
      } else {
        const id = getUser().sub;
        // prepara la peticion a la API con el token que obtuve
        const params = {
          method: "GET", // en caso que sea PUT, poner PUT, POST poner POST
          headers: {
            // aqui es donde va el token, tiene que llamarse Authorization obligatoriamente
            Authorization: token,
          },
        };
        const response = await fetch(`${API_URL}/players/${id}`, params);
        // Si la API me retorna 401 (Unauthorized) debo eliminar el token del localstorage
        // con la funcion logout, mostrarle un mensaje y decirle a todos los componentes
        // que se actualicen
        if (response.status === 401) {
          logout();
          toast.warn("Su token ha expirado. Vuelva a iniciar sesión.");
          setRefresh(true);
        }
        // si la respuesta es OK (de 200 a 300) hago lo que normalmeente iba a hacer
        else if (response.status >= 200 && response.status < 300) {
          const data = await response.json();
          setUser(data);
        }
        // en cualquier otro caso muestro un mensaje y mas nada
        else {
          toast.err("Ha ocurrido un error.");
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    profile();
  }, []);

  return (
    <MainLayout>
      <>
        <div className="container-fluid mt-5 px-4 w-100">
          <div className="row">
            <div className="col-md-3 col-sm-12 text-center">
              <div className="row">
                <div className="col-md-12 col-sm-12 mb-3">
                  <img
                    src={profilePhoto}
                    name="image"
                    id="profilePhoto"
                    className="rounded-circle"
                    alt="imagen"
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
                            src={profilePhoto}
                            id="image"
                            className="rounded mb-4 mt-3"
                            alt="imagen"
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
                <h1>{user.firstname + " " + user.lastname}</h1>
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
              <img src={photo2} alt="imagen" id="photo2" />
            </div>
            <div className="col-md-5 col-sm-12 px-5 py-2">
              <form>
                <div className="form-row border-bottom">
                  <div className="form-group col-md-12 col-sm-12">
                    <label htmlFor="availableDays">Dias Disponibles</label>
                    <select
                      className="form-control"
                      id="availableDays"
                      name="availableDays"
                    >
                      <option defaultValue="">Selecciona un dia</option>
                      <option value="mon">Lunes</option>
                      <option value="tue">Martes</option>
                      <option value="wed">Miercoles</option>
                      <option value="thu">Jueves</option>
                      <option value="fri">Viernes</option>
                      <option value="sat">Sabados</option>
                      <option value="dom">Domingos</option>
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
                      <select className="custom-select" id="hour" name="hour">
                        <option defaultValue="00">00hs</option>
                        <option value="01">01hs</option>
                        <option value="02">02hs</option>
                        <option value="03">03hs</option>
                        <option value="04">04hs</option>
                        <option value="05">05hs</option>
                        <option value="06">06hs</option>
                        <option value="07">07hs</option>
                        <option value="08">08hs</option>
                        <option value="09">09hs</option>
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
                          <option defaultValue="">Selecciona un deporte</option>
                          <option value="soccer">Futbol</option>
                          <option value="basketball">Basketball</option>
                          <option value="paddle">Paddle</option>
                          <option value="golf">Golf</option>
                          <option value="tennis">Tennis</option>
                          <option value="skate">Skate</option>
                        </select>
                      </div>
                      <div className="form-group col-md-5">
                        <label htmlFor="level">Nivel</label>
                        <select className="form-control" id="level">
                          <option defaultValue="">Selecciona un nivel</option>
                          <option value="beginner">Principiante</option>
                          <option value="intermediate">Intermedio</option>
                          <option value="advanced">Avanzado</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2 d-flex align-self-end">
                        <button className="btn btn-primary">Agregar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-md-12">
                  <ul className="mt-4">
                    {user.sports !== undefined &&
                      user.sports.length > 0 &&
                      user.sports.map((sport, i) => {
                        return (
                          <li className="mt-3" key={i}>
                            <u><b>Deporte</b></u>:{" "}
                            {sport.sport.name}<br/>
                            <u><b>Experiencia</b></u>:{" "}
                            {sport.experiencia}{" "}
                            <i className="fas fa-trash ml-2" id="trash"></i>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MainLayout>
  );
};

export default Perfil;

/*
const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    image: "",
  });

  /*const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const [sport, setSport] = useState({
    name: "",
    exp: "",
  });*/
