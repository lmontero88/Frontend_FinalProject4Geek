import React, { useState, useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom';
import MainLayout from '../../../layouts/MainLayout';
import { API_URL } from '../../../utils/constants';
import Loading from '../Loading/Loading';




function PageDetailPlayer(props) {

    const { id } = useParams();
    const url = `${API_URL}/players/${id}`
    const [player, setPlayer] = useState({})
    const [loading, setLoading] = useState(false)


    const getPlayer = async () => {
        try {
            setLoading(true)
            const response = await fetch(url);
            const data = await response.json();
            setPlayer(data);
            setLoading(false)
        }
        catch (error) {
            setLoading(false)
            console.log(error);
        }

    }

    useEffect(() => {
        getPlayer();
    }, []);

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
                                    <p className="card-text"><u>Edad:</u>{player.birthdate}</p>
                                    <p className="card-text"> <u>Horario:</u> </p>
                                    {
                                        player.sports !== undefined && player.sports.length > 0 && player.sports.map((sport, i) => {
                                            return <p className="card-text" key={i}><u>Deporte: {sport.sport.name} Experiencia: {sport.experiencia} </u> </p>
                                        })
                                    }
                                    <p className="card-text"><u>Sexo:</u>{player.gender}</p>
                                    <p className="card-text"><u>Biografia:</u>{player.bio}</p>
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
