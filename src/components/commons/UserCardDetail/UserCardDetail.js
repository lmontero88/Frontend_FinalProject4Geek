import React from 'react'

const UserCardDetail = ({ nombre, edad, sexo, apellido, biografia, sports }) => {
        return (
            <div div className = "modal fade" id = "exampleModal" tabIndex = "-1" role = "dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{`${nombre} ${apellido}`}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='d-flex'>
                            <img src="https://place-hold.it/100" className="card-img-top rounded-circle w-25 m-auto " alt="..." />
                            <div className='ml-2'>
                                <span><b>Edad:</b>{edad}</span><br />
                                <span><b>Sexo:</b>{sexo}</span><br />
                                {/* <span><b>Horarios:</b>{horarios}</span><br /> */}
                                {  
                                    sports.map((sport, i) => {
                                        return <div key={i}><span><b>Sport: </b>{sport.sport.name} <b>Experiencia: </b>{sport.experiencia}</span></div>
                                    })
                                }
                                <span><b>Descripción: </b>{biografia}</span><br />
                            </div>
                        </div>
    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Match</button>
                    </div>
                </div>
            </div>
            </div >
        )
}

export default UserCardDetail
