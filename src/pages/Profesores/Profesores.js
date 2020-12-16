import React, { Fragment, useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import UserCard from '../../components/commons/UserCard/UserCard';
import { API_URL, TOKEN_KEY } from '../../utils/constants';
import Loading from '../../components/commons/Loading/Loading';
import { getToken, logout } from '../../services/authService';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

function Profesores() {
  const [loading, setLoading] = useState(false)
  const [profesor, setProfesor] = useState([])
  const { setRefresh } = useAuth();

  const profesores = async () => {
    try {
      setLoading(true)
     
      const token = getToken();
      if (token === null) {
       
        setRefresh(true)
      }
      else {
        
        const params = {
          method: "GET", 
          headers: {
            
            "Authorization": token
          },
        };
        const response = await fetch(`${API_URL}/profesores`, params);
        
        if (response.status === 401) {
          logout()
          toast.warn("Su token ha expirado. Vuelva a iniciar sesión.")
          setRefresh(true)
        }
       
        else if (response.status >= 200 && response.status < 300) {
          const data = await response.json();
          setProfesor(data)
        }
       
        else {
          toast.err("Ha ocurrido un error.")
        }
      }
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    profesores();
  }, []);

  

    // const [datos, setDatos] = useState({
    //     exampleRadios: '',
    //     desde:'',
    //     hasta:''
    
    //   })
    
    //   const handleInputChange = (event) => {
    //     console.log(event.target.value)
    //     setDatos({
    //       ...datos,
    //       [event.target.name] : event.target.value
    //     })
    //   }
    //   const enviarDatos = (event) =>{
    //     event.preventDefault();
    //     console.log(datos.exampleRadios + ' ' + datos.desde)
    //   }
  
    //   let profesores = [{nombre: "lilian", edad: "20", contacto: "9 4585 4758", horarios:"lunes, martes y jueves"}, {nombre: "lilian", edad: "20", contacto: "9 4585 4758", horarios:"lunes, martes y jueves"}, {nombre: "lilian", edad: "20", contacto: "9 4585 4758", horarios:"lunes martes y jueves"},]

      return (
        <MainLayout>
          <Fragment>
        <div className='container col-md-12 pr-1 pl-1'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12'>
              <div className="card col-12">
                <div className="card-body">
                  <h5 className="card-title">Filtros</h5>
                  <hr />
                  <form>
                    <span><b>Sexo</b></span>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label className="form-check-label" htmlFor="exampleRadios1">
                        Femenino
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                      <label className="form-check-label" htmlFor="exampleRadios2">
                        Masculino
                      </label>
                    </div>
                    <label>Edad</label>
                    <div className="row">
                      <div className="col-auto">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text">desde</div>
                          </div>
                          <input type="number" className="form-control" name="desde" id="desde" placeholder="0" />
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text">hasta</div>
                          </div>
                          <input type="number" className="form-control" name="hasta" id="hasta" placeholder="0" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="deporte">Deporte</label>
                      <select
                        className="custom-select custom-select-sm mb-1"
                        id="deporte"
                      >
                        <option selected>Open this select menu</option>
                        <option>Soccer</option>
                        <option>Basketball</option>
                        <option>Paddle</option>
                        <option>Golf</option>
                        <option>Tennis</option>
                        <option>Skate</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experiencia">Experiencia</label>
                      <select
                        className="custom-select custom-select-sm mb-1"
                        id="experiencia"
                      >
                        <option selected>Open this select menu</option>
                        <option>Principiante</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                      </select>
                    </div>
                    <hr></hr>

                    <div className="form-row border-bottom">
                      <div className="form-group col-md-12">
                        <label for="availableDays">Días disponibles</label>
                        <select className="form-control" id="availableDays">
                          <option>Selecciona un día</option>
                          <option>Lunes</option>
                          <option>Martes</option>
                          <option>Miercoles</option>
                          <option>Jueves</option>
                          <option>Viernes</option>
                          <option>Sábado</option>
                          <option>Domingo</option>
                        </select>
                      </div>
                      <div className="form-row ">
                        <label htmlFor="availableHours" className="ml-2">
                          Horas disponibles
                        </label>
                        <div className="form-group col-md-9 form-inline">
                          <div className="input-group mb-3 ml-1 mr-3">
                            <div className="input-group-prepend">
                              <label className="input-group-text" htmlFor="fromHour">
                                desde
                             </label>
                            </div>
                            <select className="custom-select" id="fromHour">
                              <option selected value="0">
                                00
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
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <label className="input-group-text" htmlFor="fromHour">
                                hasta
                          </label>
                            </div>
                            <select className="custom-select" id="toHour">
                              <option defaultValue="0">00hs</option>
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
                              <option selected value="12">
                                12hs
                              </option>
                              <option defaultValue="13">13hs</option>
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
                      </div>
                    </div>

                    <button className="btn btn-secondary mt-3" type="submit">Filtrar</button>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-xl-9 col-lg-8 col-md-12'>
              <div className='row d-flex justify-content-around flex-wrap align-content-center min-vh-100'>
                {
                  loading ? <Loading /> : profesor.map((item, i) => {
                    return <UserCard key={i} nombre={item.firstname} apellido={item.lastname} id={item.id} />
                  })
                }

              </div>
            </div>
          </div>


        </div>
      </Fragment>
        </MainLayout>
      )
    }
        
export default Profesores;
