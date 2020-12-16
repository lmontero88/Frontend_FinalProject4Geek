import React, { Fragment, useState, useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import SolicitudCard from '../../components/commons/SolicutudCard/SolicitudCard'
import UserCardFriend from '../../components/commons/UserCardFriend/UserCardFriend'
import { API_URL} from '../../utils/constants';
import Loading from '../../components/commons/Loading/Loading';
import { getToken, logout } from '../../services/authService';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

function MisMatch() {

    const [player, setplayer] = useState([])
    const [loading, setLoading] = useState(false)
    const { setRefresh } = useAuth();
    const [refreshMatch, setRefreshMatch] = useState(false)
    const [friend, setFriend] = useState([])

    //GET para traer los amigos
    const get_friends = async () => {
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
            const response = await fetch(`${API_URL}/matchs`, params);
            
            if (response.status === 401) {
              logout()
              toast.warn("Su token ha expirado. Vuelva a iniciar sesión.")
              setRefresh(true)
            }
           
            else if (response.status >= 200 && response.status < 300) {
              const data = await response.json();
              setFriend(data)
            }
            else if (response.status === 400) {
                const data = await response.json();
                toast.warn(data.message)
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

    
    //GET para traer las solicitudes de amistad.
    const jugadores_solicitud = async () => {
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
            const response = await fetch(`${API_URL}/matchs/pending`, params);
            
            if (response.status === 401) {
              logout()
              toast.warn("Su token ha expirado. Vuelva a iniciar sesión.")
              setRefresh(true)
            }
           
            else if (response.status >= 200 && response.status < 300) {
              const data = await response.json();
              setplayer(data)
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
        jugadores_solicitud();
        get_friends();
      }, [refreshMatch]);

      console.log(player)

    return (
        <div>
            <MainLayout>

                
                <div className='col-xs-12 d-flex'>
                    
                    <div className='col-xs-12 col-md-12 col-xl-6 col-lg-6 d-flex justify-content-around flex-wrap align-content-start min-vh-100'>
                        
                        {
                   friend.map((item, i) => {
                    return <UserCardFriend  key={i} nombre={item.firstname} apellido={item.lastname} id={item.id} email ={item.email} sport={item.sports}/>
                  })
                }

                    </div>
                    <div className='col-xs-12 col-md-12 col-xl-6 col-lg-6'>
                    {
                  loading ? <Loading /> : player.map((item, i) => {
                    return <SolicitudCard key={i} nombre={item.firstname} apellido={item.lastname} id={item.id} setRefreshMatch = {setRefreshMatch} />
                  })
                }
                    </div>
                </div>





            </MainLayout>
        </div>
    )
}

export default MisMatch
