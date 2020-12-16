import React,{useState} from 'react'
import { API_URL } from '../../../utils/constants';
import { logout, getToken, getUser } from '../../../services/authService';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';


function SolicitudCard({nombre, apellido,id,setRefreshMatch}) {
    const { setRefresh } = useAuth();
    const [loading, setLoading] = useState(false)

    
    
   

    //PUT para aprobar o rechazar solicitud
    const responder_solicitud = async (e) => {
        try {
            setLoading(true)

            const match ={
                "friend_id": id,
                "is_accepted":e.target.name === 'aceptar' ? true : false
            }

            const token = getToken();
            if (token === null) {

                setRefresh(true)
            }
            else {
                const params = {
                    method: "PUT",
                    headers: {
                        "Authorization": token,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(match)
                };
                const response = await fetch(`${API_URL}/matchs`, params);

                if (response.status === 401) {
                    logout()
                    toast.warn("Su token ha expirado. Vuelva a iniciar sesión.")
                    setRefresh(true)
                }
                else if (response.status === 400) {
                    const data = await response.json();
                    toast.warn(data.message)
                }
                else if (response.status >= 200 && response.status < 300) {
                    const data = await response.json();
                    toast.success(data.message)
                    setRefreshMatch(p => !p)
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

    return (

        <div className='col-12 d-flex bg-white p-2 justify-content-around  border-left-primary mb-2'>
            <div>
                <img src="https://place-hold.it/100" className="card-img-top rounded-circle w-100 m-auto " alt="..." />
            </div>
            <div className="d-flex flex-column justify-content-center align-content-center">
                <h6>{`${nombre} ${apellido}`}</h6>
                <div className='d-flex flex-md-wrap-reverse'>
                    <button className="btn btn-primary mr-2 btn-sm" name='aceptar' type="button" onClick={responder_solicitud}>Aceptar</button>
                    <button className="btn btn-secondary btn-sm" type="button" name='rechazar' onClick={responder_solicitud}>Rechazar</button>
                </div>
            </div>

        </div>

    )
}

export default SolicitudCard
