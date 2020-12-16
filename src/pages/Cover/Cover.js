import React from "react";
import Welcome from "../../components/cover/Welcome";
import Login from "../../components/cover/Login";
import Register from "../../components/cover/Register/Register";
import "./Cover.scss";

const Cover = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        
          <div className="left-container col-md-6">
            <Welcome />
          </div>
          
          
          <div className="right-container bg-primary col-md-6">
            <Login />
          </div>
          <Register />
        
      </div>
    </div>
  );
};

export default Cover;
