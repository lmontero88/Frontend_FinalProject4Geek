import React from 'react'
import './Post.scss';

function Post() {
    return (
            <div className="card carta">
              <img src="https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" width=""/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
    )
}

export default Post;