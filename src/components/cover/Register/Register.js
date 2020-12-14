import React, { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { registerUser } from "../../../services/authService";
import Loading from "../../commons/Loading/Loading";
import {
  isFirstNameValid,
  isLastNameValid,
  isEmailValid,
  isPasswordValid,
} from "../../../utils/validators";
/*import { login } from "../../../services/authService";*/
import { TOKEN_KEY } from "../../../utils/constants";

const RegisterComponent = (props) => {
  const { setRefresh } = useAuth();
  const [loading, setLoading] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    gender: "",
    birthdate: "",
    isTeacher: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFirstNameValid(register.firstName)) {
      toast.warn("El nombre solo debe contener letras.");
    } else if (!isLastNameValid(register.lastName)) {
      toast.warn("El apellido solo debe contener letras.");
    } else if (!isEmailValid(register.email)) {
      toast.warn("El email es invalido.");
    } else if (!isPasswordValid(register.password)) {
      toast.warn(
        "La contraseña debe contener entre 6 y 12 caracteres y debe tener al menos 1 mayuscula, 1 minuscula y 1 numero."
      );
    } else if (register.password !== register.repeatPassword) {
      toast.warn("Las contraseñas no coinciden.");
    } else if (register.birthdate === "") {
      toast.warn("Por favor, seleccione una fecha de nacimiento.");
    } else if (register.gender === "") {
      toast.warn("Por favor, seleccione un genero.");
    } else {
      setLoading(true);
      registerUser(register)
        .then((response) => {
          if (response.status === "fail") {
            toast.warn(response.message);
          } else {
            localStorage.setItem(TOKEN_KEY, response.Authorization);
            setLoading(false);
            setRefresh(true);
          }
        })
        .catch(() => {
          setLoading(false);
          toast.error("Error del servidor, inténtelo más tarde");
        });
    }
  };

  return (
    <div
      className="modal fade"
      id="modalRegister"
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
                      <h1 className="h4 text-gray-900 mb-4">
                        ¡Crea una cuenta!
                      </h1>
                    </div>
                    <form
                      className="mx-1"
                      onSubmit={handleSubmit}
                      onChange={handleChange}
                    >
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <label for="exampleFirstName">Nombre</label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            id="exampleFirstName"
                            defaultValue={register.firstName}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label for="exampleLastName">Apellido</label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            id="exampleLastName"
                            defaultValue={register.lastName}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail">
                          Correo Electronico
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleInputEmail"
                          placeholder="example@matchup.com"
                          defaultValue={register.email}
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <label for="exampleInputPassword">Contraseña</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword"
                            placeholder="**********"
                            defaultValue={register.password}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label for="exampleInputRepeatPassword">
                            Repetir Contraseña
                          </label>
                          <input
                            type="password"
                            name="repeatPassword"
                            className="form-control"
                            id="exampleInputRepeatPassword"
                            placeholder="**********"
                            defaultValue={register.repeatPassword}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6">
                          <label for="exampleInputBirthdate">
                            Fecha de Nacimiento
                          </label>
                          <input
                            type="date"
                            name="birthdate"
                            className="form-control"
                            id="exampleInputBirthdate"
                            defaultValue={register.birthdate}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label for="exampleInputGender">
                            ¿Cuál es tu género?
                          </label>
                          <select
                            name="gender"
                            className="form-control"
                            id="exampleInputGender"
                            defaultValue={register.gender}
                          >
                            <option>Genero</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row pl-4 mt-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="isTeacher"
                            type="checkbox"
                            defaultValue={register.isTeacher}
                            id="exampleCheckIsTeacher"
                          />
                          <label
                            className="form-check-label"
                            for="exampleCheckIsTeacher"
                          >
                            ¿Eres Profesor?
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        {!loading ? (
                          <button
                            type="submit"
                            className="btn btn-primary btn-block mt-4"
                          >
                            Registrarse
                          </button>
                        ) : (
                          <Loading />
                        )}
                      </div>
                    </form>
                    <hr />

                    <div className="text-center">
                      <a className="small" href="login.html">
                        Ya tienes una cuenta? ¡Iniciar sesión!
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

export default RegisterComponent;
