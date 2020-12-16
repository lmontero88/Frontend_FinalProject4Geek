import React from 'react';
import './UserCard.scss'
import {withRouter} from 'react-router-dom';

function UserCard({nombre,apellido,id,history}) {
    
    const goToJugador = () => {
        history.push(`/match/${id}`);
    } 

    return (
        <div className="card pt-3 mb-2" style={{ width: '16rem' }}>
            <div className='d-flex justify-content-end mr-4'>
                <i className="far fa-heart fa-2x cursor-pointer"></i>
            </div>
            <img src="https://place-hold.it/100" className="card-img-top rounded-circle w-75 m-auto " alt="..." />
            <div className="card-body">
                <div className='d-flex justify-content-center'>
                    <h5 className="card-title">{`${nombre} ${apellido}`}</h5>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type='button' className="btn btn-primary w-50" /* data-toggle="modal" data-target="#exampleModal */ onClick={goToJugador} >Ver</button>
                </div>

            </div>

        </div>


    )
}

export default withRouter(UserCard)
