import React from 'react';
import '../UserCard/UserCard.scss'

function UserCard(props) {
    return (


        <div className="card pt-3 mb-2" style={{ width: '14rem' }}>
            <div className='d-flex justify-content-end mr-4'>
                <i class="far fa-heart fa-2x cursor-pointer"></i>
            </div>
            <img src="https://place-hold.it/100" className="card-img-top rounded-circle w-75 m-auto " alt="..." />
            <div className="card-body">
                <div className='d-flex justify-content-center'>
                    <h5 className="card-title">{props.nombre}</h5>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type='button' className="btn btn-primary w-50" data-toggle="modal" data-target="#exampleModal">Ver</button>

                   
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Lilian Montero</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body"> 
                                    <div className='d-flex'>
                                        <img src="https://place-hold.it/100" className="card-img-top rounded-circle w-25 m-auto " alt="..." />
                                        <div>
                                            <span><b>Edad:</b> {props.edad}</span><br/>
                                            <span><b>Experiencia:</b> {props.experiencia}</span><br/>
                                            <span><b>Contacto:</b>{props.contacto}</span><br/>
                                            <span><b>Horarios:</b>{props.horarios}</span><br/>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Contactar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default UserCard
