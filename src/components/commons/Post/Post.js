import React from 'react'
import './Post.scss';

function Post({imagen,titulo,contenido,boton}) {
    return (
            <div className="card carta">
              <img src={`${imagen}`} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{`${titulo}`}</h5>
                <p className="card-text">{`${contenido}`}</p>
                {/* <a href="#" className="btn btn-primary">{`${boton}`}</a> */}
              </div>
            </div>
    )
}

export default Post;