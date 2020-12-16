import React from 'react'

function UserCardFriend({ nombre, apellido, email,sport }) {
    return (
        <div className="card pt-1 mb-2" style={{ width: '16rem' }}>
            <img src="https://place-hold.it/100" className="card-img-top rounded-circle w-75 m-auto " alt="..." />
            <div className="card-body">
                <div className='d-flex justify-content-center flex-column align-content-center'>
                    <h5 className="card-title align-items-center d-flex justify-content-center">{`${nombre} ${apellido}`}</h5>
                    <h6 className="card-title align-items-center d-flex justify-content-center">{email}</h6>
                    
                    {
                        sport !== undefined && sport.length > 0 && sport.map((sport, i) => {
                            return <p className="card-text" key={i}><u>Deporte: </u>{sport.sport.name} <u>Experiencia:</u> {sport.experiencia}  </p>
                        })
                    }
                </div>
                <div className='d-flex justify-content-center'>
                    <button type='button' className="btn btn-primary w-50">Contactar</button>
                </div>

            </div>

        </div>

    )
}

export default UserCardFriend
