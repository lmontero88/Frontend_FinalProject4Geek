import React, { useState } from 'react';
import { toast } from "react-toastify";
import useAuth from '../../../hooks/useAuth';
import { login } from '../../../services/authService';
import { TOKEN_KEY } from '../../../utils/constants';
import { isEmailValid } from '../../../utils/validators';
import Loading from '../../commons/Loading/Loading';
import Register from '../Register/Register';
import Recuperar from '../Recuperar/Recuperar'
import './Login.scss';

const Login = (props) => {
  const { setRefresh } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid(formData.email)) {
      toast.warn("Email es invalido");
    }
    else {
      setLoading(true);
      login(formData)
        .then(response => {
          if (response.status === 'fail') {
            toast.warn(response.message);
          } else {
            localStorage.setItem(TOKEN_KEY, response.Authorization);
            setRefresh(true);
          }
        })
        .catch(() => {
          toast.error("Error del servidor, inténtelo más tarde");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="row w-50 p-2">
      <article className="card-body card">
        <h4 className="card-title text-center mb-4 mt-1">Iniciar sesión</h4>
        <hr />
        <form onSubmit={handleSubmit} onChange={handleOnChange}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
              </div>
              <input name="email" className="form-control" placeholder="Correo electrónico" type="email" defaultValue={formData.email} />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
              </div>
              <input name="password" className="form-control" placeholder="******" type="password" defaultValue={formData.password} />
            </div>
          </div>
          <div className="form-group d-flex justify-content-center">
            {
              !loading
                ? <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                : <Loading />
            }
          </div>
          <p className="text-center"><a href="#" data-toggle="modal" data-target="#modalRecover" className="btn">¿Olvidaste tu contraseña?</a></p>
          <Recuperar />        
        </form>
        <hr />

        <div className="container d-flex justify-content-center">
          <button className="btn btn-success w-75 btn-agua" data-toggle="modal" data-target="#modalRegister">Registrarse</button>
        </div>
        <Register />
      </article>
    </div>
  )
}

export default Login;
