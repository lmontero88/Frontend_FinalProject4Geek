import React, { useState, useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom';
import MainLayout from '../../../layouts/MainLayout';
import { API_URL } from '../../../utils/constants';
import Loading from '../Loading/Loading';
import { logout, getToken } from '../../../services/authService';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';


// Para hacer match
// 1.- Crear una funcion para el onCLick
// 2.- obtener el id del usuario que esta logueado (fijarse en el componente Navbar y la funcion getUser())
// 3.- Crear una variable como esta 
//   {
//     "user_id_from": 1, // id del usuario logueado
//     "user_id_to": 3 // id del usuario que le dieron match
//   } 
// 4.- Hacer una peticion POST con el objeto creado y el token obtenido (fijarse en el archivo authServices y la funcion login y en el componente MATCH)


function PageDetailPlayer(props) {
    const { id } = useParams();
    const [url, setUrl] = useState(`${API_URL}/players/${id}`)
    const [player, setPlayer] = useState({})
    const [loading, setLoading] = useState(false)
    const { setRefresh } = useAuth();

    const getPlayer = async () => {
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
                const response = await fetch(url, params);
                if (response.status === 401) {
                    logout()
                    toast.warn("Su token ha expirado. Vuelva a iniciar sesión.")
                    setRefresh(true)
                }
                else if(response.status >= 200 && response.status < 300){
                    const data = await response.json();
                    setPlayer(data);
                }
                else {
                    toast.err("Ha ocurrido un error.")
                }
            }
            setLoading(false)
        }
        catch (error) {
            setLoading(false)
            console.log(error);
        }

    }

    useEffect(() => {
        getPlayer();
    }, [url]);

    const EnviarAtras = () => {
        props.history.goBack()
    }

    return (
        <MainLayout>
            <div className='col-md-12  d-flex flex-md-grow justify-content-center align-content-center'>
                {
                    loading ? <Loading />
                        :
                        <>
                            <div className="card col-md-6" style={{ width: '18rem' }}>
                                <img src='https://place-hold.it/100' className="card-img-top mt-3" alt="imagen de prueba"></img>
                            </div>

                            <div className='row d-flex justify-content-center mt-5'>
                                <div className="card col-md- ml-3" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title"><b>{`${player.firstname} ${player.lastname}`}</b></h5>
                                        <p className="card-text"><u>Edad: </u>{ player.birthdate !== undefined && player.birthdate !== null && player.birthdate.length !== 0 && new Date().getFullYear() - new Date(player.birthdate).getFullYear()}</p>
                                        <p className="card-text"> <u>Horario: </u> </p>
                                        {
                                            player.sports !== undefined && player.sports.length > 0 && player.sports.map((sport, i) => {
                                                return <p className="card-text" key={i}><u>Deporte: {sport.sport.name} Experiencia: {sport.experiencia} </u> </p>
                                            })
                                        }
                                        <p className="card-text"><u>Sexo: </u>{player.gender}</p>
                                        <p className="card-text"><u>Biografia: </u>{player.bio}</p>
                                        <div className='d-flex justify-content-between'>
                                            <button className="btn btn-primary" onClick={EnviarAtras}>Atrás</button>
                                            <button className="btn btn-secondary">Match</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                }

            </div>
        </MainLayout>
    )
}

export default withRouter(PageDetailPlayer)
